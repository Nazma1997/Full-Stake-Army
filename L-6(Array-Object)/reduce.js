const numbers = [1, 2, 3, 5, '', false, NaN, 4, 6];

// convert Array by reducers 

const result = numbers.reduce((acc, cur, index) => {
    
    if (index == 0) acc += '[';
    if (cur) {
        acc += cur.toString() + (index < numbers.length - 1 ? ',' : '');
    }
    if(index == numbers.length - 1 ) acc += ']';
    
    
    return acc;
}, [])


console.log(result)

// Convert array 

const result2 = numbers.reduce((acc, cur ) => {
    if (cur){
        acc.push(cur.toString());
    }

    return acc;
}, [])

console.log( 'result2 :', result2);


// Own Reduce method 

function myReduce(array, callBack, init){
    let acc = init;
    for(let i = 0; i < array.length; i++){
        acc = callBack(acc, array[i], i, array); //acc = accumulator, array[i] = index, i = initial value, array = main array
    }

    return acc;
}

const result3 = myReduce(numbers, (acc, cur) => {

          if(cur){
              acc.push(cur *cur);
          }

          return acc;
          
},[]);


console.log('Result3 :', result3);


// Decorated object from undecorated array 

const names =[
    'alamin',
    'abu raihan',
    'anish',
    'badol',
    'nanno',
    'kayesh',
    'sultan'
];

const namesGroup = names.reduce((acc, cur) => {
    
     const firstLetter = cur[0].toUpperCase();

     if(firstLetter in acc){
         acc[firstLetter].push(cur);
       
     } else {
         acc[firstLetter] = [cur]
     }


    return acc;
},{});


// console.log(namesGroup);

Object.keys(namesGroup).forEach((groupKey) => {
    console.log(groupKey);
    namesGroup[groupKey].forEach((name) => {
        console.log(name , '\n');
        
    })
})

