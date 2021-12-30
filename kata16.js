let camel = function(input){
  let output = '';
  for(let i = 0; i < input.length; i++){
    if (input[i] !== " "){
       output += input[i];
    }else if (input[i] === " "){
      output += input[i+1].toUpperCase();
      i++;
    }
  }return output;
  };
  
  let pascal = function(input){
    let output = '';
    for(let i = 0; i < input.length; i++){
      if(i === 0 ){
        output = output + input[i].toUpperCase();
      }else if(input[i] !== " "){
        output += input[i];
      }else if(input[i] === " "){
        output += input[i+1].toUpperCase();
        i++;
      }
    }return output;
  }
  
  let snake = function(input){
  let output = '';
  for(let i = 0; i < input.length; i++){
    if (input[i] !== " "){
      output += input[i];
  }else if(input[i] === " "){
  output = output + "_";
  }
  }return output;
  }
  
  let kebab = function(input){
  let output = '';
  for (let i = 0; i < input.length; i++){
      if(input[i] !== " "){
        output += input[i];
    }else if(input[i] === " "){
    output = output + "-";
    }
  }return output;
  }
  
  let title = function(input){
      let output = '';
      for (let i = 0; i < input.length; i++){
        if(i === 0 ){
          output = output + input[i].toUpperCase();
        }else if (input[i] !== " "){
          output += input[i];
        }else if (input[i] === " "){
          output += " " + input[i+1].toUpperCase();
          i++;
      }
    }return output;
  }
  
  let vowel = function(input){
  let output = '';
  for (let i = 0; i < input.length; i ++){
    if(input[i] === "a" || input[i] === "i" || input[i] === "o" || input[i] ==="e" ||input[i] === "u"){
      output = output + input[i].toUpperCase();
    }else 
    output = output + input[i];
  }return output;
  }
  
  let consonant = function(input){
    let output = '';
    for(let i = 0; i < input.length; i++){
      if(input[i] !== "a" && input[i] !== "i" && input[i] !== "o" && input[i] !=="e" && input[i] !== "u"){
        output = output + input[i].toUpperCase();
      }else 
      output = output + input[i];
    }return output;
    }
  
    let upper = function(input){
      let output = '';
      for (let i = 0; i< input.length; i++ ){
        output = output + input[i].toUpperCase();
      }return output;
    }
  
    let lower = function(input){
      let output = '';
      for( let i = 0; i < input.length; i++){
        output = output + input[i].toLowerCase();
      }return output;
  
    }
  const makeCase = function(input, cases) {
      let result = input
      let types = [];
      if (typeof cases === "string"){
          types.push(cases)
      } else if(typeof cases === "object"){
          for(let i = 0; i<cases.length; i++){
              types.push(cases[i])
          }
        }
      for(let i = 0; i < types.length; i++)  {
        if(types[i] === 'camel'){
          result = camel(result);
        }else if(types[i] === 'pascal'){
          result = pascal(result);
        }else if(types[i] === 'snake'){
          result = snake(result);
        }else if(types[i] === 'kebab'){
          result = kebab(result);
        }else if(types[i] === 'title'){
          result = title(result);
        }
        
      }
      for(let i = 0; i < types.length; i++){
        if(types[i] === 'vowel'){
          result = vowel(result);
        }else if(types[i] === 'consonant'){
          result  = consonant(result);
        }
      }
       for(let i = 0; i < types.length; i++) {
         if(types[i] === 'upper'){
           result = upper(result);
         }else if (types[i] === 'lower'){
           result = lower(result);
         }
       }return result;
        
    }
  
  
  
  console.log(makeCase("this is a string", "camel"));
  console.log(makeCase("this is a string", "pascal"));
  console.log(makeCase("this is a string", "snake"));
  console.log(makeCase("this is a string", "kebab"));
  console.log(makeCase("this is a string", "title"));
  console.log(makeCase("this is a string", "vowel"));
  console.log(makeCase("this is a string", "consonant"));
  console.log(makeCase("this is a string", ["upper", "snake"]));
  