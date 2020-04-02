const ascii_table = require('./ascii-table');

const hud = require('./hud');
const constants = require('./constants');
const switches = require('./switch');

const Entity = require('./entity');

class Player extends Entity {
    constructor(x, y, char) {
        super(x, y, char, constants.PLAYER_INDEX);

        this.switchMode = false;
        this.isThereSwitch = false;
        this.posOfSwitch = { x: 0, y: 0 };

        this.texts = {
            SWITCHTOGGLE: 'press <e> to adjust the switch',
            SWITCHCLOSE: 'press <e> to close the switch   ',
            SWITCHINFO: 'use <a> or <d> to adjust the     value of switch'
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
            let [ indexes, pos ] = this.getAround();

            let indexOfSwitch = indexes.indexOf(ascii_table.switch);

            if (indexOfSwitch> -1) {
                this.isThereSwitch = true;
                
                this.posOfSwitch.x = pos[indexOfSwitch].x;
                this.posOfSwitch.y = pos[indexOfSwitch].y;

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

            let data = switches.find(this.posOfSwitch);

            if (data) {
                hud.control.setSwitch(true, data.value, data.id);
                hud.control.delText(this.texts.SWITCHTOGGLE);
                hud.control.pushText(this.texts.SWITCHCLOSE);
                hud.control.pushText(this.texts.SWITCHINFO);
            }
            
        } else {
            hud.control.setSwitch(false, 0, 0);
            hud.control.delText(this.texts.SWITCHCLOSE);
            hud.control.delText(this.texts.SWITCHINFO);
            hud.control.pushText(this.texts.SWITCHTOGGLE);
        }
    }

    increaseSwitch() {
        switches.increase(this.posOfSwitch);
    }

    decreaseSwitch() {
        switches.decrease(this.posOfSwitch);
    }
}

module.exports = Player