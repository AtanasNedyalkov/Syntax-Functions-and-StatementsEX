function solve(input)//2222222
{
    let inputAsString = input.toString();//'2222222'
    let isSame = true;
    let sum = 0;
    let firstDigit = inputAsString[0];
    for(let i = 0; i<inputAsString.length; i++)
    {
        if(inputAsString[i]!==firstDigit)
        {
        isSame=false;
        }
        sum = sum+Number(inputAsString[i]);
    }

    console.log(isSame)
    console.log(sum)
}
solve(1234)
solve(222222)