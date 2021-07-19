import React, {useState} from "react";

const Battery = ({chargersAmount}) => {
    console.log(chargersAmount)
    return(
        <div className="batteryWrapper">
            <div className="top-battery"></div>
            <div className="battery">
            {Array(Number(chargersAmount)).fill(<div className="charger"></div>)}
            </div>
        </div>
    )
}

export default Battery;