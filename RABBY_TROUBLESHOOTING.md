# Rabby Wallet Connection Troubleshooting

## Quick Fixes

### 1. Check Rabby Installation
- Open your browser extensions
- Verify Rabby Wallet is installed and enabled
- Make sure Rabby is unlocked (enter your password)

### 2. Check Network
- Open Rabby Wallet
- Click the network dropdown at the top
- Select **Sepolia Testnet**
- If you don't see Sepolia, enable testnets in Rabby settings

### 3. Clear Cache & Restart
```bash
cd frontend
rm -rf .next
npm run dev
```
- Hard refresh browser: `Ctrl+Shift+R` (Linux/Windows) or `Cmd+Shift+R` (Mac)

### 4. Disable Conflicting Extensions
Rabby can conflict with other wallet extensions:
- Temporarily disable MetaMask
- Temporarily disable other wallet extensions
- Refresh the page
- Try connecting again

### 5. Check Browser Console
- Open Developer Tools: `F12` or `Ctrl+Shift+I`
- Go to Console tab
- Look for any red errors
- Share errors if you see any

### 6. Try Injected Wallet Option
If Rabby doesn't appear in the wallet list:
- Click "Connect Wallet"
- Look for "Injected Wallet" or "Browser Wallet"
- Click it - this should detect Rabby

### 7. Rabby-Specific Settings
1. Open Rabby Wallet
2. Go to Settings (gear icon)
3. Under "Connections", check if localhost:3001 is listed
4. If blocked, remove it and try connecting again

### 8. Use WalletConnect as Fallback
If direct connection fails:
- Click "WalletConnect" in the dApp
- Open Rabby mobile app
- Scan the QR code

## Common Issues

### "Wallet not detected"
- Rabby might be locked - unlock it
- Refresh the page after unlocking
- Check if Rabby is set as default wallet in browser

### "Wrong network"
- Switch to Sepolia in Rabby
- The dApp should auto-prompt network switch
- Approve the network switch in Rabby

### "Connection rejected"
- You may have clicked "Reject" in Rabby
- Go to Rabby → Settings → Connected Sites
- Remove localhost if listed
- Try connecting again

### "Transaction failing"
- Check you have Sepolia ETH
- Get free test ETH: https://sepoliafaucet.com/
- Make sure you're on Sepolia network

## Still Not Working?

Try these browsers (in order):
1. **Chrome** - Best compatibility
2. **Brave** - Good compatibility
3. **Edge** - Good compatibility
4. **Firefox** - May have issues

## Alternative: Use MetaMask
If Rabby continues to have issues:
1. Install MetaMask
2. Import your wallet using seed phrase
3. Connect with MetaMask instead
