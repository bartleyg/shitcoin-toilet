/*
Shitcoin Toilet
Logic:
1. get account from metamask
2. get tokens for account from etherscan
3. parse tokens and filter by value
*/
const contractJSON = require('../build/contracts/ShitcoinToilet.json')
const usedERC20ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_who",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
]

var tokens
var shitcoinToilet
var userAccount
var deployedAddress

function startApp() {
  // function runs every 1/10th sec
  var accountInterval = setInterval(function() {
    // check if metamask account has changed
    web3.eth.getAccounts().then(async function(accounts) {
      if (accounts[0] !== userAccount) {
        userAccount = accounts[0]
        console.log('new userAccount', userAccount)

        const networkId = await web3.eth.net.getId() // await?
        deployedAddress = contractJSON.networks[networkId].address
        console.log('networkId', networkId)
        console.log('deployedAddress', deployedAddress)

        // instantiate our contract
        shitcoinToilet = new web3.eth.Contract(contractJSON.abi, deployedAddress, {from: userAccount})

        // clear any old dapp data before updating with new account
        var divTokenList = document.getElementById('tokenList')
        while(divTokenList.firstChild) {
            divTokenList.removeChild(divTokenList.firstChild)
        }
        updateAccount(userAccount)
      }
    })
  }, 100); // run every 100 ms
}

// Update address, balance, get transactions for address
function updateAccount(userAccount) {
  if (userAccount === undefined)
    document.getElementById('address').textContent = 'Please sign into MetaMask ↗️'
  else
    document.getElementById('address').textContent = userAccount

  getTokens(userAccount)
}

function getTokens(userAccount) {
  url = 'https://damp-everglades-68199.herokuapp.com/https://etherscan.io/tokenholdingsHandler.ashx?&a=' +
        userAccount +
        '&q=&p=1&f=0&h=0&sort=total_price_usd&order=asc&pUsd24hrs=275.81&pBtc24hrs=0.0412&pUsd=287.61&fav='
  fetch(url).then(function(response) {
    return response.json()
  })
  .then(function(json) {
    return json.layout
  })
  .then(function(tokenListHTML) {
    tokenListHTML = '<table>' + tokenListHTML + '</table>'
    var uglyJSON = $(tokenListHTML).tableToJSON({ignoreHiddenRows: false, onlyColumns: [1, 3, 5],
                headings: ['address', 'qtyname', 'value']})
    // check for "No token found"
    if (uglyJSON[0].address !== 'No token found') {
      tokens = cleanUpTokenJSON(uglyJSON)
      displayTokenNameValue()
      getWeiTokenBalance()
    } else {
      console.log('user has no shitcoins')
      var tokenList = document.getElementById('tokenList')
      tokenList.setAttribute('class', tokenList.getAttribute('class') + ' center')
      tokenList.textContent = 'You have no shitcoins 😄'
    }
  })
}

function cleanUpTokenJSON(uglyJSON) {
  cleanJSON = [] // array of jsons
  for (i = 0; i < uglyJSON.length; i++) {
    json = {}
    qtyname = uglyJSON[i].qtyname.replace(/,/g, '') // remove commas in qty
    // separate number from name
    qtyname = qtyname.match(/[0-9.]+|[a-zA-Z.\ ]+/g)
    json['name'] = qtyname[1].trim()
    if (json['name'] === 'ETH')
      continue  // ETH is no shitcoin
    json['etherscanQty'] = qtyname[0]
    json['address'] = uglyJSON[i].address.slice(-42)
    // limit token quantity to 100k to exclude things like Augur SHARE tokens in the billions+
    // '-' are known worthless nontrading tokens
    if (uglyJSON[i].value === '-' && json['etherscanQty'] < 100000) {
      json['value'] = '0'
      cleanJSON.push(json)
    }
    else if (json['etherscanQty'] < 100000) {
      // remove formatting to get the USD value of tokens
      var value = uglyJSON[i].value.split('@')[0].replace(/\$/, '')
      // only keep coin if total value user holds is less than $1
      if (value < 1) {
        json['value'] = value
        cleanJSON.push(json)
      }
    }
  }
  //console.log(cleanJSON)
  return cleanJSON
}

function displayTokenNameValue() {
  var tbody = document.getElementById('tokenList')
  for (let i = 0; i < tokens.length; i++) {
    // create row for token
    var tr = document.createElement('div')
    tr.setAttribute('class', 'divTableRow')
    tr.setAttribute('id', tokens[i]['address'])
    tbody.appendChild(tr)

    // token name cell
    var name = document.createElement('div')
    name.setAttribute('class', 'divTableCell')
    name.textContent = tokens[i].name
    tr.appendChild(name)

    // token value cell
    var value = document.createElement('div')
    value.setAttribute('class', 'divTableCell')
    value.textContent = '$' + tokens[i].value
    tr.appendChild(value)
  }
}

function getWeiTokenBalance() {
  for (let i = 0; i < tokens.length; i++) {
    //console.log(_tokens[i]['name'], _tokens[i]['address'])
    tokens[i]['erc20'] = new web3.eth.Contract(usedERC20ABI, tokens[i]['address'])
    tokens[i].erc20.methods.balanceOf(userAccount).call(function(error, balance){
      if (balance === '0' || balance === undefined) {
        deleteRow(tokens[i].address)  // delete token's html
      } else {
        tokens[i].qty = balance
        console.log(tokens[i].name, tokens[i].address, 'qty', tokens[i].qty)
        checkTokenAvailable(tokens[i])
      }
    })
  }
}

function checkTokenAvailable(token) {
  // get the row for this token by address
  let tr = document.getElementById(token.address)
  // token quantity cell
  var qty = document.createElement('div')
  qty.setAttribute('class', 'divTableCell')
  qty.textContent = token.qty
  tr.appendChild(qty)

  // get token qty allowance for contract from web3
  token.erc20.methods.allowance(userAccount, deployedAddress).call(function(error, allowance){
    if (error) {
      console.log('allowance error', error)
      deleteRow(token.address)  // delete token's html
    } else {
      if (allowance < token.qty) {
        displayApproveButton(tr, token)
      } else {
        // display APPROVED
        console.log(token.name, 'APPROVED', allowance)
      }
    }
  })
}

function deleteRow(address) {
  var tr = document.getElementById(address)
  tr.parentNode.removeChild(tr)
}

function displayApproveButton(tr, token) {
  // approve button
  // TODO: need logic to display button if not approved
  // or else display text if already APPROVED
  var approveCell = document.createElement('div')
  approveCell.setAttribute('class', 'divTableCell')
  var button = document.createElement('a')
  button.onclick = function(){
    console.log('approve token', token.address, 'qty', token.qty)
    shitcoinToilet.methods.approve(token.address, token.qty).send()
  }
  button.tokenIndex = i;
  button.setAttribute('class', 'myButton')
  button.textContent = 'APPROVE'
  approveCell.appendChild(button)
  tr.appendChild(approveCell)
}

function displayFlushButton(tr, token) {
  // flush button
  var flushCell = document.createElement('div')
  flushCell.setAttribute('class', 'divTableCell')
  var button = document.createElement('a')
  button.onclick = function(){
    console.log('toilet token', token.address, 'qty', token.qty)
    shitcoinToilet.methods.toilet(token.address, token.qty).send()
  }
  button.tokenIndex = i;
  button.setAttribute('class', 'myButton')
  button.textContent = 'FLUSH ' + token.qty
  flushCell.appendChild(button)
  tr.appendChild(flushCell)
}

// wait for everything to load before initializing
window.addEventListener('load', function() {
  // check if Web3 has been injected by the browser (Mist/MetaMask)
  if (window.web3) {
    console.log('web3old', web3.version)
    // replace the old injected version by the latest build of Web3.js version 1.0.0 beta
    web3 = new Web3(web3.currentProvider);
    console.log('new web3', web3.version)
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/"));
    console.log('browser does not have injected web3')
  }
  startApp()
});
