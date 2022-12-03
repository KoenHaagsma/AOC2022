const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

import { asyncReadFile } from '../modules/read_file';

const main_a = async () => {
    // const file = await asyncReadFile('./src/day_3/test_input.txt');
    const file = await asyncReadFile('./src/day_3/input.txt');
    let total = 0;

    for (const line of file) {
        const lineLength = line.length;
        if (lineLength === 0) return;
        const stringArray = Array.from(line);

        const a = stringArray.splice(lineLength / 2);
        const b = stringArray;

        const same = a.filter((element) => b.includes(element));

        /^[A-Z]*$/.test(same[0])
            ? (total += upperCase.findIndex((x) => x === same[0]) + 26 + 1)
            : (total += lowerCase.findIndex((x) => x === same[0]) + 1);
    }
};

const main_b = async () => {
    const file = await asyncReadFile('./src/day_3/input.txt');
    let total = 0;
    for (let i = 0; i < file.length; i += 3) {
        if (file[i] === undefined || file[i + 1] === undefined || file[i + 2] === undefined) return;
        const array = [Array.from(file[i]), Array.from(file[i + 1]), Array.from(file[i + 2])];
        const data = array.reduce((a, b) => a.filter((c) => b.includes(c)));
        //     a: Array.from(file[i]),
        //     b: Array.from(file[i + 1]),
        //     c: Array.from(file[i + 2]),
        //     n1: Array.from(file[i]).length,
        //     n2: Array.from(file[i + 1]).length,
        //     n3: Array.from(file[i + 2]).length,
        // });

        /^[A-Z]*$/.test(data[0])
            ? (total += upperCase.findIndex((x) => x === data[0]) + 26 + 1)
            : (total += lowerCase.findIndex((x) => x === data[0]) + 1);

        console.log(total);
    }
};

export { main_b as main };
