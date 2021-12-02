let sum2: number = 0;
let count: number = 0;
for (let i = 2; count < 30; i++) {
    let isPrime: boolean = true;
    if (i == 2) {
        sum2 += i;
        count++;
        continue;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if(!isPrime){
        continue;
    }
    sum2+= i;
    count++;
}
console.log(sum2);