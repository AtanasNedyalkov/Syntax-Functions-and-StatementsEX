function solve(fruit,grams,pricePerKilo)
{
    let gramsToKilo = (grams/1000);
    let totalPrice = (gramsToKilo*pricePerKilo);
    console.log(`I need $${(totalPrice).toFixed(2)} to buy ${(gramsToKilo).toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80)
