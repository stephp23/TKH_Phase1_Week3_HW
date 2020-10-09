//Using a while loop, return an array that contains all odd numbers between 3 and 103
while (i > 3 && i < 103) {
  let i = [];
    if (i % 2 !== 0) {
      return [i];
    }
}


let arr = [1, 2, 3, 4];
const evenResult = arr.filter(function (newArr) {
  return newArr % 2 == 0;
});
console.log(evenResult);
