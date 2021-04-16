pragma solidity ^0.6.4;

contract Faucet {
  address payable public owner;

  constructor() public {
      owner = msg.sender;
  }

  // Admin methods
  function changeOwner(address payable newOwner) public onlyOwner {
    require(newOwner != owner);
    owner = newOwner;
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  // Fund methods
  receive() external payable {}

  function deposit() external payable {}

  function withdraw(uint amount) public {
    require(amount <= 0.1 ether);

    msg.sender.transfer(amount);
  }
}