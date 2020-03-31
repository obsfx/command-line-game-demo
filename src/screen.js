const readline = require('readline');

const ascii_table = require('./ascii-table');
const state = require('./state');
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
                } else {
                    output += ascii_table[state.screen[i][j]].char;
                }
        }
    
        output += "\n"
    }

    process.stdout.write(output);
}

const nextFrame = _ => {
    clear();
    map.prepare();
    render()
}

module.exports = {
    clear,
    render,
    nextFrame
}