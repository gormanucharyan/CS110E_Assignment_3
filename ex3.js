function reverseNum(num) {
    let a = num;
    let b = a;
    let res = 0;
    let pow = 1;
    while(a >= 10){
       pow *= 10;
       a /= 10;
    }

    while(b){
       res += (b%10) * pow;
       pow /= 10;
       b = Math.floor(b/10);
    }
    return res;
}

let number = 14562;
console.log(reverseNum(number));

