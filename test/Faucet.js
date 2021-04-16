const { assert } = require('chai');
const { default: Web3 } = require('web3');

const Faucet = artifacts.require("./Faucet.sol");

contract('Faucet', (accounts) => {
  before(async () => {
    this.faucet = await Faucet.deployed();
  })

  it('Should set owner on construct', async () => {
    const owner = await this.faucet.owner();
    assert(owner === accounts[0])
  }) 

  it('should deposit ether to the faucet', async () => {
    await this.faucet.deposit({from: accounts[0], value: 100})
    const balance = await web3.eth.getBalance(this.faucet.address);
    assert(parseInt(balance) === 100);
  })
})