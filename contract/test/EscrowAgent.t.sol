// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {EscrowAgent} from "../src/EscrowAgent.sol";

contract EscrowAgentTest is Test {
    EscrowAgent public escrow;
    address agent = address(1);
    address buyer = address(2);
    address seller = address(3);
    
    function setUp() public {
        vm.prank(agent);
        escrow = new EscrowAgent();
    }
    
    function testCreateEscrow() public {
        vm.deal(buyer, 1 ether);
        vm.prank(buyer);
        uint256 escrowId = escrow.createEscrow{value: 0.5 ether}(seller);
        
        (address _buyer, address _seller, uint256 amount, EscrowAgent.EscrowStatus status,) = escrow.escrows(escrowId);
        assertEq(_buyer, buyer);
        assertEq(_seller, seller);
        assertEq(amount, 0.5 ether);
        assertEq(uint(status), uint(EscrowAgent.EscrowStatus.PENDING));
    }
    
    function testCompleteEscrow() public {
        vm.deal(buyer, 1 ether);
        vm.prank(buyer);
        uint256 escrowId = escrow.createEscrow{value: 0.5 ether}(seller);
        
        vm.prank(agent);
        escrow.completeEscrow(escrowId);
        
        assertEq(seller.balance, 0.5 ether);
    }
    
    function testRefundEscrow() public {
        vm.deal(buyer, 1 ether);
        vm.prank(buyer);
        uint256 escrowId = escrow.createEscrow{value: 0.5 ether}(seller);
        
        vm.prank(agent);
        escrow.refundEscrow(escrowId);
        
        assertEq(buyer.balance, 1 ether);
    }
}
