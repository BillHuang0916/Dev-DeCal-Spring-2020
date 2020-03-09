// Commands for you to execute in interactive node window
// If you want, you can also deploy it in a simple web app
const Web3 = require('web3')
// Get the endpoint under the correct test net in Infura
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/136aa6519ea845a0b40b579de6157008"));
// Get your contract's deployed address, access that through the link in Remix console.
const address = "0x66a05e1DC94520078E426e5701A65F7d3ead2031";
// Your contract's ABI, from Remix IDE
const ABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "withdrawAmount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"name": "remainingBal",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "accountAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "LogDepositMade",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balance",
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
		"type": "function"
	}
];

// Get properties regarding the function calls
web3.eth.getBalance
// Specify your contract
const myContract = new web3.eth.Contract(ABI, address)
// Async call to get the contract's balance, interacting with the contract
myContract.methods.balance().call().then( function(data) {
    console.log("Bank balance: " + data);
});
