function binAdd(a,b){
        
    let dif = Math.abs(a.length - b.length);
    if(a.length > b.length){

        for(let i = 0;i < dif; i++){
            b.unshift(0);
        }

    }
    else{

        for(let i = 0;i < dif; i++){
            a.unshift(0);
        }

    }

    console.log(" " + a + "\n+\n " + b); 

    let result = [];
    let sum = 0;
    let i = a.length - 1;
    let carry = 0;
    while(i >= 0){
        sum = a[i] + b[i] + carry;
        result.unshift(sum%2);
        carry = Math.floor((sum)/2);
        i--;
    }
    if(carry === 1)result.unshift(carry);

    return result;

}

let bin1 = [1,1,1,1,1];
let bin2 = [1,1,1];
result = binAdd(bin1,bin2);
console.log(result);
