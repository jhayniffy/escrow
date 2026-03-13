"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { contractAddress, contractABI } from "@/lib/contract";
import { useState } from "react";
import { parseEther, formatEther } from "viem";

const STATUS_LABELS = ["Pending", "Completed", "Refunded", "Disputed"];

export default function Home() {
  const { address, isConnected } = useAccount();
  const [sellerAddress, setSellerAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [escrowId, setEscrowId] = useState("");

  const { data: escrowCount } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "escrowCount",
  });

  const { data: escrowData } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getEscrow",
    args: escrowId ? [BigInt(escrowId)] : undefined,
  });

  const { data: agent } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "agent",
  });

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming } = useWaitForTransactionReceipt({ hash });

  const handleCreateEscrow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sellerAddress || !amount) return;
    writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: "createEscrow",
      args: [sellerAddress as `0x${string}`],
      value: parseEther(amount),
    });
  };

  const handleCompleteEscrow = () => {
    if (!escrowId) return;
    writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: "completeEscrow",
      args: [BigInt(escrowId)],
    });
  };

  const handleRefundEscrow = () => {
    if (!escrowId) return;
    writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: "refundEscrow",
      args: [BigInt(escrowId)],
    });
  };

  const handleDisputeEscrow = () => {
    if (!escrowId) return;
    writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: "disputeEscrow",
      args: [BigInt(escrowId)],
    });
  };

  const isAgent = address && agent && address.toLowerCase() === agent.toLowerCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Escrow DApp
            </h1>
            <ConnectButton showBalance={false} />
          </div>

          {isConnected ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
                <p className="text-sm opacity-90 mb-2">Total Escrows</p>
                <p className="text-4xl font-bold">{escrowCount?.toString() || "0"}</p>
                {isAgent && <p className="text-sm mt-2">You are the agent</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Create Escrow
                  </h2>
                  <form onSubmit={handleCreateEscrow} className="space-y-3">
                    <input
                      type="text"
                      value={sellerAddress}
                      onChange={(e) => setSellerAddress(e.target.value)}
                      placeholder="Seller address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Amount (ETH)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button
                      type="submit"
                      disabled={isPending || isConfirming}
                      className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition"
                    >
                      {isPending || isConfirming ? "Processing..." : "Create Escrow"}
                    </button>
                  </form>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    View Escrow
                  </h2>
                  <input
                    type="text"
                    value={escrowId}
                    onChange={(e) => setEscrowId(e.target.value)}
                    placeholder="Escrow ID"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  {escrowData && (
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2 text-sm">
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Buyer:</span> {escrowData.buyer}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Seller:</span> {escrowData.seller}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Amount:</span> {formatEther(escrowData.amount)} ETH
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Status:</span> {STATUS_LABELS[escrowData.status]}
                      </p>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-2">
                    {isAgent && (
                      <>
                        <button
                          onClick={handleCompleteEscrow}
                          disabled={isPending || isConfirming || !escrowId}
                          className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition text-sm"
                        >
                          Complete
                        </button>
                        <button
                          onClick={handleRefundEscrow}
                          disabled={isPending || isConfirming || !escrowId}
                          className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition text-sm"
                        >
                          Refund
                        </button>
                      </>
                    )}
                    <button
                      onClick={handleDisputeEscrow}
                      disabled={isPending || isConfirming || !escrowId}
                      className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition text-sm col-span-2"
                    >
                      Dispute
                    </button>
                  </div>
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
