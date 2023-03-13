//Creating module : Just create a function and export that

const sumOfArray = (a) =>{
    
    let sum = 0;
    a.forEach(element => {
        sum = sum + element;
    });
    return sum;
}

module.exports = sumOfArray;