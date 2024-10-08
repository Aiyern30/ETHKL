// "use client";

// import { useState, useEffect, useRef } from "react";
// import {
//   Wallet,
//   ChevronDown,
//   Coins,
//   Package,
//   LogOut,
//   AlertCircle,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ethers } from "ethers";

// const providerOptions = {
//   // Modify with custom SDK (coinbase, bitget...) if needed
// };

// interface ConnectWalletProps {
//   onWalletConnect: (address: string) => void;
// }

// export default function ConnectWallet({ onWalletConnect }: ConnectWalletProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isConnected, setIsConnected] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [walletAddress, setWalletAddress] = useState("");
//   const [walletChainID, setWalletChainID] = useState<BigInt | null>(null);
//   const [error, setError] = useState("");
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const isWalletConnected =
//       localStorage.getItem("isWalletConnected") === "true";
//     if (isWalletConnected) {
//       handleConnect();
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleConnect = async () => {
//     if (!isConnected && !isAnimating) {
//       setIsAnimating(true);
//       setError("");
//       try {
//         await new Promise((resolve) => setTimeout(resolve, 1000));

//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const WalletChainID = (await provider.getNetwork()).chainId;

//         // Modify according to required chain network (current = MANTA PACIFIC Testnet)
//         if (walletChainID !== BigInt(3441006)) {
//           window.ethereum.request({
//             method: "wallet_addEthereumChain",
//             params: [
//               {
//                 chainId: "0x34816E",
//                 rpcUrls: [
//                   "https://pacific-rpc.sepolia-testnet.manta.network/http",
//                 ],
//                 chainName: "Matic Pacific Testnet",
//                 nativeCurrency: {
//                   name: "ETH",
//                   symbol: "ETH",
//                   decimals: 18,
//                 },
//                 blockExplorerUrls: [
//                   "https://pacific-explorer.sepolia-testnet.manta.network",
//                 ],
//               },
//             ],
//           });

//           window.ethereum.request({
//             method: "wallet_switchEthereumChain",
//             params: [{ chainId: "0x34816E" }],
//           });
//         }

//         const wallet_address = await signer.getAddress();

//         setIsConnected(true);
//         localStorage.setItem("isWalletConnected", "true");
//         onWalletConnect(wallet_address);
//         setWalletAddress(wallet_address);
//         setWalletChainID(WalletChainID);
//       } catch (error) {
//         console.error(error);
//         setError(
//           error instanceof Error
//             ? error.message
//             : "Failed to connect wallet. Please try again."
//         );
//         setWalletAddress("");
//         setWalletChainID(null);
//         localStorage.removeItem("isWalletConnected");
//       } finally {
//         setIsAnimating(false);
//       }
//     }
//   };

//   const disconnectWallet = async () => {
//     setIsAnimating(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setIsConnected(false);
//     setWalletAddress("");
//     setWalletChainID(null);
//     setIsOpen(false);
//     localStorage.removeItem("isWalletConnected");
//     setIsAnimating(false);
//     onWalletConnect("");
//   };

//   const buttonVariants = {
//     idle: { scale: 1 },
//     connecting: {
//       scale: [1, 1.1, 1],
//       transition: { duration: 0.5, repeat: Infinity },
//     },
//     connected: { scale: 1 },
//     popOut: { scale: [1, 1.2, 1], transition: { duration: 0.3 } },
//   };

//   const iconVariants = {
//     idle: { rotate: 0 },
//     connecting: {
//       rotate: 360,
//       transition: { duration: 1, repeat: Infinity, ease: "linear" },
//     },
//     connected: { rotate: 0 },
//   };

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.2,
//         when: "beforeChildren",
//         staggerChildren: 0.05,
//       },
//     },
//     exit: {
//       opacity: 0,
//       y: -10,
//       transition: {
//         duration: 0.2,
//         when: "afterChildren",
//         staggerChildren: 0.05,
//         staggerDirection: -1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -20 },
//   };

//   return (
//     <div className="relative inline-block text-left" ref={dropdownRef}>
//       <div>
//         <motion.button
//           type="button"
//           className="inline-flex justify-center items-center w-full rounded-md border border-transparent px-4 py-2 bg-purple-600 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:text-sm"
//           id="connect-wallet-button"
//           aria-haspopup="true"
//           aria-expanded={isOpen}
//           onClick={isConnected ? toggleDropdown : handleConnect}
//           variants={buttonVariants}
//           animate={
//             isAnimating ? "connecting" : isConnected ? "connected" : "idle"
//           }
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div
//             variants={iconVariants}
//             animate={isAnimating ? "connecting" : "idle"}
//             className="mr-2"
//           >
//             <Wallet className="h-5 w-5" aria-hidden="true" />
//           </motion.div>
//           <AnimatePresence mode="wait">
//             {isConnected ? (
//               <motion.span
//                 key="connected"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <span className="hidden sm:inline">
//                   {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
//                 </span>
//                 <span className="sm:hidden">Wallet</span>
//                 <ChevronDown
//                   className="ml-2 h-5 w-5 inline"
//                   aria-hidden="true"
//                 />
//               </motion.span>
//             ) : (
//               <motion.span
//                 key="connect"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {isAnimating ? "Connecting..." : "Connect Wallet"}
//               </motion.span>
//             )}
//           </AnimatePresence>
//         </motion.button>
//       </div>

//       <AnimatePresence>
//         {error && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute left-0 right-0 mt-2 px-2 py-2 bg-red-100 border border-red-400 text-red-700 rounded-md shadow-lg"
//           >
//             <div className="flex items-center">
//               <AlertCircle className="h-5 w-5 mr-2" />
//               <span className="text-sm">{error}</span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={dropdownVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
//             role="menu"
//             aria-orientation="vertical"
//             aria-labelledby="connect-wallet-button"
//           >
//             <div className="py-1" role="none">
//               <motion.a
//                 variants={itemVariants}
//                 href="#"
//                 className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 role="menuitem"
//               >
//                 <Coins
//                   className="mr-3 h-5 w-5 text-gray-400"
//                   aria-hidden="true"
//                 />
//                 CT Tokens
//               </motion.a>
//               <motion.a
//                 variants={itemVariants}
//                 href="#"
//                 className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 role="menuitem"
//               >
//                 <Package
//                   className="mr-3 h-5 w-5 text-gray-400"
//                   aria-hidden="true"
//                 />
//                 Products (Seller)
//               </motion.a>
//             </div>
//             <div className="py-1" role="none">
//               <motion.button
//                 variants={itemVariants}
//                 className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 role="menuitem"
//                 onClick={disconnectWallet}
//               >
//                 <LogOut
//                   className="mr-3 h-5 w-5 text-gray-400"
//                   aria-hidden="true"
//                 />
//                 Disconnect Wallet
//               </motion.button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
