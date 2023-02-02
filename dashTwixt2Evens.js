let dasheven = (number) => {
    let num = number.toString();
    var res = ""
    let i;
for ( i = 0 ; i < num.length-1 ; i++)
{   if(num[i] % 2 == 0 && num[i+1] %2 == 0)
    { 
       res += num[i] + "_";
    }
    else
    res += num[i];
}
res += num[i];
return res;
}
console.log(dasheven(24324));