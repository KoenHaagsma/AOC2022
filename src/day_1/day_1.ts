import { asyncReadFile } from '../modules/read_file';

const main = async () => {
    const file = await asyncReadFile('./src/day_1/input.txt');
    const calories: Number[] = [];
    let largest = 0;
    let value = 0;

    file?.forEach((line) => {
        if (line === '') {
            value = 0;
            return;
        }

        const number = Number(line);
        value += number;
        if (value >= largest) largest = value;
        calories.push(value);
    });

    const lastThree: Number[] = calories
        .sort((a, b) => {
            return Number(a) - Number(b);
        })
        .slice(-3);

    const lastThreeSum = lastThree.reduce((a, b) => {
        return Number(a) + Number(b);
    });

    console.log(lastThreeSum);
};

export { main };
