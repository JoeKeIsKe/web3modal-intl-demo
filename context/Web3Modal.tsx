"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";
import { useEffect, useState } from "react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "11f9bec57b3452f473bce5661168e5e0";
// const projectId = "";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export function Web3Modal({ locale, children }: any) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // init();
  }, [locale]);
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
