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
exports.__esModule = true;
exports.main = void 0;
var read_file_1 = require("../modules/read_file");
var rockScore = 1;
var paperScore = 2;
var scissorsScore = 3;
var lost = 0;
var draw = 3;
var won = 6;
// A = Rock
// B = Paper
// C = Scissors
// X = Rock
// Y = Paper
// Z = Scissors
// Version B
// X = Lose
// Y = Draw
// Z = Win
// const main_a = async () => {
//     const file = await asyncReadFile('./src/day_2/input.txt');
//     // const file = await asyncReadFile('./src/day_2/test_input.txt');
//     let total = 0;
//     for (const line of file) {
//         const splitted = line.split(' ');
//         if (!splitted[0] || !splitted[1]) return;
//         const single = await score(splitted[0], splitted[1]);
//         total += single;
//     }
// };
var main_b = function () { return __awaiter(void 0, void 0, void 0, function () {
    var file, total, _i, file_1, line, splitted, single;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, read_file_1.asyncReadFile)('./src/day_2/input.txt')];
            case 1:
                file = _a.sent();
                total = 0;
                _i = 0, file_1 = file;
                _a.label = 2;
            case 2:
                if (!(_i < file_1.length)) return [3 /*break*/, 5];
                line = file_1[_i];
                splitted = line.split(' ');
                if (!splitted[0] || !splitted[1])
                    return [2 /*return*/];
                return [4 /*yield*/, score_b(splitted[0], splitted[1])];
            case 3:
                single = _a.sent();
                total += single;
                console.log(total);
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.main = main_b;
var score_b = function (l1, l2) { return __awaiter(void 0, void 0, void 0, function () {
    var converted_l1;
    return __generator(this, function (_a) {
        converted_l1 = convertToNumber(l1);
        // Lose
        if (l2 === 'X') {
            // If opponent chooses rock play scissors to lose
            if (converted_l1 === rockScore)
                return [2 /*return*/, scissorsScore + lost];
            return [2 /*return*/, converted_l1 - 1 + lost];
        }
        // Draw
        if (l2 === 'Y') {
            // Return same value as opponent + draw score
            return [2 /*return*/, converted_l1 + draw];
        }
        // Win
        if (l2 === 'Z') {
            if (converted_l1 === scissorsScore)
                return [2 /*return*/, rockScore + won];
            return [2 /*return*/, converted_l1 + 1 + won];
        }
        return [2 /*return*/];
    });
}); };
var score = function (l1, l2) { return __awaiter(void 0, void 0, void 0, function () {
    var converted_l1, converted_l2, score_1, score_2, score_3;
    return __generator(this, function (_a) {
        converted_l1 = convertToNumber(l1);
        converted_l2 = convertToNumber(l2);
        if (converted_l2 === converted_l1) {
            score_1 = draw + converted_l2;
            return [2 /*return*/, score_1];
        }
        if (converted_l2 > converted_l1) {
            // If player chooses scissors against rock other player wins so return score + lost
            if (converted_l2 - converted_l1 === 2)
                return [2 /*return*/, converted_l2 + lost];
            score_2 = converted_l2 + won;
            return [2 /*return*/, score_2];
        }
        if (converted_l2 < converted_l1) {
            // If player chooses rock against scissors player wins so return score + won
            if (converted_l1 - converted_l2 === 2)
                return [2 /*return*/, converted_l2 + won];
            score_3 = converted_l2 + lost;
            return [2 /*return*/, score_3];
        }
        return [2 /*return*/];
    });
}); };
var convertToNumber = function (input) {
    switch (input) {
        case 'A':
        case 'X':
            return rockScore;
        case 'B':
        case 'Y':
            return paperScore;
        case 'C':
        case 'Z':
            return scissorsScore;
        default:
            break;
    }
};
