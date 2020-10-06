function oddPositionList(list) {
  let oddList = [];

  for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0) {
      oddList.push(list[i]);
    }
  }
  return oddList.join(", ");
}

console.log(oddPositionList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
