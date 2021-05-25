import styles from './CalcDirectionsCss.css';

export const PopupModal = ({handleButtonClick, variant}) => {

   const variantDetails = [
       {variant: "Monthly", details: 'Your total monthly payment is determined by dividing the total amount owed by length of loan.'},
       {variant: "Interest", details: "This is the total amount of interest that you will pay on top of the original amount you wish to borrow."},
       {variant: "Total", details: "This is the total amount you will pay over the course of your loan duration."}
   ]


    const handleButtonClicked = () =>{
        handleButtonClick();
    };

    const filteredVariant = variantDetails.filter((singleObj) => singleObj.variant === variant).map((singleItem) => {
        return(
            <>
            <h1 className="popup-txt">{singleItem.details}</h1>
            </>
        )
    })

    return(
        <div className="popup">
            {filteredVariant}
            <button onClick={handleButtonClicked} className="close-button">CLOSE</button>
        </div>

    )
}