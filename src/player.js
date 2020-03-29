const constants = require('./constants');
const Entity = require('./entity');

class Player extends Entity {
    constructor(x, y, char) {
        super(x, y, char, constants.PLAYER_INDEX);
    }
}

module.exports = Player