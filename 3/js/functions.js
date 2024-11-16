function isLengthValid(str , maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
  const cleanedStr = str.replaceAll(' ', '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
  function toLowerCaseString(str) {
    return str.toLowerCase();
  }
}
isPalindrome('Топот');
