let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));
let foundX = -1;

for (let x = 0; x <= 10000; x++){
    let target = N + x;
    if (target%K === 0){
        let str = target.toString();
        let reversedStr = str.split('').reverse().join('');
        if (str === reversedStr){
            foundX = x;
            break;
        }
    }
}
alert(foundX);