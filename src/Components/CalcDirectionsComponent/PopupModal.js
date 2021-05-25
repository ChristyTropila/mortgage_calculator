import styles from './CalcDirectionsCss.css';

export const PopupModal = ({handleButtonClick, variant}) => {


    const handleButtonClicked = () =>{
        handleButtonClick();
    };

    return(
        <div className="popup">
            <h1>hello</h1>
            <p>ljaagjaijg lkjglajglirjgijg a aegrhjsgijr 
            </p>
            <button onClick={handleButtonClicked} className="close-button">CLOSE</button>
        </div>

    )
}