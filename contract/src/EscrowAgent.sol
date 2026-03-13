// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EscrowAgent {
    enum EscrowStatus { PENDING, COMPLETED, REFUNDED, DISPUTED }
    
    struct Escrow {
        address buyer;
        address seller;
        uint256 amount;
        EscrowStatus status;
        uint256 createdAt;
    }
    
    mapping(uint256 => Escrow) public escrows;
    uint256 public escrowCount;
    address public agent;
    
    event EscrowCreated(uint256 indexed escrowId, address indexed buyer, address indexed seller, uint256 amount);
    event EscrowCompleted(uint256 indexed escrowId);
    event EscrowRefunded(uint256 indexed escrowId);
    event EscrowDisputed(uint256 indexed escrowId);
    
    modifier onlyAgent() {
        require(msg.sender == agent, "Only agent");
        _;
    }
    
    modifier onlyBuyer(uint256 escrowId) {
        require(msg.sender == escrows[escrowId].buyer, "Only buyer");
        _;
    }
    
    constructor() {
        agent = msg.sender;
    }
    
    function createEscrow(address seller) external payable returns (uint256) {
        require(msg.value > 0, "Amount must be > 0");
        require(seller != address(0), "Invalid seller");
        
        uint256 escrowId = escrowCount++;
        escrows[escrowId] = Escrow({
            buyer: msg.sender,
            seller: seller,
            amount: msg.value,
            status: EscrowStatus.PENDING,
            createdAt: block.timestamp
        });
        
        emit EscrowCreated(escrowId, msg.sender, seller, msg.value);
        return escrowId;
    }
    
    function completeEscrow(uint256 escrowId) external onlyAgent {
        Escrow storage escrow = escrows[escrowId];
        require(escrow.status == EscrowStatus.PENDING, "Invalid status");
        
        escrow.status = EscrowStatus.COMPLETED;
        payable(escrow.seller).transfer(escrow.amount);
        
        emit EscrowCompleted(escrowId);
    }
    
    function refundEscrow(uint256 escrowId) external onlyAgent {
        Escrow storage escrow = escrows[escrowId];
        require(escrow.status == EscrowStatus.PENDING, "Invalid status");
        
        escrow.status = EscrowStatus.REFUNDED;
        payable(escrow.buyer).transfer(escrow.amount);
        
        emit EscrowRefunded(escrowId);
    }
    
    function disputeEscrow(uint256 escrowId) external onlyBuyer(escrowId) {
        Escrow storage escrow = escrows[escrowId];
        require(escrow.status == EscrowStatus.PENDING, "Invalid status");
        
        escrow.status = EscrowStatus.DISPUTED;
        emit EscrowDisputed(escrowId);
    }
    
    function getEscrow(uint256 escrowId) external view returns (Escrow memory) {
        return escrows[escrowId];
    }
}
