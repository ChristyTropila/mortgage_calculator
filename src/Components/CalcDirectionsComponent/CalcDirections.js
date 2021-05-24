import styles from './CalcDirectionsCss.css';
import { Doughnut } from 'react-chartjs-2';


export const CalcDirections = ({data}) => {

    return(
        <>
        <Doughnut data={data}/>
        <h1>hello</h1>
        </>
    )
}