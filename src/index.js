const readline = require('readline');

const Player = require('./player');
const constant = require('./constants');
const state = require('./state');
const screen = require('./screen');

state.currentLevel = 'l01';
screen.reset();

const p = new Player(3, 3, constant.PLAYER_CHAR);

screen.nextFrame();

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.name == 'a') {
        p.moveLeft();
    } else if (key.name == 'd') {
        p.moveRight();
    } else if (key.name == 'w') {
        p.moveUp();
    } else if (key.name == 's') {
        p.moveDown();
    }

    if (key.sequence === '\u0003') {
        process.exit();
    }

    screen.nextFrame();

    // console.log(key)
});