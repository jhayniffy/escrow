# Wallet Setup Guide

## Supported Wallets

Your Escrow DApp now supports multiple wallets:
- **Rabby Wallet** (Recommended - First option)
- **Rainbow Wallet**
- **MetaMask**
- **Coinbase Wallet**
- **WalletConnect** (connects to 300+ wallets)

## How to Use Rabby Wallet

### 1. Install Rabby Wallet

**Desktop Browser Extension:**
- Visit https://rabby.io/
- Click "Download" and install for your browser
- Available for Chrome, Edge, Brave, and Firefox

### 2. Set Up Rabby Wallet

1. Open Rabby extension
2. Create a new wallet or import existing one
3. **IMPORTANT:** Save your recovery phrase securely!
4. Set a strong password

### 3. Switch to Sepolia Testnet

1. Open Rabby Wallet
2. Click on the network selector at the top
3. Search for "Sepolia"
4. Select "Sepolia Testnet"

### 4. Get Test ETH

You need Sepolia ETH to use the escrow:
- Visit https://sepoliafaucet.com/
- Enter your Rabby wallet address
- Request test ETH (free)

Alternative faucets:
- https://www.alchemy.com/faucets/ethereum-sepolia
- https://sepolia-faucet.pk910.de/

### 5. Connect to Escrow DApp

1. Start the frontend: `cd frontend && npm run dev`
2. Open http://localhost:3000
3. Click "Connect Wallet"
4. Select "Rabby" from the wallet list (first option)
5. Approve the connection in Rabby Wallet

## Why Rabby?

- **Multi-chain support** - Automatically switches networks
- **Security focused** - Shows transaction simulations
- **Better UX** - Cleaner interface than MetaMask
- **Pre-sign warnings** - Alerts you to risky transactions

## Using Other Wallets

### 1. Install Rainbow Wallet

**Mobile:**
- Download from [App Store](https://apps.apple.com/app/rainbow-ethereum-wallet/id1457119021) (iOS)
- Download from [Google Play](https://play.google.com/store/apps/details?id=me.rainbow) (Android)

**Desktop:**
- Install the [Rainbow browser extension](https://rainbow.me/extension)
- Available for Chrome, Brave, Edge, and Arc browsers

### 2. Set Up Rainbow Wallet

1. Open Rainbow Wallet
2. Create a new wallet or import existing one
3. **IMPORTANT:** Save your recovery phrase securely!

### 3. Switch to Sepolia Testnet

1. Open Rainbow Wallet
2. Tap/Click on the network selector (usually shows "Ethereum")
3. Enable "Testnets" in settings
4. Select "Sepolia"

### 4. Get Test ETH

You need Sepolia ETH to use the escrow:
- Visit https://sepoliafaucet.com/
- Enter your wallet address
- Request test ETH (free)

Alternative faucets:
- https://www.alchemy.com/faucets/ethereum-sepolia
- https://sepolia-faucet.pk910.de/

### 5. Connect to Escrow DApp

1. Start the frontend: `cd frontend && npm run dev`
2. Open http://localhost:3000
3. Click "Connect Wallet"
4. Select "Rainbow" from the wallet list
5. Approve the connection in Rainbow Wallet

## Using Other Wallets

### MetaMask
1. Install from https://metamask.io/
2. Add Sepolia network
3. Get test ETH from faucet
4. Connect to the dApp

### Coinbase Wallet
1. Install from https://www.coinbase.com/wallet
2. Switch to Sepolia testnet
3. Get test ETH
4. Connect to the dApp

### WalletConnect
1. Click "WalletConnect" in the dApp
2. Scan QR code with any WalletConnect-compatible wallet
3. Approve connection

## Troubleshooting

**Wallet not showing up?**
- Make sure you're on Sepolia testnet
- Refresh the page
- Clear browser cache

**Transaction failing?**
- Check you have enough Sepolia ETH
- Make sure you're connected to the right network
- Try increasing gas limit

**Can't connect?**
- Disable other wallet extensions temporarily
- Try a different browser
- Check wallet is unlocked
