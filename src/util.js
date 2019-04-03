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

module.exports = {
  getLength,
  getDescription
}