function isPrime(num) {

    if (num === 2 || num === 3) {
      return true;
    } 

    else if (num > 3) {
      for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        } 
        }
        return true;
    } 
    
    else {
      return false;
    }
  
}

function primesBetween(a,b){
    let min,max;
    let result = [];
    if(a > b){
        max = a;
        min = b;
    }
    else{
        min = a;
        max = b;
    }

    for(min; min<=max;min++){
        if(isPrime(min) === true){
            result.push(min);
        }
    }
    return result;
}


let res = primesBetween(50,10);
console.log(res);






