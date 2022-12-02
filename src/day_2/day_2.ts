import { asyncReadFile } from '../modules/read_file';

const rockScore = 1;
const paperScore = 2;
const scissorsScore = 3;

const lost = 0;
const draw = 3;
const won = 6;

// A = Rock
// B = Paper
// C = Scissors

// X = Rock
// Y = Paper
// Z = Scissors

// Version B ------------
// X = Lose
// Y = Draw
// Z = Win

const main_a = async () => {
    const file = await asyncReadFile('./src/day_2/input.txt');
    // const file = await asyncReadFile('./src/day_2/test_input.txt');

    let total = 0;
    for (const line of file) {
        const splitted = line.split(' ');
        if (!splitted[0] || !splitted[1]) return;
        const single = await score(splitted[0], splitted[1]);
        total += single;
    }
};

const main_b = async () => {
    const file = await asyncReadFile('./src/day_2/input.txt');
    // const file = await asyncReadFile('./src/day_2/test_input.txt');

    let total = 0;
    for (const line of file) {
        const splitted = line.split(' ');
        if (!splitted[0] || !splitted[1]) return;
        const single = await score_b(splitted[0], splitted[1]);
        total += single;
        console.log(total);
    }
};

const score_b = async (l1: string, l2: string) => {
    const converted_l1 = convertToNumber(l1);

    // Lose
    if (l2 === 'X') {
        // If opponent chooses rock play scissors to lose
        if (converted_l1 === rockScore) return scissorsScore + lost;
        return converted_l1 - 1 + lost;
    }

    // Draw
    if (l2 === 'Y') {
        // Return same value as opponent + draw score
        return converted_l1 + draw;
    }

    // Win
    if (l2 === 'Z') {
        if (converted_l1 === scissorsScore) return rockScore + won;
        return converted_l1 + 1 + won;
    }
};

const score = async (l1: string, l2: string) => {
    const converted_l1 = convertToNumber(l1);
    const converted_l2 = convertToNumber(l2);

    if (converted_l2 === converted_l1) {
        // Equal score is always the same
        const score = draw + converted_l2;
        return score;
    }

    if (converted_l2 > converted_l1) {
        // If player chooses scissors against rock other player wins so return score + lost
        if (converted_l2 - converted_l1 === 2) return converted_l2 + lost;
        const score = converted_l2 + won;
        return score;
    }

    if (converted_l2 < converted_l1) {
        // If player chooses rock against scissors player wins so return score + won
        if (converted_l1 - converted_l2 === 2) return converted_l2 + won;
        const score = converted_l2 + lost;
        return score;
    }
};

const convertToNumber = (input: string) => {
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

export { main_b as main };
