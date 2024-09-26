"use client";

import React, { useState } from "react";
import ConnectToBlockchain from "@/components/ethers/ConnectToBlockchain";
import WalletDropdown from "@/components/pages/Wallet/WalletDropdown";

const Testing = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const handleWalletConnect = (address: string, walletType: string) => {
    setIsConnected(true);
    setWalletAddress(address);
    console.log("Connected with", walletType, "Wallet:", address);
  };

  const handleDisconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
  };

  return (
    <div>
      <h1>Test ConnectToBlockchain Component</h1>
      {!isConnected ? (
        <ConnectToBlockchain onWalletConnect={handleWalletConnect} />
      ) : (
        <WalletDropdown
          walletAddress={walletAddress}
          onDisconnect={handleDisconnectWallet}
        />
      )}
    </div>
  );
};

export default Testing;
