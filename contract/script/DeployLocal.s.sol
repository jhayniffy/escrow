// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {EscrowAgent} from "../src/EscrowAgent.sol";

contract DeployLocal is Script {
    function run() external returns (EscrowAgent) {
        vm.startBroadcast();
        EscrowAgent escrow = new EscrowAgent();
        console.log("EscrowAgent deployed at:", address(escrow));
        vm.stopBroadcast();
        return escrow;
    }
}
