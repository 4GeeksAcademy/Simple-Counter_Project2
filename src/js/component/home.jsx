import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

//create your first component
const Home = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCounter(previousCounter => previousCounter + 1);
        }, 1000);
    }, []);

    const formatDigit = (number, digitPosition) => {
        const string = number.toString().padStart(6, '0'); 
        return string[string.length - digitPosition];
    };

    return (
        <div className="container">
            <div className="Counter">
            <div className="Icon m-4"><FontAwesomeIcon icon={faClock} /></div>
                <div className="SixthDigit m-4">{formatDigit(counter, 6)}</div>
                <div className="FifthDigit m-4">{formatDigit(counter, 5)}</div>
                <div className="FourthDigit m-4">{formatDigit(counter, 4)}</div>
                <div className="ThirdDigit m-4">{formatDigit(counter, 3)}</div>
                <div className="SecondtDigit m-4">{formatDigit(counter, 2)}</div>
                <div className="FirstDigit m-4">{formatDigit(counter, 1)}</div>
            </div>
        </div>
    )
}	



export default Home;
