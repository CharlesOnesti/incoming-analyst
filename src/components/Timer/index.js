import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({ submitted, reset, setReset }) => {
    const [minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds < 60) {
                setSeconds(seconds + 1);
            }
            if (seconds === 59) {
              setMinutes(minutes + 1);
              setSeconds(0);
            } 
        }, 1000)
        if (submitted) {
          clearInterval(myInterval)
        }
        if (reset) {
          setMinutes(0)
          setSeconds(0)
          setReset(false)
        }
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        {<h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>}
        </div>
    )
}

export default Timer;