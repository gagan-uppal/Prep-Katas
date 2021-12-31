const urlDecode = function(text) {
  let result = {};
 // let keys = [];
  //let values = [];
  //let text1 = text.replace(/%20/g, " ");
  //console.log(text1); //lighthouse labs;


  let text1 = text.split('=').join('&').split('&').join(' ').split(' ');

  for(let i = 0; i < text1.length; i = i + 2) {
    result[text1[i]] = text1[i+1].split(/%20/).join(' ');

  }
  //};
  return result;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);