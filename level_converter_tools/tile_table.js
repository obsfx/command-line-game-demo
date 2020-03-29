// `${left}-${right}-${top}-${bottom}`

module.exports = {
    '0-1-0-1': 3,   // WALLCORNERTL ┌
    '1-0-0-1': 4,   // WALLCORNERTR ┐
    '0-1-1-0': 5,   // WALLCORNERBL └
    '1-0-1-0': 6,   // WALLCORNERBR ┘

    '0-1-1-1': 7,   // WALLCORNERTRB ├
    '1-0-1-1': 8,   // WALLCORNERTLB ┤

    '1-1-0-1': 9,   // WALLCORNERBLR ┬
    '1-1-1-0': 10,  // WALLCORNERTLR ┴

    '1-1-1-1': 11,  // WALLCORNERTLRB ┼	

    '0-0-1-1': 12,  // WALL ─
    '1-1-0-0': 13,  // WALL2 │

    '0-1-0-0': 14,  // WALLEND ╾
    '1-0-0-0': 15,  // WALLEND2 ╼
    '0-0-1-0': 16,  // WALLEND3 ╽
    '0-0-0-1': 17,  // WALLEND4 ╿
}