import './Chart.css'

import ChartBar from './ChartBar';

const Chart = props => {
    // First we get an array with the value of each month espense
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // With max method we get the maximun datapoint. Max method only accepts separate numbers not array
    // so we separate them with the spread operator
    const totalMaximun = Math.max(...dataPointValues)
    return (
        <div className='chart'>
            {props.dataPoints.map(datapoint => {
                return(
                    <ChartBar 
                        key={datapoint.label} 
                        value={datapoint.value} 
                        maxVal={totalMaximun} 
                        label={datapoint.label}/>
                )
            })}
        </div>
    );

}

export default Chart;