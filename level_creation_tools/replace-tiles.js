const fs = require('fs');

const replace = require('./tile-replacer');
const detect_rooms = require('./room-detector');

let file = process.argv[2];

let content = fs.readFileSync(file, 'utf8');
let parsed = JSON.parse(content);
let list = parsed.list;

for (let k = 0; k < list.length; k++) {
    let name = list[k].name;
    let datarr = list[k].arr;

    let replaced = replace(datarr);
    let [ arr, detected ] = detect_rooms(replaced);

    let output = `const l${name} = { 
        arr: ${JSON.stringify(arr)}, 
        rooms: ${JSON.stringify(detected)} 
    }
    
module.exports = l${name};
    `;

    fs.writeFileSync(`./levels_replaced/${name}.js`, output);
}

