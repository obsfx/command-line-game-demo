const constants = require('./constants');

// module.exports = {
//     '0-1-0-1': 3,   // WALLCORNERTL ┌
//     '1-0-0-1': 4,   // WALLCORNERTR ┐
//     '0-1-1-0': 5,   // WALLCORNERBL └
//     '1-0-1-0': 6,   // WALLCORNERBR ┘

//     '0-1-1-1': 7,   // WALLCORNERTRB ├
//     '1-0-1-1': 8,   // WALLCORNERTLB ┤

//     '1-1-0-1': 9,   // WALLCORNERBLR ┬
//     '1-1-1-0': 10,  // WALLCORNERTLR ┴

//     '1-1-1-1': 11,  // WALLCORNERTLRB ┼	

//     '1-1-0-0': 12,  // WALL │
//     '0-0-1-1': 13,  // WALL2 ─

//     '0-1-0-0': 14,  // WALLEND ╾
//     '1-0-0-0': 15,  // WALLEND2 ╼
//     '0-0-1-0': 16,  // WALLEND3 ╽
//     '0-0-0-1': 17,  // WALLEND4 ╿
// }

// module.exports = {
//     empty: 0,

//     3: {
//         char: '┌'
//     },
//     4: '┐',
//     5: '└',
//     6: '┘',

//     7: '├',
//     8: '┤',

//     9: '┬',
//     10: '┴',

//     11: '┼',

//     12: '│',
//     13: '─',

//     14: '╾',
//     15: '╼',
//     16: '╽',
//     17: '╿',
//     18: '█',

//     50: constants.PLAYER_CHAR //PLAYER_INDEX
// }

module.exports = {
    empty: 0,

    3: {
        char: '┌'
    },
    4: {
        char: '┐'
    },
    5: {
        char: '└'
    },
    6: {
        char: '┘'
    },

    7: {
        char: '├'
    },
    8: {
        char: '┤'
    },

    9: {
        char: '┬'
    },
    10: {
        char: '┴'
    },

    11: {
        char: '┼'
    },

    12: {
        char: '│'
    },
    13: {
        char: '─'
    },

    14: {
        char: '╾'
    },
    15: {
        char: '╼'
    },
    16: {
        char: '╽'
    },
    17: {
        char: '╿'
    },
    18: {
        char: '█'
    },

    50: {
        char: constants.PLAYER_CHAR
    } //PLAYER_INDEX
}