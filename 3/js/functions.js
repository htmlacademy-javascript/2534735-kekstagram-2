// eslint-disable-next-line
function isLengthValid(str, maxLength) {
  return str.length <= maxLength;
}

// eslint-disable-next-line
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replaceAll(' ', '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
