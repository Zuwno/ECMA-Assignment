function total(...number)
{
    let result = 0;
    for (let i = 0; i< number.length; i++)
    {
        result +=
         number[i]
    }
    return result;
}
console.log(total(1,2,3))