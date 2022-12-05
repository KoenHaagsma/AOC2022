import { asyncReadFile } from '../modules/read_file';

const stack_1 = ['F', 'C', 'P', 'G', 'Q', 'R'];
const stack_2 = ['W', 'T', 'C', 'P'];
const stack_3 = ['B', 'H', 'P', 'M', 'C'];
const stack_4 = ['L', 'T', 'Q', 'S', 'M', 'P', 'R'];
const stack_5 = ['P', 'H', 'J', 'Z', 'V', 'G', 'N'];
const stack_6 = ['D', 'P', 'J'];
const stack_7 = ['L', 'G', 'P', 'Z', 'F', 'J', 'T', 'R'];
const stack_8 = ['N', 'L', 'H', 'C', 'F', 'P', 'T', 'J'];
const stack_9 = ['G', 'V', 'Z', 'Q', 'H', 'T', 'C', 'W'];

const main_a = async () => {
    const file = await asyncReadFile('./src/day_5/input.txt');
    // const file = await asyncReadFile('./src/day_5/test_input.txt');
    const fullStack = [stack_1, stack_2, stack_3, stack_4, stack_5, stack_6, stack_7, stack_8, stack_9];

    file.forEach((sentence) => {
        // Remove text from the sentence and replace with numbers array
        const numbersOnly = sentence.replace(/[^0-9]/g, '');
        let numbers = numbersOnly.split('').map((number) => {
            return parseInt(number);
        });
        if (numbers === undefined || numbers.length === 0) return;

        if (numbers.length === 4) {
            const fixed = parseInt(String(numbers[0] + String(numbers[1])));
            numbers = [fixed, numbers[2], numbers[3]];
        }

        const move = numbers[0];
        const from = numbers[1] - 1;
        const to = numbers[2] - 1;

        const movedLetters = fullStack[from].splice(fullStack[from].length - move, move).reverse();
        fullStack[to] = [...fullStack[to], ...movedLetters];

        console.table(fullStack);
    });
};

const main_b = async () => {
    const file = await asyncReadFile('./src/day_5/input.txt');
    // const file = await asyncReadFile('./src/day_5/test_input.txt');
    const fullStack = [stack_1, stack_2, stack_3, stack_4, stack_5, stack_6, stack_7, stack_8, stack_9];

    file.forEach((sentence) => {
        // Remove text from the sentence and replace with numbers array
        const numbersOnly = sentence.replace(/[^0-9]/g, '');
        let numbers = numbersOnly.split('').map((number) => {
            return parseInt(number);
        });
        if (numbers === undefined || numbers.length === 0) return;

        if (numbers.length === 4) {
            const fixed = parseInt(String(numbers[0] + String(numbers[1])));
            numbers = [fixed, numbers[2], numbers[3]];
        }

        const move = numbers[0];
        const from = numbers[1] - 1;
        const to = numbers[2] - 1;

        const movedLetters = fullStack[from].splice(fullStack[from].length - move, move).reverse();
        fullStack[to] = [...fullStack[to], ...movedLetters];

        console.table(fullStack);
    });
};

export { main_b as main };
