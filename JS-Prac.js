//Practice .forEach function 07/12/2022
const x = [1,2,3,4]
let sumX = 0;
x.forEach(idx => {
    sumX += idx;
})
console.log(sumX);

//Practice .forEach function on a nested array 07/12/2022

const y = [[10,5],[2,8],[8,3,4],[3,7]]
let sumY = 0
y.forEach(arr => {
  arr.forEach(item => {
    sumY += item;
  })
})
console.log(sumY);

//Practice XO function 07/13/2022
//The function returns truth/false depends on if the string contains the same amount of letter 'x' and 'o'.
//This function should not be case sensitive.

function XO(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() == 'x') sum ++;
        if(str[i].toLowerCase() == 'o') sum --;
    }
    return sum === 0;
  }
console.log(XO("asdasdvoasdfx"));

//Practice Arrow Function 07/13/2022
const sum = (a , b) => a + b;
const sub = (a , b) => a - b;
const mul = (a , b) => a * b;
const div = (a , b) => a / b;
console.log(sum(1, 2));
console.log(sub(3, 1));
console.log(mul(2, 2));
console.log(div(4, 2));

//Practice ternary expression 07/13/2022
function isCharAVowel(str) {
  return str.toLowerCase() === 'a';
}

console.log(isCharAVowel('X'), '<- func3 returned this.');


//Code challenge 07/19/22
//Credit card masker, mask all char with '#' with the exception of the last 4
function maskify(cc) {
// Solution 1
//   let masked = "";
//   let last4 = cc.substr(-4);
//   for (let i = 0; i < (cc.length - 4); i++) {
//       masked += "#";
//     }
//   return masked + last4;
// Solution 2
  return '#'.repeat((cc.length - 4)) + cc.substr(-4);
}


console.log(maskify('a1b2c3d4'));

console.log('test') //071922
