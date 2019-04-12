const info = require('./info');

const modRM = (pack, regUse, rmUse) => {
    const byteHex = pack.isntr.instruction.slice(0, 2);
    const bin = parseInt(byteHex, 16).toString(2);

    const mod = bin.slice(0, 2);
    const reg = bin.slice(2, 5);
    const rm = bin.slice(5, 8);

    let ret = {
        reg: {
            type: "register",
            register
        },
        rm: {

        }
    }

    let set;
    let value;

    if (mod === "11") {
        // Register mode
        const from = pack.registers07[info.registerIndexes[reg]];
        const to = info.registerIndexes[rm];

        set = `registers07.${to}`;
        value = from;
    }

    return {set, value};
}

module.exports = {
    modRM
}