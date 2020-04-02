const readline = require('readline');

const Player = require('./player');

const constant = require('./constants');
const state = require('./state');
const screen = require('./screen');
const map = require('./map');

map.setLevel('l01');
map.reset();

state.player = new Player(5, 4, constant.PLAYER_CHAR);

screen.nextFrame();

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.name == 'a') {
        state.player.move('left');
    } else if (key.name == 'd') {
        state.player.move('right');
    } else if (key.name == 'w') {
        state.player.move('up');
    } else if (key.name == 's') {
        state.player.move('down');
    }

    if  (state.player.isThereSwitch && key.name == 'e') {
        state.player.toggleSwitchMode();
    }

    if (key.sequence === '\u0003') {
        process.exit();
    }

    screen.nextFrame();

    // console.log(key)
});