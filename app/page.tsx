"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { contractAddress, contractABI } from "@/lib/contract";
import { useState } from "react";

export default function Home() {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState("");

  const { data: counter } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "x",
  });

  const { writeContract, isPending } = useWriteContract();

  const handleIncrement = () => {
    if (!amount) return;
    onclick = () =>
      writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "incBy",
        args: [BigInt(amount)],
      });
  };

  const handleDecrement = () => {
    if (!amount) return;
    onclick = () =>
      writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "decrease",
        args: [BigInt(amount)],
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Escrow DApp
            </h1>
            <ConnectButton />
          </div>

          {isConnected ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
                <p className="text-sm opacity-90 mb-2">Current Value</p>
                <p className="text-4xl font-bold">
                  {counter?.toString() || "0"}
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleIncrement()}
                    disabled={isPending || !amount}
                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition"
                  >
                    {isPending ? "Processing..." : "Increment"}
                  </button>
                  <button
                    onClick={() => handleDecrement()}
                    disabled={isPending || !amount}
                    className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition"
                  >
                    {isPending ? "Processing..." : "Decrement"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Connect your wallet to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
