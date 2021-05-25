//program to count no of digits in a number
let a=3458967;
let b=0;
while(a>0)
{
    a=Math.floor(a/10)
    digits+=1;
}
process.stdout.write(digits+"\n");
