function isLengthValid(str , maxLength) {
  return str <= maxLength;
}
isLengthValid('sdsd', 10);

function isPalindrome(str) {
  const cleanedStr = str.replaceAll(' ', '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
isPalindrome('Топот');
