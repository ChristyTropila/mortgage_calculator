import styles from './CalculatorLandingCss.css';
import {CalcDirections} from '../CalcDirectionsComponent/CalcDirections';
import {CalcForm} from '../CalcFormComponent/CalcForm';
import React, {useState} from 'react';

export const CalculatorLanding = () => {
    const [calculationData, setCalculationData] = useState();

    const getDataFromCalculator = (data) => {
        setCalculationData(data)
    };

    return(
        <>
        <div>
        <CalcDirections calcData = {calculationData} />
        </div>
        <div>
        <CalcForm getDataFromCalculator={getDataFromCalculator}/>
        </div>
        </>
    )
}