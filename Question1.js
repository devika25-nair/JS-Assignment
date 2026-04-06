let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));
let count = 0;

for (let x = L; x<R; x++){
    let numStr = x.toString();
    if (numStr.indexOf('0') == -1){
        let sumDigits = 0;
        for (let i = 0; i<numStr.length; i++){
            sumDigits += parseInt(numStr[i]);
        }
        let isPrime = sumDigits>1;
        for (let i = 2; i<=Math.sqrt(sumDigits); i++){
            if (sumDigits%i == 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            count++;
        }
    }
}
alert(count);