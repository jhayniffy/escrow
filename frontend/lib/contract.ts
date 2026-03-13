export const contractAddress = "0x0000000000000000000000000000000000000000" as const;

export const contractABI = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "agent",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "completeEscrow",
    inputs: [{ name: "escrowId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createEscrow",
    inputs: [{ name: "seller", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "disputeEscrow",
    inputs: [{ name: "escrowId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "escrowCount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "escrows",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "buyer", type: "address", internalType: "address" },
      { name: "seller", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
      { name: "status", type: "uint8", internalType: "enum EscrowAgent.EscrowStatus" },
      { name: "createdAt", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getEscrow",
    inputs: [{ name: "escrowId", type: "uint256", internalType: "uint256" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct EscrowAgent.Escrow",
        components: [
          { name: "buyer", type: "address", internalType: "address" },
          { name: "seller", type: "address", internalType: "address" },
          { name: "amount", type: "uint256", internalType: "uint256" },
          { name: "status", type: "uint8", internalType: "enum EscrowAgent.EscrowStatus" },
          { name: "createdAt", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "refundEscrow",
    inputs: [{ name: "escrowId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "EscrowCompleted",
    inputs: [{ name: "escrowId", type: "uint256", indexed: true, internalType: "uint256" }],
    anonymous: false,
  },
  {
    type: "event",
    name: "EscrowCreated",
    inputs: [
      { name: "escrowId", type: "uint256", indexed: true, internalType: "uint256" },
      { name: "buyer", type: "address", indexed: true, internalType: "address" },
      { name: "seller", type: "address", indexed: true, internalType: "address" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EscrowDisputed",
    inputs: [{ name: "escrowId", type: "uint256", indexed: true, internalType: "uint256" }],
    anonymous: false,
  },
  {
    type: "event",
    name: "EscrowRefunded",
    inputs: [{ name: "escrowId", type: "uint256", indexed: true, internalType: "uint256" }],
    anonymous: false,
  },
] as const;
