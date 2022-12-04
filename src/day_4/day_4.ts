import { asyncReadFile } from '../modules/read_file';

const main_a = async () => {
    // const file = await asyncReadFile('./src/day_4/test_input.txt');
    const file = await asyncReadFile('./src/day_4/input.txt');

    let total = 0;
    file.forEach((segment) => {
        const section = segment.split(',');
        if (section === undefined || section[section.length - 1] === '') return;

        const insideSectionA = section[0].split('-');
        const insideSectionB = section[1].split('-');

        const numbersA = insideSectionA.map((number) => parseInt(number));
        const numbersB = insideSectionB.map((number) => parseInt(number));

        if (
            (numbersA[0] >= numbersB[0] && numbersA[1] <= numbersB[1]) ||
            (numbersB[0] >= numbersA[0] && numbersB[1] <= numbersA[1])
        )
            total++;

        console.log(total);
    });
};

const main_b = async () => {
    // const file = await asyncReadFile('./src/day_4/test_input.txt');
    const file = await asyncReadFile('./src/day_4/input.txt');

    let total = 0;
    file.forEach((segment) => {
        const section = segment.split(',');
        if (section === undefined || section[section.length - 1] === '') return;

        const insideSectionA = section[0].split('-');
        const insideSectionB = section[1].split('-');

        const numbersA = insideSectionA.map((number) => parseInt(number));
        const numbersB = insideSectionB.map((number) => parseInt(number));

        // console.log(numbersA, numbersB);

        if (!(numbersA[0] > numbersB[1] || numbersA[1] < numbersB[0])) total++;

        console.log(total);
    });
};

export { main_b as main };
