const state = require('./state');
const ascii_table = require('./ascii-table');

class Entity {
    constructor(x, y, char, index) {
        this.x = x;
        this.y = y;
        this.char = char;
        this.index = index;
        this.prev = null;

        this.allowedFloors = [ 
            ascii_table.road, 
            ascii_table.roomfloor,   
        ]

        this.allowedFloorsMin = [ 663 ]
        this.allowedFloorsMax = [ 678 ]

        this.pushGapsToAvailableFloors();
        this.setxy(this.x, this.y);
    }

    setxy(x, y) {
        this.prev = state.objectLayer[y][x];
        state.objectLayer[y][x] = this.index;
        
        this.x = x;
        this.y = y;
    }

    moveLeft() {
        if (this.isLeftAvailable()) {
            state.objectLayer[this.y][this.x] = this.prev;
            this.setxy(this.x - 1, this.y);
        } 
    }

    moveRight() {
        if (this.isRightAvailable()) {
            state.objectLayer[this.y][this.x] = this.prev;
            this.setxy(this.x + 1, this.y);
        }
    }

    moveUp() {
        if (this.isTopAvailable()) {
            state.objectLayer[this.y][this.x] = this.prev;
            this.setxy(this.x, this.y - 1);
        } 
    }

    moveDown() {
        if (this.isBottomAvailable()) {
            state.objectLayer[this.y][this.x] = this.prev;
            this.setxy(this.x, this.y + 1);
        } 
    }

    isLeftAvailable() {
        if (this.x > 0) {
            if (this.allowedFloors.indexOf(state.blockLayer[this.y][this.x - 1]) > -1) {
                return true;
            }
        }

        return false;
    }

    isRightAvailable() {
        if (this.x < state.blockLayer[0].length - 1) {
            if (this.allowedFloors.indexOf(state.blockLayer[this.y][this.x + 1]) > -1) {
                return true;
            }
        }

        return false;
    }

    isTopAvailable() {
        if (this.y > 0) {
            if (this.allowedFloors.indexOf(state.blockLayer[this.y - 1][this.x]) > -1) {
                return true;
            }
        }

        return false;
    }

    isBottomAvailable() {
        if (this.y < state.blockLayer.length - 1) {
            if (this.allowedFloors.indexOf(state.blockLayer[this.y + 1][this.x]) > -1) {
                return true;
            }
        }

        return false;
    }

    pushGapsToAvailableFloors() {
        for (let i = 0; i < this.allowedFloorsMin.length; i++) {
            for (let j = this.allowedFloorsMin[i]; j <= this.allowedFloorsMax[i]; j++) {
                this.allowedFloors.push(j);
            }
        }
    }
}

module.exports = Entity;