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

            return true;
        }

        return false;
    }

    moveRight() {
        if (this.isRightAvailable()) {
            state.objectLayer[this.y][this.x] = this.prev;
            this.setxy(this.x + 1, this.y);

            return true;
        }

        return false;
    }

    moveUp() {
        if (this.isTopAvailable()) {
            state.objectLayer[this.y][this.x] = this.prev;
            this.setxy(this.x, this.y - 1);

            return true;
        }

        return false;
    }

    moveDown() {
        if (this.isBottomAvailable()) {
            state.objectLayer[this.y][this.x] = this.prev;
            this.setxy(this.x, this.y + 1);

            return true;
        }

        return false;
    }

    getLeft(fromObjectLayer = false) {
        if (this.x > 0) {
            return fromObjectLayer ? state.objectLayer[this.y][this.x - 1] : state.blockLayer[this.y][this.x - 1];
        }

        return false;
    }

    getRight(fromObjectLayer = false) {
        if (this.x < state.blockLayer[0].length - 1) {
            return fromObjectLayer ? state.objectLayer[this.y][this.x + 1] : state.blockLayer[this.y][this.x + 1];
        }

        return false;
    }

    getTop(fromObjectLayer = false) {
        if (this.y > 0) {
            return fromObjectLayer ? state.objectLayer[this.y - 1][this.x] : state.blockLayer[this.y - 1][this.x];
        }

        return false;
    }

    getBottom(fromObjectLayer = false) {
        if (this.y < state.blockLayer.length - 1) {
            return fromObjectLayer ? state.objectLayer[this.y + 1][this.x] : state.blockLayer[this.y + 1][this.x]
        }

        return false;
    }

    getTopLeft(fromObjectLayer = false) {
        if (this.x > 0 && this.y > 0) {
            return fromObjectLayer ? state.objectLayer[this.y - 1][this.x - 1] : state.blockLayer[this.y - 1][this.x - 1];
        }

        return false;
    }

    getTopRight(fromObjectLayer = false) {
        if (this.x < state.blockLayer[0].length - 1 && this.y > 0) {
            return fromObjectLayer ? state.objectLayer[this.y - 1][this.x + 1] : state.blockLayer[this.y - 1][this.x + 1];
        }

        return false;
    }

    getBottomLeft(fromObjectLayer = false) {
        if (this.x > 0 && this.y < state.blockLayer.length - 1) {
            return fromObjectLayer ? state.objectLayer[this.y + 1][this.x - 1] : state.blockLayer[this.y + 1][this.x - 1];
        }

        return false;
    }

    getBottomRight(fromObjectLayer = false) {
        if (this.x < state.blockLayer[0].length - 1 && this.y < state.blockLayer.length - 1) {
            return fromObjectLayer ? state.objectLayer[this.y + 1][this.x + 1] : state.blockLayer[this.y + 1][this.x + 1];
        }

        return false;
    }

    getAround() {
        let indexes = [
            this.getLeft(),
            this.getRight(),
            this.getTop(),
            this.getBottom(),
            this.getTopLeft(),
            this.getTopRight(),
            this.getBottomLeft(),
            this.getBottomRight()
        ];

        let pos = [
            { x: this.x - 1, y: this.y },
            { x: this.x + 1, y: this.y },
            { x: this.x, y: this.y - 1 },
            { x: this.x, y: this.y + 1 },
            { x: this.x - 1, y: this.y - 1},
            { x: this.x + 1, y: this.y - 1},
            { x: this.x - 1, y: this.y + 1},
            { x: this.x + 1, y: this.y + 1}
        ];

        return [ indexes, pos ];
    }

    isLeftAvailable(fromObjectLayer = false) {
        if (this.x > 0) {
            if (this.allowedFloors.indexOf(this.getLeft(fromObjectLayer)) > -1) {
                return true;
            }
        }

        return false;
    }

    isRightAvailable(fromObjectLayer = false) {
        if (this.x < state.blockLayer[0].length - 1) {
            if (this.allowedFloors.indexOf(this.getRight(fromObjectLayer)) > -1) {
                return true;
            }
        }

        return false;
    }

    isTopAvailable(fromObjectLayer = false) {
        if (this.y > 0) {
            if (this.allowedFloors.indexOf(this.getTop(fromObjectLayer)) > -1) {
                return true;
            }
        }

        return false;
    }

    isBottomAvailable(fromObjectLayer = false) {
        if (this.y < state.blockLayer.length - 1) {
            if (this.allowedFloors.indexOf(this.getBottom(fromObjectLayer)) > -1) {
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