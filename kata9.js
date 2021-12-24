const camelCase = function(input) {
  // Your code here
  let newOutput = [];
  for (let i = 0; i < input.length; i++){
    
      if (input[i] !== " "){
        newOutput += input[i];
      }else if (input[i] === " "){
        newOutput += input[i+1].toUpperCase();
        i++;
      }
    

    

    
  } return newOutput.join('');

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));