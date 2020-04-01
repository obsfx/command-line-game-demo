const kleur = require('kleur');
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
    road: 1,
    roomfloor: 41,

    1: {
        char: kleur.gray('.')
    },

    // -------------------------------
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


    30: {
        char: kleur.grey('━')
    }, //DOOR

    31: {
        char: kleur.grey('┃')
    }, //DOOR

    41: {
        char: ' '
    },

    42: {
        char: kleur.grey('*')
    }, //old -> DOOR_ENTRANCE new -> ROOM_FLOOR

    50: {
        char: kleur.yellow(constants.PLAYER_CHAR)
    }, //PLAYER_INDEX


    // -------------------------------
    663: {
        char: kleur.magenta('╔')
    },
    664: {
        char: kleur.magenta('╗')
    },
    665: {
        char: kleur.magenta('╚')
    },
    666: {
        char: kleur.magenta('╝')
    },

    667: {
        char: kleur.magenta('╠')
    },
    668: {
        char: kleur.magenta('╣')
    },

    669: {
        char: kleur.magenta('╦')
    },
    670: {
        char: kleur.magenta('╩')
    },

    671: {
        char: kleur.magenta('╬')
    },

    672: {
        char: kleur.magenta('║')
    },
    673: {
        char: kleur.magenta('═')
    },

    674: {
        char: kleur.magenta('┈')
    },
    675: {
        char: kleur.magenta('┈')
    },
    676: {
        char: kleur.magenta('┊')
    },
    677: {
        char: kleur.magenta('┊')
    },
    678: {
        char: kleur.magenta('█')
    },

    700: {
        char: kleur.bgBlue().white('0')
    },

    800: {
        char: kleur.bgMagenta().white('≈')
    }
}