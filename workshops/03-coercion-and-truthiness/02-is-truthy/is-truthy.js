function isTruthy(value) {
  if (value) {
    return true;
  }
  if (value === false) {
    return 'The boolean value false is falsey';
  } else if (value === null) {
    return 'The null value is falsey';
  } else if (value === undefined) {
    return 'undefined is falsey';
  } else if (value === 0) {
    return 'The number 0 is falsey (the only falsey number)';
  } else if (value === '') {
    return 'The empty string is falsey (the only falsey string)';
  }
}
