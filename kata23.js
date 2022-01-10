const metric = 'plumpness';
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ..
  let metricval = 0;
  let submitter = '';

  for(let i=0; i<vegetables.length; i++){
    if(metricval < vegetables[i][metric]){
      metricval = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  } return submitter;
};
console.log(judgeVegetable(vegetables, metric));
