function isLengthValid(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replaceAll(' ', '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

const example = "А роза упала на лапу Азора";
const maxLength = 50;

const lengthValid = isLengthValid(example, maxLength);
console.log(`Is length valid: ${lengthValid}`);

const palindromeCheck = isPalindrome(example);
console.log(`Is palindrome: ${palindromeCheck}`);
