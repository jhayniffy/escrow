// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {EscrowAgent} from "../src/EscrowAgent.sol";

contract DeployEscrowAgent is Script {
    function run() external returns (EscrowAgent) {
        vm.startBroadcast();
        EscrowAgent escrow = new EscrowAgent();
        vm.stopBroadcast();
        return escrow;
    }
}
