// Where I try out the spontaneous exercises (Scrims)

export default function RandomComponent(){

    let hours = new Date().getHours();
    let timeofDay;

    hours < 12 ? timeofDay = "morning" :
    hours >= 12 && hours < 17 ? timeofDay = "afternoon" : 
    hours >= 17 && hours < 21 ? timeofDay = "evening" : 
    timeofDay = "night";

    return(
        <>
            <h1> Good {timeofDay}.</h1>
        </>
    )
}