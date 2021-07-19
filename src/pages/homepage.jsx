import Pomodoro from "../components/pomodoro";
import ToDoList from "../components/toDoList";
import Battery from "../components/battery";
import React, {useState} from 'react';

export const HomePage = () => {

    const [chargersAmount, setChargersAmount] = useState(10);
    

    return(
        <div className="homepage">
            
                <ToDoList
                    changeChargersAmount={setChargersAmount}
                />
                <Pomodoro/>
                <Battery
                    chargersAmount={chargersAmount}
                />
            
        </div>
    )
}