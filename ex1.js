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
  
  console.log(isPrime(41));
