// will translate into 'whale talk' later.
const input = 'Buy the dip';
// vowels whales use.. this will not change..
const vowels = ['a', 'e', 'i', 'o', 'u'];
// place to store the vowels
const resultsArray = [];

//loops will go through each input
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log(inputIndex);
if (input[inputIndex] === 'e') {
  resultsArray.push(input[inputIndex]);
}
  if (input[inputIndex] === 'u') {
  resultsArray.push(input[inputIndex]);
  }
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){ 
// console.log(vowelIndex);
  // compares input to vowels
 if (input[inputIndex] === vowels[vowelIndex]){
   //console.log(input[inputIndex])
   resultsArray.push(input[inputIndex]);
 }
}
}

// console.log(resultsArray);

const resultString = resultsArray.join('').toUpperCase();
console.log(resultString)