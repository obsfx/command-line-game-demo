const kleur = require('kleur');

const status = {
    SWITCHON: false,
    DOHAVEGATEBYTE: false,
    MIN_TEXT_HEIGHT: 3,
    TEXT_WIDTH: 33
}

const values = {
    switch: 0,
    switchCode: 1,
    bits: 132,
    level: 16,
    info: ''
}

const control = {
    setSwitch: (status, value, code) => {
        status.SWITCHON = status;
        values.switch = value;
        values.switchCode = code;
    },

    setBits: value => {
        values.bits = value;
    },

    setText: text => {
        values.info = text;
    }
}

const switchTitle = _ => {
    return status.SWITCHON ? `switch ${kleur.yellow((values.switchCode < 10) ? '0' + values.switchCode : values.switchCode)}` : '─────────';
}

const switchVal = _ => {
    return status.SWITCHON ? 
    kleur.yellow(`« 0x${values.switch.toString(16).toUpperCase()} »`) : 
    `       `
}

const bitsVal = _ => {
    return kleur.green((values.bits < 16 ? '0' : '') + values.bits.toString(16).toUpperCase());
}

const bitsBars = _ => {
    let bars = '';
    let suffix = ''

    for (let i = 0; i < values.bits / 15; i++) {
        bars += '█';
    }

    for (let i = 0; i < (17 - bars.length); i++) {
        suffix += ' ';
    }

    return kleur.green(bars + suffix)
}

const gateVal = _ => {
    return status.DOHAVEGATEBYTE ? kleur.blue('you got the gate byte') : kleur.red('get the gate byte    '); 
}

const levelVal = _ => {
    return kleur.white(values.level < 16 ? '0' : '' + values.level.toString(16).toUpperCase());
}

const text = _ => {    
    let output = '';

    if (values.info.length == 0) {
        values.info = ' ';
    }

    for (let i = 0; i < values.info.length; i += status.TEXT_WIDTH) {
        let line = values.info.slice(i, i + status.TEXT_WIDTH);
        let suffix = '';

        for (let j = 0; j < status.TEXT_WIDTH - line.length; j++) {
            suffix += ' ';
        }


        output += `│ ${kleur.white(line) + suffix} │ ${(i < values.info.length - status.TEXT_WIDTH) ? '\n' : ''}`;
    }

    return output;
}

const render = _ => {
    let hud = `
┌${kleur.magenta('gate byte')}───────────────┬${switchTitle()}─┐
│ ${gateVal()}  │ ${switchVal()}  │
├${kleur.green('bits')}────────────────────┼level─────┤
│ 0x${bitsVal()} ${bitsBars()} │ 0x${levelVal()}     │
├────────────────────────┴──────────┤
${text()}                                  
└───────────────────────────────────┘
`

    if (status.MIN_TEXT_HEIGHT > Math.floor(values.info.length / status.TEXT_WIDTH)) {
        let pseudoLineCounter = status.MIN_TEXT_HEIGHT - Math.floor(values.info.length / status.TEXT_WIDTH);

        for (let i = 0; i < pseudoLineCounter; i++) {
            hud += '\n';
        }
    }

    process.stdout.write(kleur.grey(hud));
}

module.exports = {
    control,
    render
};