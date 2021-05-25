import styles from './CalcDirectionsCss.css';
import {PopupModal} from './PopupModal';
import React, {useState} from 'react';


export const CalcDirections = ({calcData}) => {
    const [mouseHover, setMouseHover] = useState(false);

    const handleMouseEnter = () => {
      setMouseHover(true)
    };

    const closeModal = () => {
        setMouseHover(false);
    }

    if(calcData?.monthlyPayment === 0){
        return null;
    }

    return(
           <>
           <div className="top-info" onMouseEnter={handleMouseEnter}>
               <h3 className="label">Monthly Payment</h3>
               <h4 className="data">${calcData?.monthlyPayment}</h4>
           </div>
           {mouseHover ? <PopupModal handleButtonClick={closeModal} /> : null}
           <div className="bottom-info">
               <h3 className="label">Total Interest Paid</h3>
               <h4 className="data">${calcData?.totalInterest}</h4>
           </div>
           <div className="middle-info">
               <h3 className="label">Total Payment</h3>
               <h4 className="data">${calcData?.totalPayment}</h4>
           </div>
           </>
    )
}