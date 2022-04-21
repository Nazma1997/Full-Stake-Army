const numbers = [1, 2, 3, 5, ' ', false, NaN, 4, 6];


const result = numbers.reduce((acc, cur, index) => {
    
    if (index == 0) acc += '[';
    if (cur) {
        acc += cur.toString() + (index < numbers.length - 1) ? ',' : '';
    }
    if(index == numbers.length - 1 ) acc += ']';
    
    
    return acc;
}, [])


console.log(result)