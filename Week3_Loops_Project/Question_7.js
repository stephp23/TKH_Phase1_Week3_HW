function secondLetterZ(givenString) {
  // change the string to array, splits at every letter
  let stringArray = givenString.split("");

  // change every 2nd letter (index must be 1, 3, 5 etc) to "Z" (must be Uppercase)
  let mapZString = stringArray.map((letter, index) => {
    if (index % 2 === 1) {
      return (letter = "Z");
    } else {
      return letter.toLowerCase();
    }
  });
  // piece back together letters into a string
  let noSpaceString = mapZString.join("");

  return noSpaceString; //resutling string with "t"s changed to "Z"s
}

console.log(secondLetterZ("donuts"));
