const readline = require('readline');

const Player = require('./player');

const constant = require('./constants');
const state = require('./state');
const screen = require('./screen');
const map = require('./map');

map.setLevel('l01');
map.reset();

const p = new Player(5, 4, constant.PLAYER_CHAR);

screen.nextFrame();

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.name == 'a') {
        p.move('left');
    } else if (key.name == 'd') {
        p.move('right');
    } else if (key.name == 'w') {
        p.move('up');
    } else if (key.name == 's') {
        p.move('down');
    }

    if (key.sequence === '\u0003') {
        process.exit();
    }

    screen.nextFrame();

    // console.log(key)
});