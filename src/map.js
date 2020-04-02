const kleur = require('kleur');

const levels = require('./levels');
const state = require('./state');
const utils = require('./utils');

const setLevel = levelid => {
    state.currentLevel = levels[levelid];
}

const reset = _ => {
    state.blockLayer = state.currentLevel.arr;
    state.objectLayer = utils.getEmpty2D(state.blockLayer.length, state.blockLayer[0].length, 0);
    state.stringLayer = utils.getEmpty2D(state.blockLayer.length, state.blockLayer[0].length, 0);
}

const prepare = _ => {
    state.screen = utils.mergeLayers(state.blockLayer, state.objectLayer);
    state.screen = utils.mergeLayers(state.screen, state.stringLayer);
}

const prepareSwitches = _ => {
    for (let i = 0; i < state.currentLevel.switches.length; i++) {
        let {
            x,
            y,
            value
        } = state.currentLevel.switches[i];

        state.stringLayer[y][x] = {
            char: kleur.bgMagenta().white(value.toString(16).toUpperCase())
        }
    }
}

module.exports = {
    setLevel,
    reset,
    prepare,
    prepareSwitches
}