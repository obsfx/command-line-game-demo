// python3 img_to_levelarr.py ./level_imgs.json
// level_converter_tools node ./tile_replacer.js ./levels/01.json  

const levels = require('./levels');
const ascii_table = require('./ascii_table');

let currentlvl = levels.l02;

for (let i = 0; i < currentlvl.length; i++) {
    let output = '';
    for (let j = 0; j < currentlvl[0].length; j++) {
        if (currentlvl[i][j] == 0) {
            output += ' ';
        } else {
            output += ascii_table[currentlvl[i][j]];
        }
    }

    console.log(output);
}

// console.log('┌─────┐');
// console.log('│     │')
// console.log('│     │')
// console.log('└─────┘')

// console.log('╭─────╮');
// console.log('│     │')
// console.log('│     │')
// console.log('╰─────╯')

// console.log('┏━━━━━┓');
// console.log('┃     ┃')
// console.log('┃     ┃')
// console.log('┗━━━━━┛')

// console.log('╔═════╗');
// console.log('║     ║')
// console.log('║     ║')
// console.log('╚═════╝')