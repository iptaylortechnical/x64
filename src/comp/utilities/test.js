const a = {
  '55': () => {
    return 1;
  },
  '48': () => {
    return a['55']();
  }
}

console.log(a['48']());