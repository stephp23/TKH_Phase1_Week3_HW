//Using a while loop, return an array that contains all odd numbers between 3 and 103

let startingNum = 3;
let endingNum = 103;
let oddNumArr = [];

while (startingNum < endingNum) {
  oddNumArr.push(startingNum);
  startingNum += 2;
}
console.log(oddNumArr);
