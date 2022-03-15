import React, {useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export function SustainabilityScore(props) {
    // pull data needed from props
    let vehiclePortion = props.scoreData[0]["vehiclePortion"];
    let energyPortion = props.scoreData[0]["energyPortion"];

    const[isChart, setIsChart] = useState(false);

    const toggleChart = () => {
        console.log("toggle");
        setIsChart(!isChart);
    }

    if(isChart) {
        return (
            <main className="inputMain">
                <h1 className="titleOfPage">Sustainability Score</h1>
                
                <div className="piechart">
                    <PieChart
                    data={[
                            { title: 'Vehicle C02', value: vehiclePortion, color: "#7F9183"},
                            { title: 'Energy C02', value: energyPortion, color: "#CFC0BD"}
                        ]}
                        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                        labelStyle = {{
                        fontFamily: 'Roboto'}} className="pieChart"/>
                    <PieChart />
                </div>
                <button onClick={() => toggleChart}>Here</button>
            </main>
        );
    } else {
        return(    
            <main className="inputMain">
                <h1 className="titleOfPage">Sustainability Score</h1>
                <p className="score">{isNaN(props.scoreData[0]["sustainabilityScore"]) ? 0 : (props.scoreData[0]["sustainabilityScore"] * 100).toFixed(3)} </p>


                <div className="scoreContainer" role="button">
                <p className="scoreText"> Sustainability score is a score that takes into consideration how much Co2 you produce 
                    relative to how much Co2 the Earth can sustain for an average person. A score of 100 represents
                    that the Earth could sustain if every person produced the same amount as you. Any score less
                    means that the Earth could not sustain every person living like you. A higher score is better.</p>
                </div>
                <button onClick={() => toggleChart}>Here</button>
            </main>
        );
    }
}