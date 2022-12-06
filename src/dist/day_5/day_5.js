"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.main = void 0;
var read_file_1 = require("../modules/read_file");
var stack_1 = ['F', 'C', 'P', 'G', 'Q', 'R'];
var stack_2 = ['W', 'T', 'C', 'P'];
var stack_3 = ['B', 'H', 'P', 'M', 'C'];
var stack_4 = ['L', 'T', 'Q', 'S', 'M', 'P', 'R'];
var stack_5 = ['P', 'H', 'J', 'Z', 'V', 'G', 'N'];
var stack_6 = ['D', 'P', 'J'];
var stack_7 = ['L', 'G', 'P', 'Z', 'F', 'J', 'T', 'R'];
var stack_8 = ['N', 'L', 'H', 'C', 'F', 'P', 'T', 'J'];
var stack_9 = ['G', 'V', 'Z', 'Q', 'H', 'T', 'C', 'W'];
var main_a = function () { return __awaiter(void 0, void 0, void 0, function () {
    var file, fullStack;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, read_file_1.asyncReadFile)('./src/day_5/input.txt')];
            case 1:
                file = _a.sent();
                fullStack = [stack_1, stack_2, stack_3, stack_4, stack_5, stack_6, stack_7, stack_8, stack_9];
                file.forEach(function (sentence) {
                    // Remove text from the sentence and replace with numbers array
                    var numbersOnly = sentence.replace(/[^0-9]/g, '');
                    var numbers = numbersOnly.split('').map(function (number) {
                        return parseInt(number);
                    });
                    if (numbers === undefined || numbers.length === 0)
                        return;
                    if (numbers.length === 4) {
                        var fixed = parseInt(String(numbers[0] + String(numbers[1])));
                        numbers = [fixed, numbers[2], numbers[3]];
                    }
                    var move = numbers[0];
                    var from = numbers[1] - 1;
                    var to = numbers[2] - 1;
                    var movedLetters = fullStack[from].splice(fullStack[from].length - move, move).reverse();
                    fullStack[to] = __spreadArray(__spreadArray([], fullStack[to], true), movedLetters, true);
                    console.table(fullStack);
                });
                return [2 /*return*/];
        }
    });
}); };
var main_b = function () { return __awaiter(void 0, void 0, void 0, function () {
    var file, fullStack;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, read_file_1.asyncReadFile)('./src/day_5/input.txt')];
            case 1:
                file = _a.sent();
                // const file = await asyncReadFile('./src/day_5/test_input.txt');
                console.log(file);
                fullStack = [stack_1, stack_2, stack_3, stack_4, stack_5, stack_6, stack_7, stack_8, stack_9];
                file.forEach(function (sentence) {
                    // Remove text from the sentence and replace with numbers array
                    var numbersOnly = sentence.replace(/[^0-9]/g, '');
                    var numbers = numbersOnly.split('').map(function (number) {
                        return parseInt(number);
                    });
                    if (numbers === undefined || numbers.length === 0)
                        return;
                    if (numbers.length === 4) {
                        var fixed = parseInt(String(numbers[0] + String(numbers[1])));
                        numbers = [fixed, numbers[2], numbers[3]];
                    }
                    var move = numbers[0];
                    var from = numbers[1] - 1;
                    var to = numbers[2] - 1;
                    var movedLetters = fullStack[from].splice(fullStack[from].length - move, move).reverse();
                    fullStack[to] = __spreadArray(__spreadArray([], fullStack[to], true), movedLetters, true);
                    // console.table(fullStack);
                });
                return [2 /*return*/];
        }
    });
}); };
exports.main = main_b;
