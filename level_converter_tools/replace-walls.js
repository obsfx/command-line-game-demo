const fs = require('fs');

const replace = require('./wall-replacer')

let file = process.argv[2];

let content = fs.readFileSync(file, 'utf8');
let parsed = JSON.parse(content);
let list = parsed.list;

for (let k = 0; k < list.length; k++) {
    let name = list[k].name;
    let datarr = list[k].arr;
    let replaced = replace(datarr);

    let output = `const l${name} = [`
    for (let i = 0; i < replaced.length; i++) {
        output += '\n\t' + JSON.stringify(replaced[i]) + ','
    }
    output += '\n]'

    fs.writeFileSync(`./levels_replaced/${name}.js`, output);
}

