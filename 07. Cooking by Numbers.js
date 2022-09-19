function cookingByNumbers(number , ...commands)
{
    let commandNum = 0;
    for(let i = 0; i < commands.length; i++)
    {
        if(commands[i]=='chop')
        {
        number =  number/2;
        console.log(number);
         commandNum ++;
        }
        else if (commands[i]=='dice')
        {
        number = Math.sqrt(number);
        console.log(number);
        commandNum ++;
        }
            else if(commands[i]=='spice')
        {
        number+=1;
        console.log(number);
        commandNum ++;
        }
        else if (commands[i]=='bake')
        {
            number = number*3;
            console.log(number);
         commandNum ++;
        }
        else if(commands[i] == 'fillet')
        {
            number = number*0.8;
            console.log(number);
             commandNum ++;
        }
        if(commandNum>=5)
        break;
        
    }
   
}
cookingByNumbers('9', 'fillet' , 'spice', 'chop', 'fillet', 'fillet')
