const tile_rules = require('./wall-replace-rules');

const replace = datarr => {
    const WALL = 1;

    let replaced = [];

    for (let i = 0; i < datarr.length; i++) {
        replaced.push([]);
        for (let j = 0; j < datarr[0].length; j++) {
            
            replaced[i][j] = datarr[i][j];
    
            if (datarr[i][j] == WALL) {
                let left = 0;
                let right = 0;
                let top = 0;
                let bottom = 0;
    
                if (j > 0) {
                    if (datarr[i][j - 1] == WALL) {
                        left = 1
                    }
                }
        
                if (j < datarr[0].length - 1) {
                    if (datarr[i][j + 1] == WALL) {
                        right = 1
                    }
                }
        
                if (i > 0) {
                    if (datarr[i - 1][j] == WALL) {
                        top = 1
                    }
                }
                
                if (i < datarr.length - 1) {
                    if (datarr[i + 1][j] == WALL) {
                        bottom = 1
                    }
                }
        
                let key = `${left}-${right}-${top}-${bottom}`
                // console.log(tile_rules[key], key)
                replaced[i][j] = tile_rules[key];
            }
        }
    }

    return replaced
}

module.exports = replace