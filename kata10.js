const multiplicationTable = function(maxValue) {
  let newValue = '';
  for (let i = 1; i <= maxValue; i++){
    for (let j = 1; j <= maxValue; j++){
      if (j === maxValue){
        newValue = (newValue + (i * j)) + "\n";
      }else {
        newValue = newValue + (i * j) + " ";
      }
    }
  }return newValue;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));