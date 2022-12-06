import { asyncReadFile } from '../modules/read_file';

const main_a = async () => {
    const file = await asyncReadFile('src/day_6/input.txt');

    const characters = file[0].split('');
    const lastFourCharacters: string[] = [];

    let total = 0;
    for (const character of characters) {
        if (lastFourCharacters.length === 4) {
            const uniqueCharacters = new Set(lastFourCharacters);
            if (uniqueCharacters.size === 4) {
                break;
            }

            lastFourCharacters.shift();
        }

        lastFourCharacters.push(character);
        total++;
    }

    console.log(total);
};

const main_b = async () => {
    const file = await asyncReadFile('src/day_6/input.txt');

    const characters = file[0].split('');
    const lastFourCharacters: string[] = [];

    let total = 0;
    for (const character of characters) {
        if (lastFourCharacters.length === 14) {
            const uniqueCharacters = new Set(lastFourCharacters);
            if (uniqueCharacters.size === 14) {
                break;
            }

            lastFourCharacters.shift();
        }

        lastFourCharacters.push(character);
        total++;
    }

    console.log(total);
};

export { main_b as main };
