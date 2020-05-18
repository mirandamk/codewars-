function solution(str) {
  return str.split('').reverse().join('');
}

function countSheeps(arrayOfSheep) {
  var amountOfSheep = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      amountOfSheep++;
    }
  }
  return amountOfSheep
}