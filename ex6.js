function reverseBin(a){
    let result = [];
    for(let i = 0; i < a.length; i++){
        result[i] = (a[i] + 1) % 2;
    }
    return result;
}
let a = [1,0,0,0,1,0,1,1,0];
b = reverseBin(a);
console.log(a + "\n" + b);