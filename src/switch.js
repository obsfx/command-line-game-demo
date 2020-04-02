const state = require('./state');
const hud = require('./hud');

const find = pos => {
    let data = null;
    
    for (let i = 0; i < state.currentLevel.switches.length; i++) {
        let s = state.currentLevel.switches[i];

        if (s.x == pos.x && s.y == pos.y) {
            data = {
                value: s.value,
                id: s.id
            }
        }
    }

    return data;
}

const set = (pos, change, field) => {
    console.log(pos, change, field);
    for (let i = 0; i < state.currentLevel.switches.length; i++) {
        let s = state.currentLevel.switches[i];

        if (s.x == pos.x && s.y == pos.y) {
            if ((s.value > 0 && change < 0) || (s.value < 15 && change > 0)) {
                state.currentLevel.switches[i][field] += change;

                hud.control.setSwitch(true, state.currentLevel.switches[i][field], s.id);
            }
        }
    }
}

const increase = pos => {
    set(pos, 1, 'value');
}

const decrease = pos => {
    set(pos, -1, 'value');
}

module.exports =  {
    find,
    increase,
    decrease
}