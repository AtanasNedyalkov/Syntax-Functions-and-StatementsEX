function radar(speed, zone)// 40, 'city'
{
let status = "";
let speedLimit = 0;
let difference = 0;
switch(zone)
{
case 'city':
speedLimit = 50;
difference =  speed - speedLimit;
if(speed<=speedLimit)
return print(speed,speedLimit);
else 
Status(difference)
console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
break;
case 'residential':
speedLimit = 20;
difference =  speed - speedLimit;
if(speed<=speedLimit)
return print(speed,speedLimit)
else 
Status(difference)
console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
break;
case 'interstate':
speedLimit = 90;
difference =  speed - speedLimit;
if(speed<=speedLimit)
return print(speed,speedLimit)
else 
Status(difference)
console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
break;
case 'motorway':
speedLimit = 130;
difference =  speed - speedLimit;
if(speed<=speedLimit)
return print(speed,speedLimit)
else 
Status(difference)
console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
break;
}
function Status(difference)
{ 

if(difference<=20)
{
    status = 'speeding';
}
else if(difference>20 && difference<=40)
{
    status = 'excessive speeding';
}
else
{
    status = 'reckless driving';
}
}
function print(speed , speedLimit)
{
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
}

}
radar( 200, 'motorway')