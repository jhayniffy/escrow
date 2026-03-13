# Escrow DApp

A decentralized escrow application built with Foundry smart contracts and Next.js frontend using RainbowKit and wagmi.

## Project Structure

```
my-appescrow/
├── contract/          # Foundry smart contracts
│   ├── src/          # Contract source files
│   ├── test/         # Contract tests
│   └── script/       # Deployment scripts
└── frontend/         # Next.js frontend
    ├── app/          # Next.js app directory
    └── lib/          # Contract ABI and config
```

## Smart Contract

The `EscrowAgent` contract provides:
- Create escrow with ETH deposit
- Complete escrow (agent releases funds to seller)
- Refund escrow (agent returns funds to buyer)
- Dispute escrow (buyer can flag issues)

### Contract Deployment

1. Navigate to contract directory:
```bash
cd contract
```

2. Build the contract:
```bash
forge build
```

3. Run tests:
```bash
forge test
```

4. Deploy to Sepolia testnet:
```bash
forge script script/DeployEscrowAgent.s.sol:DeployEscrowAgent --rpc-url $SEPOLIA_RPC_URL --private-key $PRIVATE_KEY --broadcast
```

5. Update the contract address in `frontend/lib/contract.ts` with the deployed address.

## Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Usage

1. **Connect Wallet**: Click "Connect Wallet" button
2. **Create Escrow**: Enter seller address and amount, then click "Create Escrow"
3. **View Escrow**: Enter escrow ID to view details
4. **Agent Actions**: If you're the agent, you can complete or refund escrows
5. **Buyer Actions**: Buyers can dispute escrows

## Environment Variables

Create a `.env` file in the contract directory:
```
SEPOLIA_RPC_URL=your_rpc_url
PRIVATE_KEY=your_private_key
```

## Technologies

- **Smart Contracts**: Solidity, Foundry
- **Frontend**: Next.js 16, React 19, TypeScript
- **Web3**: RainbowKit, wagmi, viem
- **Styling**: Tailwind CSS
