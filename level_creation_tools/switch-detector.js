const FLOOR = 1;
const SWITCH = 700;

const getSwitches = arr => {
    let dataarr = JSON.parse(JSON.stringify(arr))

    let switch_data = [];

    for (let i = 0; i < dataarr.length; i++) {
        for (let j = 0; j < dataarr[0].length; j++) {
            if (dataarr[i][j] == SWITCH) {
                dataarr[i][j] = FLOOR;

                switch_data.push({
                    x: j,
                    y: i,
                    char: '0',
                    value: 0
                });
            }
        }
    }

    return switch_data;
}

module.exports = getSwitches;