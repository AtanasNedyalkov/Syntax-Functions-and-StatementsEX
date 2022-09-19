function timeToWalk(stepsToUni, footprintLength, speed)
{
    let distanceToUni = stepsToUni*footprintLength;
    let speedMetersInSec =  speed/3.6;
    let time = distanceToUni/speedMetersInSec;
    let rest = Math.floor(distanceToUni / 500);
    
    let timeInH = Math.floor(time/3600);
    let timeInMin = Math.floor(time/60);
    let timeInSec = (time -(timeInMin*60)).toFixed(0);
    timeInMin+=rest;
    if(timeInMin>=60)
    {
        timeInH++
        timeInMin-=60;
    }
    let formattedH = timeInH<10 ? `0${timeInH}` : `${timeInH}`;
    let formattedM = timeInMin<10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedS = timeInSec<10 ? `0${timeInMin}` : `${timeInSec}`;

    console.log(`${formattedH}:${formattedM}:${formattedS}`);
}
//`hours:minutes:seconds`.
timeToWalk(2564, 0.70, 5.5)