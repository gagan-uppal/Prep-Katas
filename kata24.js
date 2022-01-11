const smartGarbage = function (trash, bins) {
  

  bins = {
    waste: 4,
    recycling: 3,
    compost: 5
  }; 
  if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'compost') {
    bins.compost += 1; 
  }
  return bins;
}; 
console.log(smartGarbage('waste', { waste: 4, recycling: 5, compost: 5 })); 



