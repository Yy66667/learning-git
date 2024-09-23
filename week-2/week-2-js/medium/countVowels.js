/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let arrList = str.toLowerCase().split('');
  let vowelCount = 0;
  for (let i = 0; i < arrList.length; i++) {
    if
      (arrList[i] === 'a' ||
      arrList[i] === 'e' ||
      arrList[i] === 'i' ||
      arrList[i] === 'o' ||
      arrList[i] === 'u') {
      vowelCount++
    }
  }
  return vowelCount;
}

/*
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str){
         if(vowels.includes(char)){
            count++;
      }
    }
    
    return count;
  }
*/
console.log(countVowels("gvdvsaeiouAIodgSiDSd"))
module.exports = countVowels;
