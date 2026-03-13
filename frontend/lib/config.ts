import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "viem/chains";

export const config = getDefaultConfig({
  appName: "Escrow DApp",
  projectId: "ded113ee97bdde5d11ceddf65bb87eeb",
  chains: [sepolia],
  ssr: true,
});
