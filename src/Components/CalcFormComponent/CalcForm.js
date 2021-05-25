import styles from './CalcFormCss.css';
import React, {useState, useEffect} from 'react';

export const CalcForm = ({getDataFromCalculator}) => {
    const [loanAmount, setLoanAmount] = useState();
    const [loanDuration, setLoanDuration] = useState();
    const [months, setMonth] = useState();
    const [years, setYears] = useState(true);
    const [interestRate, setInterestRate] = useState();
    const [results, setResults] = useState({monthlyPayment: 0, totalPayment: 0, totalInterest: 0, isResult: false});


    useEffect(() => {
        getDataFromCalculator(results)
    }, [results]);

    const handleSelectOptions = (evt) => {
      const value = evt.target.value;

      if(value ==="years"){
          setYears(true);
          setMonth(false)
      }else if( value === "months"){
          setMonth(true)
          setYears(false)
      }
    }

    const handleButtonClicked = (evt, sendDataToParent) => {
        evt.preventDefault();

        const interestValue = ((interestRate/100) / 12) + 1;
        const userAmount = Number(loanAmount);
        const calculatedInterest = Number(interestRate) / 100 / 12;
        const lengthOfLoan = months ? loanDuration : loanDuration * 12;

        const interestCalculation = Math.pow(1 + calculatedInterest, lengthOfLoan);
        const monthly = (userAmount * interestCalculation * calculatedInterest) / (interestCalculation - 1);

        
        if (isFinite(monthly)) {
            const monthlyPaymentCalculated = monthly.toFixed(2);
            const totalPaymentCalculated = (monthly * lengthOfLoan).toFixed(2);
            const totalInterestCalculated = (monthly * lengthOfLoan - userAmount).toFixed(2);

            setResults({
                monthlyPayment: monthlyPaymentCalculated,
                totalPayment: totalPaymentCalculated,
                totalInterest: totalInterestCalculated,
                isResult: true,
        });
        //convert payment period in years to monthly payments
       
    }
}

    return(
        <>
        <form className="form" noValidate>
            <div className="loan-amount">
                <label className="loan-amount-label" htmlFor="loanAmount">Loan Amount</label>
                <input
                 id="loanAmount"
                 type="text"
                 className="input"
                 placeholder="$"
                 onChange={e => setLoanAmount(e.target.value)}
                 name="loanAmount"/>
            </div>
            <div className="loan-term">
                <label htmlFor="loanTerm">Loan Term</label>
                <input
                 type="text"
                 className="input"
                 id="loanTerm"
                 placeholder=""
                 onChange={e => setLoanDuration(e.target.value)}
                 name="loanTerm"/>
            </div>
            <div className="select-dropdown-container" >
            <label htmlFor="duration">Duration</label>
                     <select className="select-dropdown" name="duration" onChange={handleSelectOptions}>
                         <option className="options" value="years">Years</option>
                         <option className="options" value="months">Months</option>
                     </select>
           </div>
            
            <div className="interest-rate">
                <label htmlFor="interestRate">Interest Rate</label>
                <input
                 type="text"
                 id="interestRate"
                 className="input"
                 placeholder="%"
                 onChange={e => setInterestRate(e.target.value)}
                 name="interestRate"/>
            </div>
            <div className="button-container">
            <button type="button" onClick={handleButtonClicked} className="button">Calculate!</button>
            </div>
        </form>
        </>
    )
}