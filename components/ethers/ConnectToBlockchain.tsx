import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Button } from "../ui";

function ConnectToBlockchain() {
  const connectWallet = async (providerType: string) => {
    let provider;

    if (providerType === "MetaMask" && typeof window.ethereum !== "undefined") {
      // MetaMask provider
      provider = new ethers.BrowserProvider(window.ethereum);
    } else if (providerType === "WalletConnect") {
      // WalletConnect provider
      const walletConnectProvider = new WalletConnectProvider({
        // The WalletConnect v2 SDK does not use `infuraId`. Instead, you should provide a bridge URL if needed.
        qrcode: true,
      });

      await walletConnectProvider.enable();
      provider = new ethers.BrowserProvider(walletConnectProvider);
    } else {
      console.error("No provider found");
      return;
    }

    try {
      const accounts = await provider.send("eth_requestAccounts", []);
      console.log(accounts[0]);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  return (
    <div className="space-x-5">
      <Button onClick={() => connectWallet("MetaMask")}>
        Connect MetaMask
      </Button>
      <Button onClick={() => connectWallet("WalletConnect")}>
        Connect WalletConnect
      </Button>
    </div>
  );
}

export default ConnectToBlockchain;
