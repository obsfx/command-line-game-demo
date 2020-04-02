const ascii_table = require('./ascii-table');

const hud = require('./hud');
const constants = require('./constants');
const Entity = require('./entity');

class Player extends Entity {
    constructor(x, y, char) {
        super(x, y, char, constants.PLAYER_INDEX);

        this.switchMode = false;

        this.texts = {
            SWITCHTOGGLE: 'press <e> to adjust the switch'
        }
    }

    move(direction) {

        if (direction == 'left') {
            this.moveLeft()
        } else if (direction == 'right') {
            this.moveRight()
        } else if (direction == 'up') {
            this.moveUp()
        } else if (direction == 'down') {
            this.moveDown()
        }

        this.lookForSwitches();
    }

    lookForSwitches() {
        let around = this.getAround();

        if (around.indexOf(ascii_table.switch) > -1) {
            hud.control.pushText(this.texts.SWITCHTOGGLE);
        } else {
            hud.control.delText(this.texts.SWITCHTOGGLE);
        }
    }
}

module.exports = Player