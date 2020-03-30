const readline = require('readline');

const ascii_table = require('./ascii-table');
const levels = require('./levels');
const state = require('./state');
const utils = require('./utils');

const clear = _ => {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
}

const reset = _ => {
    state.blockLayer = levels[state.currentLevel];
    state.objectLayer = utils.getEmpty2D(state.blockLayer.length, state.blockLayer[0].length, 0);
}

const prepare = _ => {
    state.screen = utils.mergeLayers(state.blockLayer, state.objectLayer);
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
    prepare();
    render()
}

module.exports = {
    clear,
    reset,
    prepare,
    render,
    nextFrame
}