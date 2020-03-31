// `${left}-${right}-${top}-${bottom}`

module.exports = {
    2: {
        checkIndex: [ 2 ],

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
        '0-0-0-0': 18,  // WALLEND4 █
    },

    30: {
        checkIndex: [ 2 ],

        '1-1-0-0': 30,  // DOOR ┃
        '0-0-1-1': 31,  // DOOR ━
    },

    600: {
        checkIndex: [ 600, 700 ],

        '0-1-0-1': 663,   // LINE-TL ┌
        '1-0-0-1': 664,   // LINE-TR ┐
        '0-1-1-0': 665,   // LINE-BL └
        '1-0-1-0': 666,   // LINE-BR ┘

        '0-1-1-1': 667,   // LINE-TRB ├
        '1-0-1-1': 668,   // LINE-TLB ┤

        '1-1-0-1': 669,   // LINE-BLR ┬
        '1-1-1-0': 670,   // LINE-TLR ┴

        '1-1-1-1': 671,  // LINE-TLRB ┼	

        '0-0-1-1': 672,  // LINE ─
        '1-1-0-0': 673,  // LINE-2 │

        '0-1-0-0': 674,  // LINE-END ╾
        '1-0-0-0': 675,  // LINE-END2 ╼
        '0-0-1-0': 676,  // LINE-END3 ╽
        '0-0-0-1': 677,  // LINE-END4 ╿
        '0-0-0-0': 678,  // LINE-END4 █
    }
}