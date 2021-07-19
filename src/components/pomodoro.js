import React, {useState, useEffect} from "react";

const Pomodoro = () => {

    const [min, setMin] = useState(25);
    const [sec, setSec] = useState(0);
    const [isTicking, setIsTicking] = useState(false);
    const [isUserWorking, setIsUserWorking] = useState(true);
    
    let interval;

    useEffect(() => {
        interval = setInterval(() => {
            clearInterval(interval);
            if(!isTicking)return;
            timeReducer();
        }, 1000)
    }, [sec])

    const timerMin = min < 10 ? `0${min}` : min;
    const timerSec = sec < 10 ? `0${sec}` : sec;

    function handleStartPause(){
        console.log(`tick ${isTicking}`);
        if(!isTicking){
            timeReducer();        
        }else{
            clearInterval(interval);
        }
        
        setIsTicking(!isTicking);
    }

    function handleWorkRest(){
        clearInterval(interval);
        if(isUserWorking){
            setMin(5);
        }else{
            setMin(25);
        }
        setSec(0);
        setIsUserWorking(!isUserWorking);
    }

    function timeReducer(){
        if (sec === 0){
            if (min !== 0){
                setSec(59);
                setMin(min-1);
            } else{
                let min = isUserWorking ? 24 : 4;
                let sec = 59;
                setSec(sec);
                setMin(min);
            }
        }else{
            setSec(sec - 1)
        }
    }

    return(
        <div className="pomodoro">
            <div className="message">
                {isUserWorking ? 
                    "Working session ends in:" 
                    : "New session starts in:"}
            </div>
            <div className="timer" style={{ backgroundColor: isUserWorking ? 'tomato' : 'limegreen'}}>{timerMin}:{timerSec}</div>
            <div className="buttonsForTimer">
                <button className="startPause" onClick={handleStartPause}>{isTicking ? 'PAUSE' : 'START'}</button>
                <button className="stop" onClick={handleWorkRest}>{isUserWorking ? 'REST' : 'WORK'}</button>
            </div>
        </div>
    )
}

export default Pomodoro;