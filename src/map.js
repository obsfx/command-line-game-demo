const ascii_table = require('./ascii-table');

const levels = require('./levels');
const state = require('./state');
const utils = require('./utils');

const setLevel = level => {
    state.currentLevel = level;
}

const reset = _ => {
    state.blockLayer = levels[state.currentLevel].arr;
    state.objectLayer = utils.getEmpty2D(state.blockLayer.length, state.blockLayer[0].length, 0);
}

const prepare = _ => {
    state.screen = utils.mergeLayers(state.blockLayer, state.objectLayer);
}

module.exports = {
    setLevel,
    reset,
    prepare
}