import './CalculatorLandingCss.css';
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
        <div className="directions-container">
          {calculationData ?  <CalcDirections calcData = {calculationData} /> : null }
        </div>
        <div className="calculator-container">
            <CalcForm getDataFromCalculator={getDataFromCalculator}/>
        </div>
        </>
    )
}