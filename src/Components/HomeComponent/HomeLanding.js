import React from 'react';
import {Header} from '../HeaderComponent/Header';
import {CalculatorLanding} from '../CalculatorComponent/CalculatorLanding';
import  './HomeLandingCss.css';

export const HomeLanding = () => {

    return(
        <div className='container'>
            <div className='top-container'>
                <Header/>
            </div>
            <div className='bottom-container'>
                <CalculatorLanding/>
            </div>
        </div>
    )
};