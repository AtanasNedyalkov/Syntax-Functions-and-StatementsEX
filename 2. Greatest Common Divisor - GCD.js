function solve(firstNum, secondNum)
{
    let greatestNUm = Math.abs(firstNum-secondNum)
    let divisor ;
    for (let i = 1; i <= greatestNUm; i++) 
    {
      if(firstNum%i===0 && secondNum%i===0)
      divisor=i;
    }
    console.log(divisor)
}
solve(2154, 458)