const ascii_table = require('./ascii-table');

const hud = require('./hud');
const constants = require('./constants');
const Entity = require('./entity');

class Player extends Entity {
    constructor(x, y, char) {
        super(x, y, char, constants.PLAYER_INDEX);

        this.switchMode = false;
        this.isThereSwitch = false;

        this.texts = {
            SWITCHTOGGLE: 'press <e> to adjust the switch',
            SWITCHCLOSE: 'press <e> to close the switch'
        }
    }

    move(direction) {
        if (!this.switchMode) {
            if (direction == 'left') {
                this.moveLeft()
            } else if (direction == 'right') {
                this.moveRight()
            } else if (direction == 'up') {
                this.moveUp()
            } else if (direction == 'down') {
                this.moveDown()
            }
        }

        this.lookForSwitches();
    }

    lookForSwitches() {
        if (!this.switchMode) {
            let around = this.getAround();

            if (around.indexOf(ascii_table.switch) > -1) {
                this.isThereSwitch = true;
                hud.control.pushText(this.texts.SWITCHTOGGLE);
            } else {
                this.isThereSwitch = true;
                hud.control.delText(this.texts.SWITCHTOGGLE);
            }
        }
    }

    toggleSwitchMode() {
        this.switchMode = !this.switchMode;

        if (this.switchMode) {
            hud.control.setSwitch(true, 12, 1);
            hud.control.delText(this.texts.SWITCHTOGGLE);
            hud.control.pushText(this.texts.SWITCHCLOSE);
        } else {
            hud.control.setSwitch(false, 12, 1);
            hud.control.delText(this.texts.SWITCHCLOSE);
            hud.control.pushText(this.texts.SWITCHTOGGLE);
        }
    }
}

module.exports = Player