const sumLargestNumbers = function(data) {
  let largest = 0;
    for(let i = 0; i < data.length; i++) {
        if(data[i] > largest){
          largest = data[i];
        }
        
      
    }  
    let secondLargest = 0;
     
     for(let j = 0; j < data.length; j++) {
       if(data[j] > secondLargest && data[j] < largest){
         secondLargest = data[j];
       }
    }
return largest + secondLargest;

  } 

 // console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
