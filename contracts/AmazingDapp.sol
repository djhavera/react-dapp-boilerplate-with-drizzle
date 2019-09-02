pragma solidity >=0.4.22 <0.6.0;

contract AmazingDapp {
  mapping (string => bool) private names;

  function checkIfExists(string memory name) view public returns (bool) {
    return names[name];
  }

  function registerName(string memory name) public {
    names[name] = true;
  }

}
