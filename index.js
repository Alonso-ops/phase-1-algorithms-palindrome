function isPalindrome(str) {
let left = 0;
let right = str.length - 1;

while (left < right) {
  if (str[left] !== str[right]) {
    return false;
  }
  left++;
  right--;
}
return true;
}

module.exports = isPalindrome;

  // Write your algorithm here
//Splitting the string into an array of characters, Reversing the array, Joining it back into a string, Then comparing it to the original string.

/* 
  Add your pseudocode here
*/



/*
  Add written explanation of your solution here
*///Splitting the string into an array of characters then reversing the array, joining it back into a string then comparing it to the original string.

// You can run `node index.js` to view these console logs

  // add your own custom tests in here
