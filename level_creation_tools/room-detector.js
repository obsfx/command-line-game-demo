const tile_rules = require('./tile-replacement-rules');

const FLOOR = 1;
const ROOM_FLOOR = 41;
const DOORS = [ 30, 31 ];
const ROOM_ENTERANCE = 40

const detect = arr => {
    let dataarr = JSON.parse(JSON.stringify(arr))

    let room_data = []

    for (let i = 0; i < dataarr.length; i++) {
        for (let j = 0; j < dataarr[0].length; j++) {
            let tile = dataarr[i][j];

            if (DOORS.indexOf(tile) > -1) {
                let founded = find(dataarr, j, i, [ ROOM_ENTERANCE ])[0];

                dataarr[founded.y][founded.x] = FLOOR;

                let room_tiles = [ founded ];

                let walked = walk(founded, dataarr);

                room_tiles = [ ...room_tiles, ...walked ];

                // console.log(room_tiles);

                room_data.push({
                    pos: { x: j, y: i },
                    tiles: room_tiles
                });

                // console.log(dataarr);
            }
        }
    }

    return [ dataarr, room_data ];
}

const find = (dataarr, x, y, indexes) => {
    let founded = [];
    
    let left =  dataarr[y][x - 1];
    let right = dataarr[y][x + 1];
    let up = dataarr[y - 1][x];
    let down = dataarr[y + 1][x];

    if (indexes.indexOf(left) > -1) {
        founded.push({ x: x - 1, y: y });
    }

    if (indexes.indexOf(right) > -1) {
        founded.push({ x: x + 1, y: y });
    }

    if (indexes.indexOf(up) > -1) {
        founded.push({ x: x, y: y - 1});
    }

    if (indexes.indexOf(down) > -1) {
        founded.push({ x: x, y: y + 1});
    }

    return founded;
}


const walk = (pos, arr) => {
    let room_tiles = []

    let founded = find(arr, pos.x, pos.y, [ FLOOR ]);
    room_tiles = [ ...founded ];

    for (let i = 0; i < founded.length; i++) {
        arr[founded[i].y][founded[i].x] = ROOM_FLOOR;

        let walk_deep = walk(founded[i], arr);
        room_tiles = [ ...room_tiles, ...walk_deep ];
    }

    return room_tiles;
}

module.exports = detect;