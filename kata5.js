const urlEncode = function(text) {
  // Put your solution here
  text = text.trim();
  let newText = '';
  for(let i =0; i < text.length; i++){
    if(text[i] === " "){
      newText = newText + "%20"
    }else  {
      newText = newText + text[i]
    }
  } return newText;
}


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));