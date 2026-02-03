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
class Solution {
    static invalidNums = [];
    /**
     * Checks if a string consists of a sequence of characters repeated exactly twice.
     * @param input - The string to check
     * @returns True if the string is two identical halves, false otherwise
     * @example
     * checkTwiceDuplicateSequence('22')     // true
     * checkTwiceDuplicateSequence('123123') // true
     * checkTwiceDuplicateSequence('1212')   // true
     * checkTwiceDuplicateSequence('1243')   // false
     * checkTwiceDuplicateSequence('111')    // false (odd length)
     */
    static isInvalid(input) {
        const length = input.length;
        if (length % 2 === 0) {
            const mid = Math.floor(length / 2);
            const half1 = input.substring(0, mid);
            const half2 = input.substring(mid);
            if (half1 === half2) {
                return true;
            }
        }
        return false;
    }
}
try {
    const data = fs.readFileSync('./day2/input.txt', 'utf8');
    const nums = data.split(',');
    for (const num of nums) {
        const [start, end] = num.split('-');
        for (let i = Number(start); i <= Number(end); i++) {
            if (Solution.isInvalid(String(i))) {
                Solution.invalidNums.push(i);
            }
        }
    }
    const result = Solution.invalidNums.reduce((acc, num) => acc + num, 0);
    console.log(result);
}
catch (error) {
    console.log(error);
}
