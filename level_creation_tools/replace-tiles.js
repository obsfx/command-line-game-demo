const fs = require('fs');

const replace = require('./tile-replacer');
const { detect } = require('./room-detector');
const getSwitches = require('./switch-detector');

let file = process.argv[2];

let content = fs.readFileSync(file, 'utf8');
let parsed = JSON.parse(content);
let list = parsed.list;

for (let k = 0; k < list.length; k++) {
    let name = list[k].name;
    let datarr = list[k].arr;

    let replaced = replace(datarr);
    let [ arr, detected ] = detect(replaced);
    let switches = getSwitches(arr);

    let output = `const l${name} = { 
        arr: ${JSON.stringify(arr)}, 
        rooms: ${JSON.stringify(detected)},
        switches: ${JSON.stringify(switches)}
    }
    
module.exports = l${name};
    `;

    fs.writeFileSync(`./levels_replaced/${name}.js`, output);
}

