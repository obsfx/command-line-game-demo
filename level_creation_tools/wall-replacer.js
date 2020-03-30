const tile_rules = require('./wall-replacement-rules');

const replace = datarr => {
    const keys = Object.keys(tile_rules);
    const WALL = 2;

    let replaced = [];

    for (let i = 0; i < datarr.length; i++) {
        replaced.push([]);
        for (let j = 0; j < datarr[0].length; j++) {
            
            replaced[i][j] = datarr[i][j];
            
            if (keys.indexOf(datarr[i][j].toString()) > -1) {
                let left = 0;
                let right = 0;
                let top = 0;
                let bottom = 0;

                let rules = tile_rules[datarr[i][j]];
                let checkIndex = rules.checkIndex;
    
                if (j > 0) {
                    if (datarr[i][j - 1] == checkIndex) {
                        left = 1
                    }
                }
        
                if (j < datarr[0].length - 1) {
                    if (datarr[i][j + 1] == checkIndex) {
                        right = 1
                    }
                }
        
                if (i > 0) {
                    if (datarr[i - 1][j] == checkIndex) {
                        top = 1
                    }
                }
                
                if (i < datarr.length - 1) {
                    if (datarr[i + 1][j] == checkIndex) {
                        bottom = 1
                    }
                }
        
                let key = `${left}-${right}-${top}-${bottom}`
                // console.log(tile_rules[key], key)
                replaced[i][j] = rules[key];
            }
        }
    }

    return replaced
}

module.exports = replace