(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "contractName": "ShitcoinToilet",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x05d2035b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x06fdde03"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x095ea7b3"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x18160ddd"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x23b872dd"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x313ce567"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x40c10f19"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x66188463"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
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
      "type": "function",
      "signature": "0x70a08231"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x715018a6"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishMinting",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x7d64bcb4"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8da5cb5b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x95d89b41"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa9059cbb"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xbe45fd62"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xd73dd623"
    },
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
      "type": "function",
      "signature": "0xdd62ed3e"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf2fde38b"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Flushed",
      "type": "event",
      "signature": "0x54e8709438d2f8f9d21ba488761f9a840bb0ed9d0ce2f615fc75422fb4505d46"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "ReceivedERC223",
      "type": "event",
      "signature": "0x4c12eb6e338a2eb14ab0ff767a32a3c1aa006be0b1c81a8940cbb0bbc4ca4674"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event",
      "signature": "0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
      "type": "event",
      "signature": "0xae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa08"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event",
      "signature": "0xf8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c64820"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event",
      "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "Transfer",
      "type": "event",
      "signature": "0xe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c16"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event",
      "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event",
      "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "toilet",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xce780d7f"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "tokenFallback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xc0ee0b8a"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "contractTransfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf7ad906f"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "contractApprove",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa0477afb"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "contractTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xba948f44"
    }
  ],
  "bytecode": "0x60806040526000600660146101000a81548160ff0219169083151502179055503480156200002c57600080fd5b506040805190810160405280600881526020017ff09f92a9434f494e0000000000000000000000000000000000000000000000008152506040805190810160405280600881526020017ff09f92a9434f494e00000000000000000000000000000000000000000000000081525060128260009080519060200190620000b392919062000132565b508160019080519060200190620000cc92919062000132565b5080600260006101000a81548160ff021916908360ff16021790555050505033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001e1565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017557805160ff1916838001178555620001a6565b82800160010185558215620001a6579182015b82811115620001a557825182559160200191906001019062000188565b5b509050620001b59190620001b9565b5090565b620001de91905b80821115620001da576000816000905550600101620001c0565b5090565b90565b612c8f80620001f16000396000f300608060405260043610610133576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b1461014557806306fdde0314610174578063095ea7b31461020457806318160ddd1461026957806323b872dd14610294578063313ce5671461031957806340c10f191461034a57806366188463146103af57806370a0823114610414578063715018a61461046b5780637d64bcb4146104825780638da5cb5b146104b157806395d89b4114610508578063a0477afb14610598578063a9059cbb14610605578063ba948f441461066a578063be45fd62146106f7578063c0ee0b8a146107a2578063ce780d7f14610835578063d73dd62314610896578063dd62ed3e146108fb578063f2fde38b14610972578063f7ad906f146109b5575b34801561013f57600080fd5b50600080fd5b34801561015157600080fd5b5061015a610a22565b604051808215151515815260200191505060405180910390f35b34801561018057600080fd5b50610189610a35565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c95780820151818401526020810190506101ae565b50505050905090810190601f1680156101f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021057600080fd5b5061024f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ad3565b604051808215151515815260200191505060405180910390f35b34801561027557600080fd5b5061027e610bc5565b6040518082815260200191505060405180910390f35b3480156102a057600080fd5b506102ff600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bcf565b604051808215151515815260200191505060405180910390f35b34801561032557600080fd5b5061032e610f8f565b604051808260ff1660ff16815260200191505060405180910390f35b34801561035657600080fd5b50610395600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fa2565b604051808215151515815260200191505060405180910390f35b3480156103bb57600080fd5b506103fa600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061118a565b604051808215151515815260200191505060405180910390f35b34801561042057600080fd5b50610455600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061141c565b6040518082815260200191505060405180910390f35b34801561047757600080fd5b50610480611465565b005b34801561048e57600080fd5b5061049761156a565b604051808215151515815260200191505060405180910390f35b3480156104bd57600080fd5b506104c6611632565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561051457600080fd5b5061051d611658565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561055d578082015181840152602081019050610542565b50505050905090810190601f16801561058a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156105a457600080fd5b50610603600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116f6565b005b34801561061157600080fd5b50610650600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611836565b604051808215151515815260200191505060405180910390f35b34801561067657600080fd5b506106f5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506118c4565b005b34801561070357600080fd5b50610788600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611a39565b604051808215151515815260200191505060405180910390f35b3480156107ae57600080fd5b50610833600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611ccd565b005b34801561084157600080fd5b50610880600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611cdc565b6040518082815260200191505060405180910390f35b3480156108a257600080fd5b506108e1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506122e7565b604051808215151515815260200191505060405180910390f35b34801561090757600080fd5b5061095c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506124e3565b6040518082815260200191505060405180910390f35b34801561097e57600080fd5b506109b3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061256a565b005b3480156109c157600080fd5b50610a20600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506125d2565b005b600660149054906101000a900460ff1681565b60008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610acb5780601f10610aa057610100808354040283529160200191610acb565b820191906000526020600020905b815481529060010190602001808311610aae57829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600454905090565b6000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610c1f57600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610caa57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610ce657600080fd5b610d3882600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461271290919063ffffffff16565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610dcd82600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461272b90919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e9f82600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461271290919063ffffffff16565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561100057600080fd5b600660149054906101000a900460ff1615151561101c57600080fd5b6110318260045461272b90919063ffffffff16565b60048190555061108982600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461272b90919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808310151561129c576000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611330565b6112af838261271290919063ffffffff16565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114c157600080fd5b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156115c857600080fd5b600660149054906101000a900460ff161515156115e457600080fd5b6001600660146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116ee5780601f106116c3576101008083540402835291602001916116ee565b820191906000526020600020905b8154815290600101906020018083116116d157829003601f168201915b505050505081565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561175257600080fd5b8273ffffffffffffffffffffffffffffffffffffffff1663095ea7b383836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156117f557600080fd5b505af1158015611809573d6000803e3d6000fd5b505050506040513d602081101561181f57600080fd5b810190808051906020019092919050505050505050565b60006060611845848483611a39565b15156118b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f455243323233207472616e73666572206661696c00000000000000000000000081525060200191505060405180910390fd5b600191505092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561192057600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd8484846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156119f757600080fd5b505af1158015611a0b573d6000803e3d6000fd5b505050506040513d6020811015611a2157600080fd5b81019080805190602001909291905050505050505050565b6000806000853b9150611a4c8686612747565b1515611ac0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4552433230207472616e73666572206661696c0000000000000000000000000081525060200191505060405180910390fd5b6000821115611bf5578590508073ffffffffffffffffffffffffffffffffffffffff1663c0ee0b8a3387876040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611b8e578082015181840152602081019050611b73565b50505050905090810190601f168015611bbb5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015611bdc57600080fd5b505af1158015611bf0573d6000803e3d6000fd5b505050505b848673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c16876040518080602001828103825283818151815260200191508051906020019080838360005b83811015611c86578082015181840152602081019050611c6b565b50505050905090810190601f168015611cb35780820380516001836020036101000a031916815260200191505b509250505060405180910390a46001925050509392505050565b611cd7838361296c565b505050565b60003073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611d82576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f63616e742073656e6420f09f92a9434f494e20746f206f776e20746f696c657481525060200191505060405180910390fd5b818373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b158015611e5257600080fd5b505af1158015611e66573d6000803e3d6000fd5b505050506040513d6020811015611e7c57600080fd5b810190808051906020019092919050505010151515611f03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f696e73756666696369656e7420616c6c6f77616e63650000000000000000000081525060200191505060405180910390fd5b818373ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015611f9f57600080fd5b505af1158015611fb3573d6000803e3d6000fd5b505050506040513d6020811015611fc957600080fd5b810190808051906020019092919050505010151515612050576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f696e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561212757600080fd5b505af115801561213b573d6000803e3d6000fd5b505050506040513d602081101561215157600080fd5b810190808051906020019092919050505015156121d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f7472616e7366657246726f6d206661696c65640000000000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f54e8709438d2f8f9d21ba488761f9a840bb0ed9d0ce2f615fc75422fb4505d468484604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a261226233836129db565b15156122d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f746f696c65744d696e74206661696c656400000000000000000000000000000081525060200191505060405180910390fd5b6122df3361141c565b905092915050565b600061237882600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461272b90919063ffffffff16565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156125c657600080fd5b6125cf81612b67565b50565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561262e57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156126d157600080fd5b505af11580156126e5573d6000803e3d6000fd5b505050506040513d60208110156126fb57600080fd5b810190808051906020019092919050505050505050565b600082821115151561272057fe5b818303905092915050565b6000818301905082811015151561273e57fe5b80905092915050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561279757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156127d357600080fd5b61282582600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461271290919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506128ba82600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461272b90919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b7f4c12eb6e338a2eb14ab0ff767a32a3c1aa006be0b1c81a8940cbb0bbc4ca46748282604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15050565b6000600660149054906101000a900460ff161515156129f957600080fd5b612a0e8260045461272b90919063ffffffff16565b600481905550612a6682600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461272b90919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515612ba357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058205f6f8f184eae4fdb7290e1613422402b421cc1dc62f99267f5560bfa417c61a60029",
  "deployedBytecode": "0x608060405260043610610133576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b1461014557806306fdde0314610174578063095ea7b31461020457806318160ddd1461026957806323b872dd14610294578063313ce5671461031957806340c10f191461034a57806366188463146103af57806370a0823114610414578063715018a61461046b5780637d64bcb4146104825780638da5cb5b146104b157806395d89b4114610508578063a0477afb14610598578063a9059cbb14610605578063ba948f441461066a578063be45fd62146106f7578063c0ee0b8a146107a2578063ce780d7f14610835578063d73dd62314610896578063dd62ed3e146108fb578063f2fde38b14610972578063f7ad906f146109b5575b34801561013f57600080fd5b50600080fd5b34801561015157600080fd5b5061015a610a22565b604051808215151515815260200191505060405180910390f35b34801561018057600080fd5b50610189610a35565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c95780820151818401526020810190506101ae565b50505050905090810190601f1680156101f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021057600080fd5b5061024f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ad3565b604051808215151515815260200191505060405180910390f35b34801561027557600080fd5b5061027e610bc5565b6040518082815260200191505060405180910390f35b3480156102a057600080fd5b506102ff600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bcf565b604051808215151515815260200191505060405180910390f35b34801561032557600080fd5b5061032e610f8f565b604051808260ff1660ff16815260200191505060405180910390f35b34801561035657600080fd5b50610395600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fa2565b604051808215151515815260200191505060405180910390f35b3480156103bb57600080fd5b506103fa600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061118a565b604051808215151515815260200191505060405180910390f35b34801561042057600080fd5b50610455600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061141c565b6040518082815260200191505060405180910390f35b34801561047757600080fd5b50610480611465565b005b34801561048e57600080fd5b5061049761156a565b604051808215151515815260200191505060405180910390f35b3480156104bd57600080fd5b506104c6611632565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561051457600080fd5b5061051d611658565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561055d578082015181840152602081019050610542565b50505050905090810190601f16801561058a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156105a457600080fd5b50610603600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116f6565b005b34801561061157600080fd5b50610650600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611836565b604051808215151515815260200191505060405180910390f35b34801561067657600080fd5b506106f5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506118c4565b005b34801561070357600080fd5b50610788600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611a39565b604051808215151515815260200191505060405180910390f35b3480156107ae57600080fd5b50610833600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611ccd565b005b34801561084157600080fd5b50610880600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611cdc565b6040518082815260200191505060405180910390f35b3480156108a257600080fd5b506108e1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506122e7565b604051808215151515815260200191505060405180910390f35b34801561090757600080fd5b5061095c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506124e3565b6040518082815260200191505060405180910390f35b34801561097e57600080fd5b506109b3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061256a565b005b3480156109c157600080fd5b50610a20600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506125d2565b005b600660149054906101000a900460ff1681565b60008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610acb5780601f10610aa057610100808354040283529160200191610acb565b820191906000526020600020905b815481529060010190602001808311610aae57829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600454905090565b6000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610c1f57600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610caa57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610ce657600080fd5b610d3882600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461271290919063ffffffff16565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610dcd82600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461272b90919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e9f82600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461271290919063ffffffff16565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561100057600080fd5b600660149054906101000a900460ff1615151561101c57600080fd5b6110318260045461272b90919063ffffffff16565b60048190555061108982600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461272b90919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808310151561129c576000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611330565b6112af838261271290919063ffffffff16565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114c157600080fd5b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156115c857600080fd5b600660149054906101000a900460ff161515156115e457600080fd5b6001600660146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116ee5780601f106116c3576101008083540402835291602001916116ee565b820191906000526020600020905b8154815290600101906020018083116116d157829003601f168201915b505050505081565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561175257600080fd5b8273ffffffffffffffffffffffffffffffffffffffff1663095ea7b383836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156117f557600080fd5b505af1158015611809573d6000803e3d6000fd5b505050506040513d602081101561181f57600080fd5b810190808051906020019092919050505050505050565b60006060611845848483611a39565b15156118b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f455243323233207472616e73666572206661696c00000000000000000000000081525060200191505060405180910390fd5b600191505092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561192057600080fd5b8373ffffffffffffffffffffffffffffffffffffffff166323b872dd8484846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156119f757600080fd5b505af1158015611a0b573d6000803e3d6000fd5b505050506040513d6020811015611a2157600080fd5b81019080805190602001909291905050505050505050565b6000806000853b9150611a4c8686612747565b1515611ac0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4552433230207472616e73666572206661696c0000000000000000000000000081525060200191505060405180910390fd5b6000821115611bf5578590508073ffffffffffffffffffffffffffffffffffffffff1663c0ee0b8a3387876040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611b8e578082015181840152602081019050611b73565b50505050905090810190601f168015611bbb5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015611bdc57600080fd5b505af1158015611bf0573d6000803e3d6000fd5b505050505b848673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c16876040518080602001828103825283818151815260200191508051906020019080838360005b83811015611c86578082015181840152602081019050611c6b565b50505050905090810190601f168015611cb35780820380516001836020036101000a031916815260200191505b509250505060405180910390a46001925050509392505050565b611cd7838361296c565b505050565b60003073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611d82576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f63616e742073656e6420f09f92a9434f494e20746f206f776e20746f696c657481525060200191505060405180910390fd5b818373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b158015611e5257600080fd5b505af1158015611e66573d6000803e3d6000fd5b505050506040513d6020811015611e7c57600080fd5b810190808051906020019092919050505010151515611f03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f696e73756666696369656e7420616c6c6f77616e63650000000000000000000081525060200191505060405180910390fd5b818373ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015611f9f57600080fd5b505af1158015611fb3573d6000803e3d6000fd5b505050506040513d6020811015611fc957600080fd5b810190808051906020019092919050505010151515612050576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f696e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561212757600080fd5b505af115801561213b573d6000803e3d6000fd5b505050506040513d602081101561215157600080fd5b810190808051906020019092919050505015156121d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f7472616e7366657246726f6d206661696c65640000000000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f54e8709438d2f8f9d21ba488761f9a840bb0ed9d0ce2f615fc75422fb4505d468484604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a261226233836129db565b15156122d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f746f696c65744d696e74206661696c656400000000000000000000000000000081525060200191505060405180910390fd5b6122df3361141c565b905092915050565b600061237882600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461272b90919063ffffffff16565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156125c657600080fd5b6125cf81612b67565b50565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561262e57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156126d157600080fd5b505af11580156126e5573d6000803e3d6000fd5b505050506040513d60208110156126fb57600080fd5b810190808051906020019092919050505050505050565b600082821115151561272057fe5b818303905092915050565b6000818301905082811015151561273e57fe5b80905092915050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561279757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156127d357600080fd5b61282582600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461271290919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506128ba82600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461272b90919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b7f4c12eb6e338a2eb14ab0ff767a32a3c1aa006be0b1c81a8940cbb0bbc4ca46748282604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15050565b6000600660149054906101000a900460ff161515156129f957600080fd5b612a0e8260045461272b90919063ffffffff16565b600481905550612a6682600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461272b90919063ffffffff16565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515612ba357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058205f6f8f184eae4fdb7290e1613422402b421cc1dc62f99267f5560bfa417c61a60029",
  "sourceMap": "951:2588:1:-;;;466:5:12;436:35;;;;;;;;;;;;;;;;;;;;1339:71:1;8:9:-1;5:2;;;30:1;27;20:12;5:2;1339:71:1;1371:4;;;;;;;;;;;;;;;;;;1377:6;;;;;;;;;;;;;;;;;;1157:2;470:5:9;463:4;:12;;;;;;;;;;;;:::i;:::-;;490:7;481:6;:16;;;;;;;;;;;;:::i;:::-;;514:9;503:8;;:20;;;;;;;;;;;;;;;;;;391:137;;;575:10:7;567:5;;:18;;;;;;;;;;;;;;;;;;951:2588:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "951:2588:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;951:2588:1;373:8:3;;;436:35:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;436:35:12;;;;;;;;;;;;;;;;;;;;;;;;;;;319:18:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;319:18:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;319:18:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1814:188:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1814:188:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;389:83:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;389:83:8;;;;;;;;;;;;;;;;;;;;;;;726:470:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;726:470:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;365:21:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;365:21:9;;;;;;;;;;;;;;;;;;;;;;;;;;;854:312:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;854:312:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3679:432:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3679:432:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1149:99:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1149:99:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1001:111:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1001:111:7;;;;;;1280:140:12;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1280:140:12;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:7;;;;;;;;;;;;;;;;;;;;;;;;;;;341::9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;341:20:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;341:20:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3167:135:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3167:135:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2119:196:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2119:196:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3379:157:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3379:157:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;909:732:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;909:732:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2774:113:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2774:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1574:676;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1574:676:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2926:296:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2926:296:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2321:153:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1274:103:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1274:103:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;2964:127:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2964:127:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;436:35:12;;;;;;;;;;;;;:::o;319:18:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1814:188:13:-;1881:4;1925:6;1893:7;:19;1901:10;1893:19;;;;;;;;;;;;;;;:29;1913:8;1893:29;;;;;;;;;;;;;;;:38;;;;1963:8;1942:38;;1951:10;1942:38;;;1973:6;1942:38;;;;;;;;;;;;;;;;;;1993:4;1986:11;;1814:188;;;;:::o;389:83:8:-;433:7;455:12;;448:19;;389:83;:::o;726:470:13:-;832:4;864:8;:15;873:5;864:15;;;;;;;;;;;;;;;;854:6;:25;;846:34;;;;;;;;904:7;:14;912:5;904:14;;;;;;;;;;;;;;;:26;919:10;904:26;;;;;;;;;;;;;;;;894:6;:36;;886:45;;;;;;;;960:1;945:17;;:3;:17;;;;937:26;;;;;;;;988:27;1008:6;988:8;:15;997:5;988:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;970:8;:15;979:5;970:15;;;;;;;;;;;;;;;:45;;;;1037:25;1055:6;1037:8;:13;1046:3;1037:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;:41;;;;1097:38;1128:6;1097:7;:14;1105:5;1097:14;;;;;;;;;;;;;;;:26;1112:10;1097:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1068:7;:14;1076:5;1068:14;;;;;;;;;;;;;;;:26;1083:10;1068:26;;;;;;;;;;;;;;;:67;;;;1162:3;1146:28;;1155:5;1146:28;;;1167:6;1146:28;;;;;;;;;;;;;;;;;;1187:4;1180:11;;726:470;;;;;:::o;365:21:9:-;;;;;;;;;;;;;:::o;854:312:12:-;968:4;600:5;;;;;;;;;;;586:19;;:10;:19;;;578:28;;;;;;;;511:15;;;;;;;;;;;510:16;502:25;;;;;;;;997;1014:7;997:12;;:16;;:25;;;;:::i;:::-;982:12;:40;;;;1044:26;1062:7;1044:8;:13;1053:3;1044:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;1028:8;:13;1037:3;1028:13;;;;;;;;;;;;;;;:42;;;;1086:3;1081:18;;;1091:7;1081:18;;;;;;;;;;;;;;;;;;1131:3;1110:34;;1127:1;1110:34;;;1136:7;1110:34;;;;;;;;;;;;;;;;;;1157:4;1150:11;;854:312;;;;:::o;3679:432:13:-;3785:4;3799:16;3818:7;:19;3826:10;3818:19;;;;;;;;;;;;;;;:29;3838:8;3818:29;;;;;;;;;;;;;;;;3799:48;;3877:8;3857:16;:28;;3853:165;;;3927:1;3895:7;:19;3903:10;3895:19;;;;;;;;;;;;;;;:29;3915:8;3895:29;;;;;;;;;;;;;;;:33;;;;3853:165;;;3981:30;3994:16;3981:8;:12;;:30;;;;:::i;:::-;3949:7;:19;3957:10;3949:19;;;;;;;;;;;;;;;:29;3969:8;3949:29;;;;;;;;;;;;;;;:62;;;;3853:165;4049:8;4028:61;;4037:10;4028:61;;;4059:7;:19;4067:10;4059:19;;;;;;;;;;;;;;;:29;4079:8;4059:29;;;;;;;;;;;;;;;;4028:61;;;;;;;;;;;;;;;;;;4102:4;4095:11;;3679:432;;;;;:::o;1149:99:8:-;1205:7;1227:8;:16;1236:6;1227:16;;;;;;;;;;;;;;;;1220:23;;1149:99;;;:::o;1001:111:7:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1077:5;;;;;;;;;;;1058:25;;;;;;;;;;;;1105:1;1089:5;;:18;;;;;;;;;;;;;;;;;;1001:111::o;1280:140:12:-;1339:4;719:5:7;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;511:15:12;;;;;;;;;;;510:16;502:25;;;;;;;;1369:4;1351:15;;:22;;;;;;;;;;;;;;;;;;1384:14;;;;;;;;;;1411:4;1404:11;;1280:140;:::o;238:20:7:-;;;;;;;;;;;;;:::o;341::9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3167:135:1:-;719:5:7;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;3266:5:1;3260:20;;;3281:7;3290:6;3260:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3260:37:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3260:37:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3260:37:1;;;;;;;;;;;;;;;;;3167:135;;;:::o;2119:196:3:-;2182:4;2198:18;2234:28;2243:3;2248:6;2256:5;2234:8;:28::i;:::-;2226:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2304:4;2297:11;;2119:196;;;;;:::o;3379:157:1:-;719:5:7;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;3494:5:1;3488:25;;;3514:4;3520:2;3524:6;3488:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3488:43:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3488:43:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3488:43:1;;;;;;;;;;;;;;;;;3379:157;;;;:::o;909:732:3:-;985:4;1139:15;1422:32;1299:3;1287:16;1273:30;;1330:27;1345:3;1350:6;1330:14;:27::i;:::-;1322:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1405:1;1394:10;:12;1391:168;;;1481:3;1422:63;;1499:8;:22;;;1522:10;1534:6;1542:5;1499:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1499:49:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1499:49:3;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1499:49:3;;;;1391:168;1599:6;1594:3;1573:40;;1582:10;1573:40;;;1607:5;1573:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1573:40:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1630:4;1623:11;;909:732;;;;;;;:::o;2774:113:1:-;2852:30;2867:5;2874:7;2852:14;:30::i;:::-;2774:113;;;:::o;1574:676::-;1635:4;1672;1655:22;;:5;:22;;;;1647:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1815:6;1768:5;1762:22;;;1785:10;1805:4;1762:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1762:49:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1762:49:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1762:49:1;;;;;;;;;;;;;;;;:59;;1754:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1900:6;1868:5;1862:22;;;1885:10;1862:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1862:34:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1862:34:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1862:34:1;;;;;;;;;;;;;;;;:44;;1854:77;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1951:5;1945:25;;;1971:10;1991:4;1998:6;1945:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1945:60:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1945:60:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1945:60:1;;;;;;;;;;;;;;;;1937:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2048:10;2040:34;;;2060:5;2067:6;2040:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;2159:30;2170:10;2182:6;2159:10;:30::i;:::-;2151:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2224:21;2234:10;2224:9;:21::i;:::-;2217:28;;1574:676;;;;:::o;2926:296:13:-;3027:4;3081:46;3115:11;3081:7;:19;3089:10;3081:19;;;;;;;;;;;;;;;:29;3101:8;3081:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;3041:7;:19;3049:10;3041:19;;;;;;;;;;;;;;;:29;3061:8;3041:29;;;;;;;;;;;;;;;:87;;;;3160:8;3139:61;;3148:10;3139:61;;;3170:7;:19;3178:10;3170:19;;;;;;;;;;;;;;;:29;3190:8;3170:29;;;;;;;;;;;;;;;;3139:61;;;;;;;;;;;;;;;;;;3213:4;3206:11;;2926:296;;;;:::o;2321:153::-;2420:7;2444;:15;2452:6;2444:15;;;;;;;;;;;;;;;:25;2460:8;2444:25;;;;;;;;;;;;;;;;2437:32;;2321:153;;;;:::o;1274:103:7:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1343:29;1362:9;1343:18;:29::i;:::-;1274:103;:::o;2964:127:1:-;719:5:7;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;3059:5:1;3053:21;;;3075:2;3079:6;3053:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3053:33:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3053:33:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3053:33:1;;;;;;;;;;;;;;;;;2964:127;;;:::o;1060:116:6:-;1120:7;1148:2;1142;:8;;1135:16;;;;;;1169:2;1164;:7;1157:14;;1060:116;;;;:::o;1238:128::-;1298:9;1324:2;1319;:7;1315:11;;1344:2;1339:1;:7;;1332:15;;;;;;1360:1;1353:8;;1238:128;;;;:::o;626:321:8:-;689:4;719:8;:20;728:10;719:20;;;;;;;;;;;;;;;;709:6;:30;;701:39;;;;;;;;769:1;754:17;;:3;:17;;;;746:26;;;;;;;;802:32;827:6;802:8;:20;811:10;802:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;779:8;:20;788:10;779:20;;;;;;;;;;;;;;;:55;;;;856:25;874:6;856:8;:13;865:3;856:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;840:8;:13;849:3;840:13;;;;;;;;;;;;;;;:41;;;;913:3;892:33;;901:10;892:33;;;918:6;892:33;;;;;;;;;;;;;;;;;;938:4;931:11;;626:321;;;;:::o;2597:107:1:-;2669:30;2684:5;2691:7;2669:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;2597:107;;:::o;2254:268::-;2326:4;511:15:12;;;;;;;;;;;510:16;502:25;;;;;;;;2353::1;2370:7;2353:12;;:16;;:25;;;;:::i;:::-;2338:12;:40;;;;2400:26;2418:7;2400:8;:13;2409:3;2400:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;2384:8;:13;2393:3;2384:13;;;;;;;;;;;;;;;:42;;;;2442:3;2437:18;;;2447:7;2437:18;;;;;;;;;;;;;;;;;;2487:3;2466:34;;2483:1;2466:34;;;2492:7;2466:34;;;;;;;;;;;;;;;;;;2513:4;2506:11;;2254:268;;;;:::o;1512:171:7:-;1603:1;1582:23;;:9;:23;;;;1574:32;;;;;;;;1645:9;1617:38;;1638:5;;;;;;;;;;;1617:38;;;;;;;;;;;;1669:9;1661:5;;:17;;;;;;;;;;;;;;;;;;1512:171;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol\";\nimport \"./erc223-20-contracts/contracts/ERC223BasicToken.sol\";\nimport \"./erc223-20-contracts/contracts/ERC223ReceivingContract.sol\";\n\n/*\nContract receives ERC20 tokens and mints equal amount ERC223 💩coin in return\nThis requires 2 separate transactions by user\nTransaction 1: user does approve(address thisContract, uint amt) transaction on the token in web3\nTransaction 2: once mined user calls this contract toilet(address token, uint amt) which:\n  1. checks token.allowance(address msg.sender, address thisContract) matches amt\n  2. checks token.balanceOf(address msg.sender) >= amt (is this checked already in approve?)\n  3. token.transferFrom(address msg.sender, address thisContract, uint amt)\n  4. mints ERC223 💩coin in amount equal to that received by user's token\n*/\ncontract ShitcoinToilet is DetailedERC20, MintableToken, ERC223BasicToken, ERC223ReceivingContract {\n\n  string constant NAME = \"💩COIN\";\n  string constant SYMBOL = \"💩COIN\";\n  uint8 constant DECIMALS = 18;\n\n  event Flushed(address indexed user, address token, uint amount);\n  event ReceivedERC223(address _from, uint _amount);\n\n  // initialize base constructor with coin parameters\n  constructor()\n    DetailedERC20(NAME, SYMBOL, DECIMALS)\n    public\n  {}\n\n  // toilet() requires that msg.sender has already called approve() on the token\n  // with this contract's address to allow this contract to receive the tokens\n  function toilet(address token, uint amount) external returns(uint) {\n    require(token != address(this), 'cant send 💩COIN to own toilet');  // would be pointless to do this\n    require(ERC20(token).allowance(msg.sender, address(this)) >= amount, 'insufficient allowance');\n    require(ERC20(token).balanceOf(msg.sender) >= amount, 'insufficient balance');\n    require(ERC20(token).transferFrom(msg.sender, address(this), amount), 'transferFrom failed');\n    emit Flushed(msg.sender, token, amount);\n    // mints 💩COIN in amount equal to that received by user's token\n    require(toiletMint(msg.sender, amount), 'toiletMint failed');\n    return balanceOf(msg.sender);\n  }\n\n  function toiletMint(address _to, uint _amount) private canMint returns (bool) {\n    totalSupply_ = totalSupply_.add(_amount);\n    balances[_to] = balances[_to].add(_amount);\n    emit Mint(_to, _amount);\n    emit Transfer(address(0), _to, _amount);\n    return true;\n  }\n\n  // dummy function called by handler when contract receives an ERC223\n  function receivedERC223(address _from, uint _amount) private {\n    emit ReceivedERC223(_from, _amount);\n  }\n\n  // handler called when an ERC223 token is sent to this contract\n  function tokenFallback(address _from, uint _amount, bytes _data) public {\n    receivedERC223(_from, _amount);\n  }\n\n  // add ability for contract to transfer 3rd party ERC20 tokens it owns\n  function contractTransfer(address token, address to, uint tokens) public onlyOwner {\n    ERC20(token).transfer(to, tokens);\n  }\n\n  // add ability for contract to approve 3rd party ERC20 tokens it owns\n  function contractApprove(address token, address spender, uint tokens) public onlyOwner {\n    ERC20(token).approve(spender, tokens);\n  }\n\n  // add ability for contract to transfer 3rd party ERC20 tokens it owns\n  function contractTransferFrom(address token, address from, address to, uint tokens)\n  public onlyOwner {\n    ERC20(token).transferFrom(from, to, tokens);\n  }\n\n}\n",
  "sourcePath": "/Users/bartley/Documents/dapps/shitcoin-toilet/contracts/ShitcoinToilet.sol",
  "ast": {
    "absolutePath": "/Users/bartley/Documents/dapps/shitcoin-toilet/contracts/ShitcoinToilet.sol",
    "exportedSymbols": {
      "ShitcoinToilet": [
        323
      ]
    },
    "id": 324,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol",
        "id": 59,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 799,
        "src": "26:71:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "id": 60,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 980,
        "src": "98:71:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/bartley/Documents/dapps/shitcoin-toilet/contracts/erc223-20-contracts/contracts/ERC223BasicToken.sol",
        "file": "./erc223-20-contracts/contracts/ERC223BasicToken.sol",
        "id": 61,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 447,
        "src": "170:62:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/bartley/Documents/dapps/shitcoin-toilet/contracts/erc223-20-contracts/contracts/ERC223ReceivingContract.sol",
        "file": "./erc223-20-contracts/contracts/ERC223ReceivingContract.sol",
        "id": 62,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 459,
        "src": "233:69:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 63,
              "name": "DetailedERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 798,
              "src": "978:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DetailedERC20_$798",
                "typeString": "contract DetailedERC20"
              }
            },
            "id": 64,
            "nodeType": "InheritanceSpecifier",
            "src": "978:13:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 65,
              "name": "MintableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 979,
              "src": "993:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MintableToken_$979",
                "typeString": "contract MintableToken"
              }
            },
            "id": 66,
            "nodeType": "InheritanceSpecifier",
            "src": "993:13:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 67,
              "name": "ERC223BasicToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 446,
              "src": "1008:16:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC223BasicToken_$446",
                "typeString": "contract ERC223BasicToken"
              }
            },
            "id": 68,
            "nodeType": "InheritanceSpecifier",
            "src": "1008:16:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 69,
              "name": "ERC223ReceivingContract",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 458,
              "src": "1026:23:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC223ReceivingContract_$458",
                "typeString": "contract ERC223ReceivingContract"
              }
            },
            "id": 70,
            "nodeType": "InheritanceSpecifier",
            "src": "1026:23:1"
          }
        ],
        "contractDependencies": [
          350,
          446,
          458,
          668,
          764,
          798,
          841,
          873,
          979,
          1226
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 323,
        "linearizedBaseContracts": [
          323,
          458,
          446,
          979,
          668,
          1226,
          764,
          350,
          798,
          841,
          873
        ],
        "name": "ShitcoinToilet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 73,
            "name": "NAME",
            "nodeType": "VariableDeclaration",
            "scope": 323,
            "src": "1055:33:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 71,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1055:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "f09f92a9434f494e",
              "id": 72,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1078:10:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_d87be5ceadc7160b379aa350eb9776fb1e9b825b808fce910c9be3951364936d",
                "typeString": "literal_string \"💩COIN\""
              },
              "value": "💩COIN"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 76,
            "name": "SYMBOL",
            "nodeType": "VariableDeclaration",
            "scope": 323,
            "src": "1092:35:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 74,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1092:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "f09f92a9434f494e",
              "id": 75,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1117:10:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_d87be5ceadc7160b379aa350eb9776fb1e9b825b808fce910c9be3951364936d",
                "typeString": "literal_string \"💩COIN\""
              },
              "value": "💩COIN"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 79,
            "name": "DECIMALS",
            "nodeType": "VariableDeclaration",
            "scope": 323,
            "src": "1131:28:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 77,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "1131:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3138",
              "id": 78,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1157:2:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 87,
            "name": "Flushed",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 86,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 81,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "1178:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 80,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 83,
                  "indexed": false,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "1200:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 82,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1200:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 85,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "1215:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 84,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1215:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1177:50:1"
            },
            "src": "1164:64:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 93,
            "name": "ReceivedERC223",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89,
                  "indexed": false,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "1252:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 88,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "1267:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1267:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1251:29:1"
            },
            "src": "1231:50:1"
          },
          {
            "body": {
              "id": 101,
              "nodeType": "Block",
              "src": "1408:2:1",
              "statements": []
            },
            "documentation": null,
            "id": 102,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 96,
                    "name": "NAME",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 73,
                    "src": "1371:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 97,
                    "name": "SYMBOL",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 76,
                    "src": "1377:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 98,
                    "name": "DECIMALS",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 79,
                    "src": "1385:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  }
                ],
                "id": 99,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 95,
                  "name": "DetailedERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 798,
                  "src": "1357:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_DetailedERC20_$798_$",
                    "typeString": "type(contract DetailedERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1357:37:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1350:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1408:0:1"
            },
            "scope": 323,
            "src": "1339:71:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 185,
              "nodeType": "Block",
              "src": "1641:609:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 112,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 104,
                          "src": "1655:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 114,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1278,
                              "src": "1672:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                "typeString": "contract ShitcoinToilet"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                "typeString": "contract ShitcoinToilet"
                              }
                            ],
                            "id": 113,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1664:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1664:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1655:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "63616e742073656e6420f09f92a9434f494e20746f206f776e20746f696c6574",
                        "id": 117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1679:34:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9e93f2e0417dd5d8943347f0ba99e1e6ea390062924a6f540f527d205ed05681",
                          "typeString": "literal_string \"cant send 💩COIN to own toilet\""
                        },
                        "value": "cant send 💩COIN to own toilet"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9e93f2e0417dd5d8943347f0ba99e1e6ea390062924a6f540f527d205ed05681",
                          "typeString": "literal_string \"cant send 💩COIN to own toilet\""
                        }
                      ],
                      "id": 111,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1244,
                        1245
                      ],
                      "referencedDeclaration": 1245,
                      "src": "1647:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1647:67:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 119,
                  "nodeType": "ExpressionStatement",
                  "src": "1647:67:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 125,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1241,
                                "src": "1785:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 126,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1785:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 128,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1278,
                                  "src": "1805:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                    "typeString": "contract ShitcoinToilet"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                    "typeString": "contract ShitcoinToilet"
                                  }
                                ],
                                "id": 127,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1797:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 129,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1797:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 122,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 104,
                                  "src": "1768:5:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 121,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 841,
                                "src": "1762:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 123,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1762:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$841",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 124,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "allowance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 812,
                            "src": "1762:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address,address) view external returns (uint256)"
                            }
                          },
                          "id": 130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1762:49:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 131,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 106,
                          "src": "1815:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1762:59:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "696e73756666696369656e7420616c6c6f77616e6365",
                        "id": 133,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1823:24:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_20dbb1b88f187125d7e634b087bca125fe84cb7576ed5ae599f7ade955801583",
                          "typeString": "literal_string \"insufficient allowance\""
                        },
                        "value": "insufficient allowance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_20dbb1b88f187125d7e634b087bca125fe84cb7576ed5ae599f7ade955801583",
                          "typeString": "literal_string \"insufficient allowance\""
                        }
                      ],
                      "id": 120,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1244,
                        1245
                      ],
                      "referencedDeclaration": 1245,
                      "src": "1754:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1754:94:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 135,
                  "nodeType": "ExpressionStatement",
                  "src": "1754:94:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 141,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1241,
                                "src": "1885:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 142,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1885:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 138,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 104,
                                  "src": "1868:5:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 137,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 841,
                                "src": "1862:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 139,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1862:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$841",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 140,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 855,
                            "src": "1862:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view external returns (uint256)"
                            }
                          },
                          "id": 143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1862:34:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 144,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 106,
                          "src": "1900:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1862:44:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "696e73756666696369656e742062616c616e6365",
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1908:22:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a6d1ff1db3d0b9b8c60e12ccab5ce7431be9a2cd0518ac362f1c5c1e0b1cefee",
                          "typeString": "literal_string \"insufficient balance\""
                        },
                        "value": "insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a6d1ff1db3d0b9b8c60e12ccab5ce7431be9a2cd0518ac362f1c5c1e0b1cefee",
                          "typeString": "literal_string \"insufficient balance\""
                        }
                      ],
                      "id": 136,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1244,
                        1245
                      ],
                      "referencedDeclaration": 1245,
                      "src": "1854:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1854:77:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 148,
                  "nodeType": "ExpressionStatement",
                  "src": "1854:77:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 154,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1241,
                              "src": "1971:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 155,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1971:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 157,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1278,
                                "src": "1991:4:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                  "typeString": "contract ShitcoinToilet"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                  "typeString": "contract ShitcoinToilet"
                                }
                              ],
                              "id": 156,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1983:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1983:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 159,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "1998:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 151,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 104,
                                "src": "1951:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 150,
                              "name": "ERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 841,
                              "src": "1945:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                                "typeString": "type(contract ERC20)"
                              }
                            },
                            "id": 152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1945:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$841",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 823,
                          "src": "1945:25:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1945:60:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "7472616e7366657246726f6d206661696c6564",
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2007:21:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ab0f731885d207443b1e545c1c7e7ed7ac9b6ea503774981a1bcc8ac01b461c3",
                          "typeString": "literal_string \"transferFrom failed\""
                        },
                        "value": "transferFrom failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ab0f731885d207443b1e545c1c7e7ed7ac9b6ea503774981a1bcc8ac01b461c3",
                          "typeString": "literal_string \"transferFrom failed\""
                        }
                      ],
                      "id": 149,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1244,
                        1245
                      ],
                      "referencedDeclaration": 1245,
                      "src": "1937:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1937:92:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "1937:92:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 165,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1241,
                          "src": "2048:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 166,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2048:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 167,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "2060:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 168,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "2067:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 164,
                      "name": "Flushed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 87,
                      "src": "2040:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2040:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 170,
                  "nodeType": "EmitStatement",
                  "src": "2035:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 173,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1241,
                              "src": "2170:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 174,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2170:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 175,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "2182:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 172,
                          "name": "toiletMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 231,
                          "src": "2159:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) returns (bool)"
                          }
                        },
                        "id": 176,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2159:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "746f696c65744d696e74206661696c6564",
                        "id": 177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2191:19:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_04ed8cca8b7092c428610235ddc922ecbc14e702f434703d6d1fd614e166796b",
                          "typeString": "literal_string \"toiletMint failed\""
                        },
                        "value": "toiletMint failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_04ed8cca8b7092c428610235ddc922ecbc14e702f434703d6d1fd614e166796b",
                          "typeString": "literal_string \"toiletMint failed\""
                        }
                      ],
                      "id": 171,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1244,
                        1245
                      ],
                      "referencedDeclaration": 1245,
                      "src": "2151:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2151:60:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 179,
                  "nodeType": "ExpressionStatement",
                  "src": "2151:60:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 181,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1241,
                          "src": "2234:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2234:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 180,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        763
                      ],
                      "referencedDeclaration": 763,
                      "src": "2224:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view returns (uint256)"
                      }
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2224:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 110,
                  "id": 184,
                  "nodeType": "Return",
                  "src": "2217:28:1"
                }
              ]
            },
            "documentation": null,
            "id": 186,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "toilet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 104,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "1590:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1590:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 106,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "1605:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1605:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1589:28:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 109,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "1635:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 108,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1635:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1634:6:1"
            },
            "scope": 323,
            "src": "1574:676:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 230,
              "nodeType": "Block",
              "src": "2332:190:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 197,
                      "name": "totalSupply_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 683,
                      "src": "2338:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 200,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 190,
                          "src": "2370:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 198,
                          "name": "totalSupply_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 683,
                          "src": "2353:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 581,
                        "src": "2353:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2353:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2338:40:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 203,
                  "nodeType": "ExpressionStatement",
                  "src": "2338:40:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 204,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 681,
                        "src": "2384:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 206,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 205,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2393:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2384:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 211,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 190,
                          "src": "2418:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 207,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 681,
                            "src": "2400:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 209,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 208,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 188,
                            "src": "2409:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2400:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 210,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 581,
                        "src": "2400:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2400:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2384:42:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 214,
                  "nodeType": "ExpressionStatement",
                  "src": "2384:42:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 216,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2442:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 217,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 190,
                        "src": "2447:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 215,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 887,
                      "src": "2437:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2437:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 219,
                  "nodeType": "EmitStatement",
                  "src": "2432:23:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 222,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2483:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 221,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2475:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 223,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2475:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 224,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2487:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 225,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 190,
                        "src": "2492:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 220,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        338,
                        872
                      ],
                      "referencedDeclaration": 872,
                      "src": "2466:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2466:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 227,
                  "nodeType": "EmitStatement",
                  "src": "2461:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2513:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 196,
                  "id": 229,
                  "nodeType": "Return",
                  "src": "2506:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 231,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 193,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 192,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 901,
                  "src": "2309:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2309:7:1"
              }
            ],
            "name": "toiletMint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 188,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "2274:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2274:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 190,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "2287:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 189,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2287:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2273:27:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 195,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "2326:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 194,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2326:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2325:6:1"
            },
            "scope": 323,
            "src": "2254:268:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 243,
              "nodeType": "Block",
              "src": "2658:46:1",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 239,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 233,
                        "src": "2684:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 240,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 235,
                        "src": "2691:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 238,
                      "name": "ReceivedERC223",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 93,
                      "src": "2669:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2669:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 242,
                  "nodeType": "EmitStatement",
                  "src": "2664:35:1"
                }
              ]
            },
            "documentation": null,
            "id": 244,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receivedERC223",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 233,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "2621:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 232,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2621:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 235,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "2636:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 234,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2636:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2620:29:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 237,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2658:0:1"
            },
            "scope": 323,
            "src": "2597:107:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 258,
              "nodeType": "Block",
              "src": "2846:41:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 254,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 246,
                        "src": "2867:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 255,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 248,
                        "src": "2874:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 253,
                      "name": "receivedERC223",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 244,
                      "src": "2852:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2852:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 257,
                  "nodeType": "ExpressionStatement",
                  "src": "2852:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 259,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "tokenFallback",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 246,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 259,
                  "src": "2797:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 245,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2797:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 248,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 259,
                  "src": "2812:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 247,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2812:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 250,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 259,
                  "src": "2826:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 249,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2826:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2796:42:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2846:0:1"
            },
            "scope": 323,
            "src": "2774:113:1",
            "stateMutability": "nonpayable",
            "superFunction": 457,
            "visibility": "public"
          },
          {
            "body": {
              "id": 278,
              "nodeType": "Block",
              "src": "3047:44:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 274,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 263,
                        "src": "3075:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 275,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 265,
                        "src": "3079:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 271,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 261,
                            "src": "3059:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 270,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 841,
                          "src": "3053:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 272,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3053:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$841",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 273,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 864,
                      "src": "3053:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3053:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 277,
                  "nodeType": "ExpressionStatement",
                  "src": "3053:33:1"
                }
              ]
            },
            "documentation": null,
            "id": 279,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 268,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 267,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 616,
                  "src": "3037:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3037:9:1"
              }
            ],
            "name": "contractTransfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 261,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "2990:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 260,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2990:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 263,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "3005:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 262,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3005:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 265,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "3017:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 264,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3017:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2989:40:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 269,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3047:0:1"
            },
            "scope": 323,
            "src": "2964:127:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 298,
              "nodeType": "Block",
              "src": "3254:48:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 294,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "3281:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 295,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 285,
                        "src": "3290:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 291,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 281,
                            "src": "3266:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 290,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 841,
                          "src": "3260:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 292,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3260:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$841",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 293,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 832,
                      "src": "3260:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 296,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3260:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 297,
                  "nodeType": "ExpressionStatement",
                  "src": "3260:37:1"
                }
              ]
            },
            "documentation": null,
            "id": 299,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 288,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 287,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 616,
                  "src": "3244:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3244:9:1"
              }
            ],
            "name": "contractApprove",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 286,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 281,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 299,
                  "src": "3192:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 280,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3192:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 283,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 299,
                  "src": "3207:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 282,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3207:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 285,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 299,
                  "src": "3224:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 284,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3224:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3191:45:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 289,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3254:0:1"
            },
            "scope": 323,
            "src": "3167:135:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 321,
              "nodeType": "Block",
              "src": "3482:54:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 316,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 303,
                        "src": "3514:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 317,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 305,
                        "src": "3520:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 318,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 307,
                        "src": "3524:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 313,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 301,
                            "src": "3494:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 312,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 841,
                          "src": "3488:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3488:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$841",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 315,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 823,
                      "src": "3488:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3488:43:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 320,
                  "nodeType": "ExpressionStatement",
                  "src": "3488:43:1"
                }
              ]
            },
            "documentation": null,
            "id": 322,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 310,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 309,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 616,
                  "src": "3472:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3472:9:1"
              }
            ],
            "name": "contractTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 301,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "3409:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 300,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3409:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 303,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "3424:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 302,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3424:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 305,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "3438:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 304,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3438:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 307,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "3450:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 306,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3450:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3408:54:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 311,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3482:0:1"
            },
            "scope": 323,
            "src": "3379:157:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 324,
        "src": "951:2588:1"
      }
    ],
    "src": "0:3540:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/bartley/Documents/dapps/shitcoin-toilet/contracts/ShitcoinToilet.sol",
    "exportedSymbols": {
      "ShitcoinToilet": [
        323
      ]
    },
    "id": 324,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol",
        "id": 59,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 799,
        "src": "26:71:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "id": 60,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 980,
        "src": "98:71:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/bartley/Documents/dapps/shitcoin-toilet/contracts/erc223-20-contracts/contracts/ERC223BasicToken.sol",
        "file": "./erc223-20-contracts/contracts/ERC223BasicToken.sol",
        "id": 61,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 447,
        "src": "170:62:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/bartley/Documents/dapps/shitcoin-toilet/contracts/erc223-20-contracts/contracts/ERC223ReceivingContract.sol",
        "file": "./erc223-20-contracts/contracts/ERC223ReceivingContract.sol",
        "id": 62,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 459,
        "src": "233:69:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 63,
              "name": "DetailedERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 798,
              "src": "978:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DetailedERC20_$798",
                "typeString": "contract DetailedERC20"
              }
            },
            "id": 64,
            "nodeType": "InheritanceSpecifier",
            "src": "978:13:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 65,
              "name": "MintableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 979,
              "src": "993:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MintableToken_$979",
                "typeString": "contract MintableToken"
              }
            },
            "id": 66,
            "nodeType": "InheritanceSpecifier",
            "src": "993:13:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 67,
              "name": "ERC223BasicToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 446,
              "src": "1008:16:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC223BasicToken_$446",
                "typeString": "contract ERC223BasicToken"
              }
            },
            "id": 68,
            "nodeType": "InheritanceSpecifier",
            "src": "1008:16:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 69,
              "name": "ERC223ReceivingContract",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 458,
              "src": "1026:23:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC223ReceivingContract_$458",
                "typeString": "contract ERC223ReceivingContract"
              }
            },
            "id": 70,
            "nodeType": "InheritanceSpecifier",
            "src": "1026:23:1"
          }
        ],
        "contractDependencies": [
          350,
          446,
          458,
          668,
          764,
          798,
          841,
          873,
          979,
          1226
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 323,
        "linearizedBaseContracts": [
          323,
          458,
          446,
          979,
          668,
          1226,
          764,
          350,
          798,
          841,
          873
        ],
        "name": "ShitcoinToilet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 73,
            "name": "NAME",
            "nodeType": "VariableDeclaration",
            "scope": 323,
            "src": "1055:33:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 71,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1055:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "f09f92a9434f494e",
              "id": 72,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1078:10:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_d87be5ceadc7160b379aa350eb9776fb1e9b825b808fce910c9be3951364936d",
                "typeString": "literal_string \"💩COIN\""
              },
              "value": "💩COIN"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 76,
            "name": "SYMBOL",
            "nodeType": "VariableDeclaration",
            "scope": 323,
            "src": "1092:35:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 74,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1092:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "f09f92a9434f494e",
              "id": 75,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1117:10:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_d87be5ceadc7160b379aa350eb9776fb1e9b825b808fce910c9be3951364936d",
                "typeString": "literal_string \"💩COIN\""
              },
              "value": "💩COIN"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 79,
            "name": "DECIMALS",
            "nodeType": "VariableDeclaration",
            "scope": 323,
            "src": "1131:28:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 77,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "1131:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3138",
              "id": 78,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1157:2:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 87,
            "name": "Flushed",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 86,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 81,
                  "indexed": true,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "1178:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 80,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 83,
                  "indexed": false,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "1200:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 82,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1200:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 85,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "1215:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 84,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1215:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1177:50:1"
            },
            "src": "1164:64:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 93,
            "name": "ReceivedERC223",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89,
                  "indexed": false,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "1252:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 88,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 91,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "1267:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1267:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1251:29:1"
            },
            "src": "1231:50:1"
          },
          {
            "body": {
              "id": 101,
              "nodeType": "Block",
              "src": "1408:2:1",
              "statements": []
            },
            "documentation": null,
            "id": 102,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 96,
                    "name": "NAME",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 73,
                    "src": "1371:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 97,
                    "name": "SYMBOL",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 76,
                    "src": "1377:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 98,
                    "name": "DECIMALS",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 79,
                    "src": "1385:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  }
                ],
                "id": 99,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 95,
                  "name": "DetailedERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 798,
                  "src": "1357:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_DetailedERC20_$798_$",
                    "typeString": "type(contract DetailedERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1357:37:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1350:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1408:0:1"
            },
            "scope": 323,
            "src": "1339:71:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 185,
              "nodeType": "Block",
              "src": "1641:609:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 112,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 104,
                          "src": "1655:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 114,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1278,
                              "src": "1672:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                "typeString": "contract ShitcoinToilet"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                "typeString": "contract ShitcoinToilet"
                              }
                            ],
                            "id": 113,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1664:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1664:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1655:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "63616e742073656e6420f09f92a9434f494e20746f206f776e20746f696c6574",
                        "id": 117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1679:34:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9e93f2e0417dd5d8943347f0ba99e1e6ea390062924a6f540f527d205ed05681",
                          "typeString": "literal_string \"cant send 💩COIN to own toilet\""
                        },
                        "value": "cant send 💩COIN to own toilet"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9e93f2e0417dd5d8943347f0ba99e1e6ea390062924a6f540f527d205ed05681",
                          "typeString": "literal_string \"cant send 💩COIN to own toilet\""
                        }
                      ],
                      "id": 111,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1244,
                        1245
                      ],
                      "referencedDeclaration": 1245,
                      "src": "1647:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1647:67:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 119,
                  "nodeType": "ExpressionStatement",
                  "src": "1647:67:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 125,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1241,
                                "src": "1785:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 126,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1785:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 128,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1278,
                                  "src": "1805:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                    "typeString": "contract ShitcoinToilet"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                    "typeString": "contract ShitcoinToilet"
                                  }
                                ],
                                "id": 127,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1797:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 129,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1797:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 122,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 104,
                                  "src": "1768:5:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 121,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 841,
                                "src": "1762:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 123,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1762:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$841",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 124,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "allowance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 812,
                            "src": "1762:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address,address) view external returns (uint256)"
                            }
                          },
                          "id": 130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1762:49:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 131,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 106,
                          "src": "1815:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1762:59:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "696e73756666696369656e7420616c6c6f77616e6365",
                        "id": 133,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1823:24:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_20dbb1b88f187125d7e634b087bca125fe84cb7576ed5ae599f7ade955801583",
                          "typeString": "literal_string \"insufficient allowance\""
                        },
                        "value": "insufficient allowance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_20dbb1b88f187125d7e634b087bca125fe84cb7576ed5ae599f7ade955801583",
                          "typeString": "literal_string \"insufficient allowance\""
                        }
                      ],
                      "id": 120,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1244,
                        1245
                      ],
                      "referencedDeclaration": 1245,
                      "src": "1754:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1754:94:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 135,
                  "nodeType": "ExpressionStatement",
                  "src": "1754:94:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 141,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1241,
                                "src": "1885:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 142,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1885:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 138,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 104,
                                  "src": "1868:5:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 137,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 841,
                                "src": "1862:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 139,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1862:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$841",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 140,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 855,
                            "src": "1862:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view external returns (uint256)"
                            }
                          },
                          "id": 143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1862:34:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 144,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 106,
                          "src": "1900:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1862:44:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "696e73756666696369656e742062616c616e6365",
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1908:22:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a6d1ff1db3d0b9b8c60e12ccab5ce7431be9a2cd0518ac362f1c5c1e0b1cefee",
                          "typeString": "literal_string \"insufficient balance\""
                        },
                        "value": "insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a6d1ff1db3d0b9b8c60e12ccab5ce7431be9a2cd0518ac362f1c5c1e0b1cefee",
                          "typeString": "literal_string \"insufficient balance\""
                        }
                      ],
                      "id": 136,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1244,
                        1245
                      ],
                      "referencedDeclaration": 1245,
                      "src": "1854:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1854:77:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 148,
                  "nodeType": "ExpressionStatement",
                  "src": "1854:77:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 154,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1241,
                              "src": "1971:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 155,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1971:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 157,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1278,
                                "src": "1991:4:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                  "typeString": "contract ShitcoinToilet"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ShitcoinToilet_$323",
                                  "typeString": "contract ShitcoinToilet"
                                }
                              ],
                              "id": 156,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1983:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1983:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 159,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "1998:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 151,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 104,
                                "src": "1951:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 150,
                              "name": "ERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 841,
                              "src": "1945:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                                "typeString": "type(contract ERC20)"
                              }
                            },
                            "id": 152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1945:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$841",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 823,
                          "src": "1945:25:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1945:60:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "7472616e7366657246726f6d206661696c6564",
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2007:21:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ab0f731885d207443b1e545c1c7e7ed7ac9b6ea503774981a1bcc8ac01b461c3",
                          "typeString": "literal_string \"transferFrom failed\""
                        },
                        "value": "transferFrom failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ab0f731885d207443b1e545c1c7e7ed7ac9b6ea503774981a1bcc8ac01b461c3",
                          "typeString": "literal_string \"transferFrom failed\""
                        }
                      ],
                      "id": 149,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1244,
                        1245
                      ],
                      "referencedDeclaration": 1245,
                      "src": "1937:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1937:92:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 163,
                  "nodeType": "ExpressionStatement",
                  "src": "1937:92:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 165,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1241,
                          "src": "2048:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 166,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2048:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 167,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 104,
                        "src": "2060:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 168,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "2067:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 164,
                      "name": "Flushed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 87,
                      "src": "2040:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2040:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 170,
                  "nodeType": "EmitStatement",
                  "src": "2035:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 173,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1241,
                              "src": "2170:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 174,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2170:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 175,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "2182:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 172,
                          "name": "toiletMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 231,
                          "src": "2159:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) returns (bool)"
                          }
                        },
                        "id": 176,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2159:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "746f696c65744d696e74206661696c6564",
                        "id": 177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2191:19:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_04ed8cca8b7092c428610235ddc922ecbc14e702f434703d6d1fd614e166796b",
                          "typeString": "literal_string \"toiletMint failed\""
                        },
                        "value": "toiletMint failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_04ed8cca8b7092c428610235ddc922ecbc14e702f434703d6d1fd614e166796b",
                          "typeString": "literal_string \"toiletMint failed\""
                        }
                      ],
                      "id": 171,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1244,
                        1245
                      ],
                      "referencedDeclaration": 1245,
                      "src": "2151:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2151:60:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 179,
                  "nodeType": "ExpressionStatement",
                  "src": "2151:60:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 181,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1241,
                          "src": "2234:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 182,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2234:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 180,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        763
                      ],
                      "referencedDeclaration": 763,
                      "src": "2224:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view returns (uint256)"
                      }
                    },
                    "id": 183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2224:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 110,
                  "id": 184,
                  "nodeType": "Return",
                  "src": "2217:28:1"
                }
              ]
            },
            "documentation": null,
            "id": 186,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "toilet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 104,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "1590:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1590:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 106,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "1605:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1605:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1589:28:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 109,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 186,
                  "src": "1635:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 108,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1635:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1634:6:1"
            },
            "scope": 323,
            "src": "1574:676:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 230,
              "nodeType": "Block",
              "src": "2332:190:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 197,
                      "name": "totalSupply_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 683,
                      "src": "2338:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 200,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 190,
                          "src": "2370:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 198,
                          "name": "totalSupply_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 683,
                          "src": "2353:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 581,
                        "src": "2353:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2353:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2338:40:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 203,
                  "nodeType": "ExpressionStatement",
                  "src": "2338:40:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 204,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 681,
                        "src": "2384:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 206,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 205,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2393:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2384:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 211,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 190,
                          "src": "2418:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 207,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 681,
                            "src": "2400:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 209,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 208,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 188,
                            "src": "2409:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2400:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 210,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 581,
                        "src": "2400:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2400:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2384:42:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 214,
                  "nodeType": "ExpressionStatement",
                  "src": "2384:42:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 216,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2442:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 217,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 190,
                        "src": "2447:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 215,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 887,
                      "src": "2437:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2437:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 219,
                  "nodeType": "EmitStatement",
                  "src": "2432:23:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 222,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2483:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 221,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2475:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 223,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2475:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 224,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2487:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 225,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 190,
                        "src": "2492:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 220,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        338,
                        872
                      ],
                      "referencedDeclaration": 872,
                      "src": "2466:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2466:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 227,
                  "nodeType": "EmitStatement",
                  "src": "2461:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2513:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 196,
                  "id": 229,
                  "nodeType": "Return",
                  "src": "2506:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 231,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 193,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 192,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 901,
                  "src": "2309:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2309:7:1"
              }
            ],
            "name": "toiletMint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 188,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "2274:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2274:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 190,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "2287:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 189,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2287:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2273:27:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 195,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "2326:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 194,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2326:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2325:6:1"
            },
            "scope": 323,
            "src": "2254:268:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 243,
              "nodeType": "Block",
              "src": "2658:46:1",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 239,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 233,
                        "src": "2684:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 240,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 235,
                        "src": "2691:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 238,
                      "name": "ReceivedERC223",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 93,
                      "src": "2669:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2669:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 242,
                  "nodeType": "EmitStatement",
                  "src": "2664:35:1"
                }
              ]
            },
            "documentation": null,
            "id": 244,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receivedERC223",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 233,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "2621:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 232,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2621:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 235,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "2636:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 234,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2636:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2620:29:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 237,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2658:0:1"
            },
            "scope": 323,
            "src": "2597:107:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 258,
              "nodeType": "Block",
              "src": "2846:41:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 254,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 246,
                        "src": "2867:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 255,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 248,
                        "src": "2874:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 253,
                      "name": "receivedERC223",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 244,
                      "src": "2852:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2852:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 257,
                  "nodeType": "ExpressionStatement",
                  "src": "2852:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 259,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "tokenFallback",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 246,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 259,
                  "src": "2797:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 245,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2797:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 248,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 259,
                  "src": "2812:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 247,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2812:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 250,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 259,
                  "src": "2826:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 249,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2826:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2796:42:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2846:0:1"
            },
            "scope": 323,
            "src": "2774:113:1",
            "stateMutability": "nonpayable",
            "superFunction": 457,
            "visibility": "public"
          },
          {
            "body": {
              "id": 278,
              "nodeType": "Block",
              "src": "3047:44:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 274,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 263,
                        "src": "3075:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 275,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 265,
                        "src": "3079:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 271,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 261,
                            "src": "3059:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 270,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 841,
                          "src": "3053:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 272,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3053:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$841",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 273,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 864,
                      "src": "3053:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3053:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 277,
                  "nodeType": "ExpressionStatement",
                  "src": "3053:33:1"
                }
              ]
            },
            "documentation": null,
            "id": 279,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 268,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 267,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 616,
                  "src": "3037:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3037:9:1"
              }
            ],
            "name": "contractTransfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 261,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "2990:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 260,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2990:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 263,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "3005:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 262,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3005:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 265,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 279,
                  "src": "3017:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 264,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3017:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2989:40:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 269,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3047:0:1"
            },
            "scope": 323,
            "src": "2964:127:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 298,
              "nodeType": "Block",
              "src": "3254:48:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 294,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 283,
                        "src": "3281:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 295,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 285,
                        "src": "3290:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 291,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 281,
                            "src": "3266:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 290,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 841,
                          "src": "3260:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 292,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3260:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$841",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 293,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 832,
                      "src": "3260:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 296,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3260:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 297,
                  "nodeType": "ExpressionStatement",
                  "src": "3260:37:1"
                }
              ]
            },
            "documentation": null,
            "id": 299,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 288,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 287,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 616,
                  "src": "3244:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3244:9:1"
              }
            ],
            "name": "contractApprove",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 286,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 281,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 299,
                  "src": "3192:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 280,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3192:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 283,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 299,
                  "src": "3207:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 282,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3207:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 285,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 299,
                  "src": "3224:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 284,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3224:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3191:45:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 289,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3254:0:1"
            },
            "scope": 323,
            "src": "3167:135:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 321,
              "nodeType": "Block",
              "src": "3482:54:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 316,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 303,
                        "src": "3514:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 317,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 305,
                        "src": "3520:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 318,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 307,
                        "src": "3524:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 313,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 301,
                            "src": "3494:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 312,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 841,
                          "src": "3488:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$841_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3488:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$841",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 315,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 823,
                      "src": "3488:25:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3488:43:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 320,
                  "nodeType": "ExpressionStatement",
                  "src": "3488:43:1"
                }
              ]
            },
            "documentation": null,
            "id": 322,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 310,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 309,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 616,
                  "src": "3472:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3472:9:1"
              }
            ],
            "name": "contractTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 301,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "3409:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 300,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3409:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 303,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "3424:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 302,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3424:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 305,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "3438:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 304,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3438:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 307,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "3450:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 306,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3450:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3408:54:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 311,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3482:0:1"
            },
            "scope": 323,
            "src": "3379:157:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 324,
        "src": "951:2588:1"
      }
    ],
    "src": "0:3540:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {},
      "links": {},
      "address": "0xCaC04FB6B76b16e0c2917B2bb7220BA2939fE87E",
      "transactionHash": "0x98e3f1dfc3476ddea3e6514d91b05b55bf892c03493d59ccfdf3afd723dd3045"
    }
  },
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-09-14T21:34:29.234Z"
}
},{}],2:[function(require,module,exports){
/*
Shitcoin Toilet
Logic:
1. get account from metamask
2. get tokens for account from etherscan
3. parse tokens and filter by value
*/
const contractJSON = require('../build/contracts/ShitcoinToilet.json')
const decimalsABI = [
{
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
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

function startApp() {
  var userAccount
  // function runs every 1/10th sec
  var accountInterval = setInterval(function() {
    // check if metamask account has changed
    web3.eth.getAccounts().then(async function(accounts) {
      if (accounts[0] !== userAccount) {
        userAccount = accounts[0]
        console.log('new userAccount', userAccount)

        const networkId = await web3.eth.net.getId() // await?
        const deployedAddress = contractJSON.networks[networkId].address
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
      getWeiForTokenFromDecimal(tokens)
      displayTokens()
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

function getWeiForTokenFromDecimal(_tokens) {
  for (i = 0; i < _tokens.length; i++) {
    console.log(_tokens[i]['name'], _tokens[i]['address'])
    var erc20 = new web3.eth.Contract(decimalsABI, _tokens[i]['address'])
    var decimals = erc20.methods.decimals().call(function(err, res){
      console.log(err, res)
    })
  }
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
    button.onclick = function(){
      console.log('approve token', tokens[this.tokenIndex].address, 'qty', tokens[this.tokenIndex].qty)
      shitcoinToilet.methods.approve(tokens[this.tokenIndex].address, tokens[this.tokenIndex].qty).send()
    }
    button.tokenIndex = i;
    button.setAttribute('class', 'myButton')
    button.textContent = 'APPROVE'
    approveCell.appendChild(button)
    tr.appendChild(approveCell)

    // flush button
    var flushCell = document.createElement('div')
    flushCell.setAttribute('class', 'divTableCell')
    var button = document.createElement('a')
    button.onclick = function(){
      console.log('toilet token', tokens[this.tokenIndex].address, 'qty', tokens[this.tokenIndex].qty)
      shitcoinToilet.methods.toilet(tokens[this.tokenIndex].address, tokens[this.tokenIndex].qty).send()
    }
    button.tokenIndex = i;
    button.setAttribute('class', 'myButton')
    button.textContent = 'FLUSH ' + tokens[i].qty
    flushCell.appendChild(button)
    tr.appendChild(flushCell)
  }
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

},{"../build/contracts/ShitcoinToilet.json":1}]},{},[2]);
