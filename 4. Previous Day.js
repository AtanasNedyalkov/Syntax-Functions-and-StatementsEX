function solve(y, m, d)
{
    let getDate = new Date(y, m-1, d-1)
    console.log(`${getDate.getFullYear()}-${getDate.getMonth()+1}-${getDate.getDate()}`);
    
}
solve(2016, 9, 30)
solve(2016, 10, 1)
