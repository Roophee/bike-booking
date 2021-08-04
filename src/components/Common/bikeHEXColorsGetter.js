export const bikeHEXColorsGetter = color => {
  switch (color) {
    case 'black':
      return '000';
    case 'white':
      return 'fff';
    case 'green':
      return '6FCF97';
    case 'yellow':
      return 'F2994A';
    case 'pink':
      return 'EB5757';
    case 'blue':
      return '6BA6C0';
    case 'brown':
      return 'A55C1B';
    default:
      return '000';
  }
};
