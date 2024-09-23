/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
//this function passes 5 out of 7 tests
/*
function isPalindrome(str) {
  //if str.length = odd second if even
  let inputStr = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (inputStr[i] === inputStr[str.length - 1 - i]) {
      return console.log(true);
    } else { return console.log(false) }
  }
}

isPalindrome('')
*/

function isPalindrome(str) {
  let filteredStr = '';
  for (let char of str) {
    if ((char >= 'a' && char <= 'z') || char >= 'A' && char <= 'Z') {
      filteredStr += char.toLowerCase();
    }
  }

  let left = 0;
  let right = filteredStr.length - 1;

  while (left < right) {
    if (filteredStr[left] !== filteredStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;
