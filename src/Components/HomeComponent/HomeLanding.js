import React from 'react';
import {Header} from '../HeaderComponent/Header';
import {CalculatorLanding} from '../CalculatorComponent/CalculatorLanding';
import styles from './HomeLandingCss.css';

export const HomeLanding = () => {
    const houseImage ="https://res.cloudinary.com/dm3tfsraw/image/upload/v1621964921/kisspng-blue-house-clip-art-house-blue-cliparts-5a7947b0a4cc91.904572551517897648675_mmwthr.png";

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