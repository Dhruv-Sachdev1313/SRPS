// SPDX=Licence-Identifier: MIT

pragma solidity ^0.8.11

contract PurchaseAgreement {
    uint public value;
    address payable public seller;
    address payable public buyer;

    enum State {Created, Locked, Released, Inactive}

    State public state;

    constructor() payable {
        seller= payable(msg.sender)
    }

    function confirmPurchase() external payable {
        require(msg.value == (2 * value))
        buyer= payable(msg.sender)
        state= State.Locked
    }
}