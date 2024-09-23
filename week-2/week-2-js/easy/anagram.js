/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

isAnagram("dfs", "fds")

function isAnagram(str1, str2) {
  let first = str1.toLowerCase().split("").sort().join("");
  let second = str2.toLowerCase().split("").sort().join("");
  console.log(first, second)
  if (first === second) {
    return console.log(true)
  } else return console.log(false)
}

isAnagram("ssjdh", "DHssJ")

module.exports = isAnagram;
