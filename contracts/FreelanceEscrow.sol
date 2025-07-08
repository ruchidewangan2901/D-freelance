// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FreelanceEscrow {
    address public client;
    address public freelancer;
    uint256 public amount;
    bool public jobCompleted;

    constructor(address _freelancer) payable {
        require(msg.value > 0, "Must send some ETH");
        client = msg.sender;
        freelancer = _freelancer;
        amount = msg.value;
    }

    function markJobComplete() public {
        require(msg.sender == freelancer, "Only freelancer can complete the job");
        require(!jobCompleted, "Job already marked complete");
        jobCompleted = true;
    }

    function releasePayment() public {
        require(msg.sender == client, "Only client can release payment");
        require(jobCompleted, "Job not completed yet");
        payable(freelancer).transfer(amount);
    }
}
