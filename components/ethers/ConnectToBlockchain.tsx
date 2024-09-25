import { ethers } from "ethers";
import EthereumProvider from "@walletconnect/ethereum-provider";
import { Button } from "../ui";

interface ConnectToBlockchainProps {
  onWalletConnect: (address: string) => void;
}

const ConnectToBlockchain: React.FC<ConnectToBlockchainProps> = ({
  onWalletConnect,
}) => {
  const connectWallet = async (providerType: string) => {
    let provider;

    if (providerType === "MetaMask" && typeof window.ethereum !== "undefined") {
      // MetaMask provider
      provider = new ethers.BrowserProvider(window.ethereum);
    } else if (providerType === "WalletConnect") {
      // WalletConnect v2 provider
      const walletConnectProvider = await EthereumProvider.init({
        projectId: "b197359b9ae78691e8ce85b034bd41d9", // Replace with your WalletConnect Project ID
        chains: [1, 9999], // Add the chain IDs you want to support (1 for Ethereum Mainnet, replace 9999 with Reown chain ID)
        rpcMap: {
          1: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID", // Replace with Infura or any RPC provider
          9999: "https://rpc.reown.network", // Replace with Reown RPC URL (if available)
        },
        showQrModal: true, // Displays QR code for WalletConnect
      });

      await walletConnectProvider.enable();
      provider = new ethers.BrowserProvider(walletConnectProvider);
    } else {
      console.error("No provider found");
      return;
    }

    try {
      const accounts = await provider.send("eth_requestAccounts", []);
      const walletAddress = accounts[0];

      onWalletConnect(walletAddress);
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
};

export default ConnectToBlockchain;
