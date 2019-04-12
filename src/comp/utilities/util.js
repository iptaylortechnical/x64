const getLength = (instr) => {
  return {
    '55': 0,
    '48': 4,
    'c7': 12
  }[instr];
}

const getDescription = (instr) => {
  return {
    '55': 'PUSH: This pushes the RBP register onto the stack.',
    '48': 'Designates a 64 bit operand',
    'c7': 'MOVE: moves a value from one spot to another.'
  }[instr];
}

const setPath = (pack, path, value) => {
  const parts = path.split('.');
  const last = parts.pop();
  let temp = pack;
  for (let pIndex in parts) {
      temp = temp[parts[pIndex]];
  }

  temp[last] = value;
}

module.exports = {
  getLength,
  getDescription,
  setPath,
}