const tile_rules = require('./tile_table');
const fs = require('fs');

let file = process.argv[2];

let content = fs.readFileSync(file, 'utf8');
let parsed = JSON.parse(content);
let list = parsed.list;

const BLANK = 0;
const WALL = 1;

for (let k = 0; k < list.length; k++) {
    let name = list[k].name;
    let datarr = list[k].arr;
    let replaced = [];

    for (let i = 0; i < datarr.length; i++) {
        replaced.push([]);
        for (let j = 0; j < datarr[0].length; j++) {
            
            replaced[i][j] = BLANK;
    
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

    let output = `const l${name} = [`
    for (let i = 0; i < replaced.length; i++) {
        output += '\n\t' + JSON.stringify(replaced[i]) + ','
    }
    output += '\n]'

    fs.writeFileSync(`./levels_replaced/${name}.js`, output);
}