"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("node:fs"));
try {
    const data = fs.readFileSync('./day3/input.txt', 'utf8');
    const banks = data.split(`\n`);
    let outputArr = [];
    for (const bank of banks) {
        let largest = 0;
        let largestIndex = 0;
        let secondLargest = 0;
        for (let i = 0; i < bank.length - 1; i++) {
            if (Number(bank[i]) > largest) {
                largest = Number(bank[i]);
                largestIndex = i;
            }
        }
        for (let j = largestIndex + 1; j <= bank.length; j++) {
            if (Number(bank[j]) > secondLargest) {
                secondLargest = Number(bank[j]);
            }
        }
        outputArr.push(Number(String(largest) + String(secondLargest)));
    }
    console.log(outputArr);
    const totalOutput = outputArr.reduce((acc, num) => acc + num, 0);
    console.log(totalOutput);
}
catch (error) {
    console.log(error);
}
