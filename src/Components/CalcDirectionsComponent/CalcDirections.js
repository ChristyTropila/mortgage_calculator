import styles from './CalcDirectionsCss.css';
import {PopupModal} from './PopupModal';
import React, {useState} from 'react';

export const CalcDirections = ({calcData}) => {
    const [mouseHover, setMouseHover] = useState(false);
    const [variant, setVariant] = useState('');

    if(calcData?.monthlyPayment === 0){
      return null;
    };  

    const handleMouseEnterMonthly = (evt) => {
      setMouseHover(true);
      setVariant('Monthly');
    };

    const handleMouseEnterInterest = (evt) => {
      setMouseHover(true)
      setVariant('Interest');
    };

    const handleMouseEnterTotal = (evt) => {
      setMouseHover(true)
      setVariant('Total');
    };

    const closeModal = () => {
        setMouseHover(false);
    }

    return(
           <>
           <div className="top-info">
               <h3 className="label" onClick={handleMouseEnterMonthly}>Monthly Payment</h3>
               <h4 className="data">${calcData?.monthlyPayment}</h4>
           </div>
           {mouseHover ? <PopupModal handleButtonClick={closeModal} variant={variant} /> : null}
           <div className="bottom-info" value="interest" >
               <h3 className="label" onClick={handleMouseEnterInterest}>Total Interest Paid</h3>
               <h4 className="data">${calcData?.totalInterest}</h4>
           </div>
           <div className="middle-info" value="total" >
               <h3 className="label" onClick={handleMouseEnterTotal}>Total Payment</h3>
               <h4 className="data">${calcData?.totalPayment}</h4>
           </div>
           </>
    )
}