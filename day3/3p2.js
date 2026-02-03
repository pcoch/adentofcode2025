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
    const data = fs.readFileSync("./day3/input.txt", "utf8");
    const banks = data.split(`\n`);
    const result = [];
    /**
     * Finds the largest 12 numbers in sequence within a string
     * @param bank - string of numbers to traverse (e.g '438090230222423321')
     * @returns string of numbers representing the largest overall number
     */
    function findLargestSequence(bank) {
        let result = "";
        let largest = 0;
        let currentIndex = 0;
        while (result.length < 12) {
            const startFrom = result.length === 0 ? currentIndex : currentIndex + 1;
            for (let i = startFrom; i < bank.length - 11 + result.length; i++) {
                if (Number(bank[i]) > largest) {
                    largest = Number(bank[i]);
                    currentIndex = i;
                }
            }
            result += largest;
            largest = 0;
        }
        return result;
    }
    //loop thru each bank and find largest sequence for each bank
    for (const bank of banks) {
        result.push(Number(findLargestSequence(bank)));
    }
    const totalOutput = result.reduce((acc, num) => acc + num, 0);
    console.log(totalOutput);
}
catch (error) {
    console.log(error);
}
