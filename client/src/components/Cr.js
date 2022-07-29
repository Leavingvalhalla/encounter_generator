function cr() {
  let crOptions = {
    1: '.13',
    2: '.17',
    3: '.25',
    4: '.33',
    5: '.5',
    37: '35',
    38: '37',
    39: '39',
  };

  for (i = 1; i < 31; i++) {
    crOptions[i + 5] = i.toString();
  }

  return;
}

export default cr;
