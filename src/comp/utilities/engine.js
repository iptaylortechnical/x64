const Functions = {
  '55': (pack) => {
    const rbpValue = pack.registers07.rbp;
    const newStackValue = rbpValue.toString(16).padStart(16, '0');
    const newStack = pack.stack + newStackValue;
    pack.stack = newStack;

    return pack;
  },
  '48': (pack) => {
    const { instruction } = pack.instr;

    const newCode = instruction.slice(0,2);
    const newInstruction = instruction.slice(2, instruction.length);

    pack.isntr = {
      code: newCode,
      instruction: newInstruction,
    }

    return Functions['89'](pack);
  },
  '89': (pack) => {
    console.log(pack);
    return pack;
  }
}


const tick = (instr, registers07, registers815, stack, flags) => {
  const { code } = instr;
  const codeNumeric = parseInt(code, 16);

  const pack = {
    instr,
    registers07,
    registers815,
    stack,
    flags,
  };

  if (codeNumeric === 0x55) {
    return Functions['55'](pack);
  }

  if (codeNumeric === 0x48) {
    return Functions['48'](pack);
  }
}

module.exports = { tick };