const hudState = {
    switch: 0
}

const hudSwitchTitle = _ => {
    return '──────'
    // return 'switch';
}

const hudSwitchVal = _ => {
    return `       `
    // return `« 0x${hudState.switch.toString(16).toUpperCase()} »`
}

const render = _ => {
    let hud = `
┌gate card───────────────┬${hudSwitchTitle()}────┐
│ ≡ gate card            │ ${hudSwitchVal()}  │
├bits that you have──────┼level─────┤
│ 0xFF █████████████████ │ 01       │
├────────────────┬───────┴──────────┤
│ major game jam │ arrested bytes   │
└────────────────┴──────────────────┘
`

    process.stdout.write(hud);
}

module.exports = {
    render
};