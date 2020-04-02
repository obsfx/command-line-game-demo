const readline = require('readline');

const ascii_table = require('./ascii-table');
const state = require('./state');
const hud = require('./hud');
const map = require('./map');

const clear = _ => {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
}

const render = _ => {
    let output = '';

    for (let i = 0; i < state.screen.length; i++) {
        for (let j = 0; j < state.screen[0].length; j++) {
                if (state.screen[i][j] == ascii_table.empty) { 
                    output += ' '; 
                } else if (typeof state.screen[i][j] == 'object') {
                    output += state.screen[i][j].char;
                } else {
                    // console.log(state.screen[i][j])
                    output += ascii_table[state.screen[i][j]].char;
                }
        }
    
        output += "\n"
    }

    process.stdout.write(output);
}

// const putChar = (x, y, char) => {
//     // Up: \u001b[{n}A
//     // Down: \u001b[{n}B
//     // Right: \u001b[{n}C
//     // Left: \u001b[{n}D

//     let resetLeft = `\u001b[1000D`;
//     let resetUp = `\u001b[1000A`;

//     let right = `\u001b[${x}C`
//     let down = `\u001b[${y}B`;

//     process.stdout.write(resetLeft + resetUp + right + down + char + resetLeft + resetUp);
// }

const nextFrame = _ => {
    clear();
    map.prepareSwitches();
    map.prepare();
    hud.render();
    render();
}

module.exports = {
    clear,
    render,
    // putChar,
    nextFrame
}