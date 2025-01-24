//fifth table
for(i=1;i<=10;i++){
    console.log(5,"x",i,"=",i*5);
}

//sum of numbers
let sum=0;
for(i=1;i<=50;i++){
    sum+=i;
}
console.log("\nSum of 50 numbers:",sum);

//Reverse the number
let num = 7894;
let rev = 0;

while (num !== 0) {
    let digit = num % 10;       
    rev = rev * 10 + digit; 
    num = Math.floor(num/10);
}

console.log("\nReversed Number: " + rev);

//pattern
console.log("\nPattern:");
for(i=0;i<6;i++){
    for(j=0;j<i;j++){
        process.stdout.write("*");
    }
    console.log();
}