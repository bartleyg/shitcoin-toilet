/*
Shitcoin Toilet
Logic:
1. get account from metamask
2. get tokens for account from etherscan
3. parse tokens and filter by value
*/
const contractJSON = require('./ShitcoinToilet.json')
var tokens
// TODO: add contract address
const contractAddress = ''
var shitcoinToilet

function startApp() {
  var userAccount
  // function runs every 1/10th sec
  var accountInterval = setInterval(function() {
    // check if metamask account has changed
    web3.eth.getAccounts().then(function(accounts) {
      if (accounts[0] !== userAccount) {
        userAccount = accounts[0]
        console.log('new userAccount', userAccount)

        // instantiate our contract
        shitcoinToilet = new web3.eth.Contract(contractJSON.abi, contractAddress, {from: userAccount})

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
    if (uglyJSON[0].address !== 'No token found')
      tokens = cleanUpTokenJSON(uglyJSON)
    else
      console.log('user has no tokens')

    displayTokens()
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
    json['qty'] = qtyname[0]
    json['address'] = uglyJSON[i].address.slice(-42)
    // limit token quantity to 100k to exclude things like Augur SHARE tokens in the billions+
    // '-' are known worthless nontrading tokens
    if (uglyJSON[i].value === '-' && json['qty'] < 100000) {
      json['value'] = '0'
      cleanJSON.push(json)
    }
    else if (json['qty'] < 100000) {
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


function displayTokens() {

  var tbody = document.getElementById('tokenList')

  for (i = 0; i < tokens.length; i++) {
    var tr = document.createElement('div')
    tr.setAttribute('class', 'divTableRow')
    tbody.appendChild(tr)

    // token name cell
    var name = document.createElement('div')
    name.setAttribute('class', 'divTableCell')
    name.textContent = tokens[i].name
    tr.appendChild(name)

    // token quantity cell
    var qty = document.createElement('div')
    qty.setAttribute('class', 'divTableCell')
    qty.textContent = tokens[i].qty
    tr.appendChild(qty)

    // token value cell
    var value = document.createElement('div')
    value.setAttribute('class', 'divTableCell')
    value.textContent = '$' + tokens[i].value
    tr.appendChild(value)

    // approve button
    // TODO: need logic to display button if not approved
    // or else display text if already APPROVED
    var approveCell = document.createElement('div')
    approveCell.setAttribute('class', 'divTableCell')
    var button = document.createElement('a')
    button.onclick = approve(tokens[i].address, tokens[i].qty)
    button.setAttribute('class', 'myButton')
    button.textContent = 'APPROVE'
    approveCell.appendChild(button)
    tr.appendChild(approveCell)

    // flush button
    var flushCell = document.createElement('div')
    flushCell.setAttribute('class', 'divTableCell')
    var button = document.createElement('a')
    button.onclick = flush(tokens[i].address, tokens[i].qty)
    button.setAttribute('class', 'myButton')
    button.textContent = 'FLUSH ' + tokens[i].qty
    flushCell.appendChild(button)
    tr.appendChild(flushCell)
  }
}

async function approve(tokenAddress, qty) {
  await shitcoinToilet.methods.approve(tokenAddress, qty).send()
}

async function flush(tokenAddress, qty) {
  await shitcoinToilet.methods.toilet(tokenAddress, qty).send()
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
