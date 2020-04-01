const kleur = require('kleur');

const status = {
    SWITCHON: true,
    DOHAVEGATEBYTE: false
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

const render = _ => {
    let hud = `
┌${kleur.magenta('gate byte')}───────────────┬${switchTitle()}─┐
│ ${gateVal()}  │ ${switchVal()}  │
├${kleur.green('bits')}────────────────────┼level─────┤
│ 0x${bitsVal()} ${bitsBars()} │ 0x${levelVal()}     │
├────────────────────────┴──────────┤
│                                   │
│                                   │
│                                   │
└───────────────────────────────────┘
`

    process.stdout.write(kleur.grey(hud));
}

module.exports = {
    control,
    render
};