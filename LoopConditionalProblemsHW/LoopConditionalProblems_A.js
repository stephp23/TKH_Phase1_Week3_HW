// # A - 1, 2, 3,
let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];

let lengthLongestWord = 0;
let longestWord;

for (let i = 0; i < lunchArray.length; i++) {
  if (lunchArray[i].length > lengthLongestWord) {
    lengthLongestWord = lunchArray[i].length;
    longestWord = lunchArray[i];
  }
}

console.log(lengthLongestWord);
console.log(longestWord);

// # A - 4

let lunchArray = ["Burger Salad Lasagna Sushi Meatloaf"];

let lunchString = lunchArray.toString();

let lunchArraySplit = lunchString.split(" ");

let lengthLongestWord = 0;
let longestWord;

for (let i = 0; i < lunchArraySplit.length; i++) {
  if (lunchArraySplit[i].length > lengthLongestWord) {
    lengthLongestWord = lunchArraySplit[i].length;
    longestWord = lunchArraySplit[i];
  }
}

console.log(lengthLongestWord);
console.log(longestWord);
