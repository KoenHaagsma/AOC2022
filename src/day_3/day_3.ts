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

        // const common = findCommon({
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

type FindCommonProps = {
    a: string[];
    b: string[];
    c: string[];
    n1: number;
    n2: number;
    n3: number;
};

const findCommon = ({ a, b, c, n1, n2, n3 }: FindCommonProps) => {
    let set1 = new Set();
    let set2 = new Set();
    let set3 = new Set();
    for (let i = 0; i < n1; i++) {
        set1.add(a[i]);
    }
    for (let i = 0; i < n2; i++) {
        set2.add(b[i]);
    }
    for (let i = 0; i < n3; i++) {
        if (set1.has(c[i]) === true && set2.has(c[i]) === true) {
            if (set3.has(c[i]) === false) return c[i];
            set3.add(c[i]);
        }
    }
};

export { main_b as main };
