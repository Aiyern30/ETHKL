"use client";

import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface WalletDropdownProps {
  walletAddress: string;
  onDisconnect: () => void;
}

export default function WalletDropdown({
  walletAddress,
  onDisconnect,
}: WalletDropdownProps) {
  const menuItems = [
    { label: "Home", onClick: () => {} },
    { label: "Profile", onClick: () => {} },
    { label: "Settings", onClick: () => {} },
    {
      label: "Disconnect Wallet",
      onClick: onDisconnect,
      className: "text-red-600",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {walletAddress} <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <DropdownMenuItem onClick={item.onClick} className={item.className}>
              {item.label}
            </DropdownMenuItem>
          </motion.div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
