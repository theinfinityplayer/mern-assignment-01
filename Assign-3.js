let x = 4;
let y = 8;
let i = 1;
let gcd = 1;
if(x>y)
{
    while(i<=y)
    {
        if((x%i==0) && (y%i==0))
        {
            gcd *= i;
        }
        i+=1;
    }
}
else
{
    while(i<=x)
    {
        if((x%i==0) && (y%i==0))
        {
            gcd *= i;
        }
        i+=1;
    }
}
console.log(gcd);