
// Array to Function by Reduce 

const array = [ 'Hafsa', 'Takia', 'Nazma' ];

const arrayToFunction = array.reduce((acc, cur) => {
     
     const firstLetter = cur[0].toUpperCase();
    
      if(firstLetter in acc){
        acc.firstLetter = (cur); 
      } else {
        acc[firstLetter] = cur
      }
  
  return acc;
}, {});


console.log(arrayToFunction);

console.log(arrayToFunction.T= 'Sakin')


console.log(arrayToFunction);