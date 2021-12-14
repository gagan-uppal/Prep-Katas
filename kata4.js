const instructorWithLongestName = function(instructors) {
  let longestName = [];
  //let answer = [];
  let longestNameObj = {};

  for (let i = 0; i < instructors.length; i++){
    let name1 = instructors[i].name;
    if(name1.length > longestName.length){
     longestName = name1;
     longestNameObj = instructors[i];

    }

  } return longestNameObj;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));