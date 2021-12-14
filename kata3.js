const numberOfVowels = function(data) {
  let arr = [];
  for ( let i = 0; i < data.length; i++){
    if (data[i] === "a" || data[i] === "e" || data[i] === "o" || data[i] === "i" || data[i] === "u"){
      arr.push(data[i]);
    }
  } return arr.length;
  
  
  };
  
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));