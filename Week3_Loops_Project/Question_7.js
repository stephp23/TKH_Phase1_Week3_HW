function secondLetterZ (givenString) {
  // string to array
  let stringArray = givenString.split("")
​
  // change every 2nd letter to "Z"
  let mapZString = stringArray.map((letter, index) => {
    if (index % 2 === 1) {
     return letter = "Z"; //uppercase Z
    } else {
      return letter.toLowerCase();
    }
  })
​
  let noSpaceString = mapZString.join("");
​
  return noSpaceString;
}
​
secondLetterZ("donuts")


//
function letterZ (str) {
  // change string to array
  let strArr = str.split("")
​
  // change every 2nd letter to "Z"
  let mappedStr = strArr.map((letter, index) => {
    if (index % 2 === 1) {
     return letter = "Z";
    } else {
      return letter.toLowerCase();
    }
  })
​
  // join array back into string
  let zeeStr = mappedStr.join("");
​
  // return it
  return zeeStr;
}
​
letterZ("donuts")