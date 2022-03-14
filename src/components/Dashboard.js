import React from 'react'; 
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Login } from './login';
import { propTypes } from 'react-bootstrap/esm/Image';

export function Dashboard(props) {
    console.log(props);

    let dashboardInfo = [{"cardTitle" : "CO2 Generated in One Year", "cardDisplay": props.scoreData[0]["co2/year"]},
                        {"cardTitle" : "Sustainability Score:", "cardDisplay": props.scoreData[0]["sustainabilityScore"]},
                        {"cardTitle" : "Equivalent Earths Used:", "cardDisplay": props.scoreData[0]["equivalentEarths"]}];

    const displayCards = dashboardInfo.map((card) => {
        return (
            <div className='dashboardCard'>
                <p className='bold titleCard'>{card.cardTitle}</p>
                <p className='dataDisplay'>{card.cardDisplay}</p> 
            </div>
        )
    });

    if(!props.loggedIn) {
        return <Login loginCallback={props.loginCallback} source="/dashboard"/>
    } else {
        return(
            <main>
                <h1 className='text-center bold greeting'>Hello User</h1>
                {/* Profile Picture */}
                <div className='container spaceBetween centerElement'>
                    {displayCards}    
                </div>
                <div className='dashboardCard long'>
                    <p className='bold titleCard'>Earth Day:</p>
                    <p className='dataDisplay'>(Represent the date that earth's yearly carbon threshold is passed if everyone lives the same way as you)</p>
                    <p className='dataDisplay'> March 25th</p>
                </div>
                <p className='bold titleCard firstTitleCard'>Questions answered correct:</p>
                <ProgressBar variant="success" animated now={props.score[0]} max={props.score[1]} label={(props.score[1] === 0 ? '0' : props.score[0] / props.score[1] * 100 + '%')} className='barChart' />
                <p className='bold titleCard firstTitleCard'>Improvement:</p>
                <ProgressBar variant="primary" animated now={25}  label={40 + '%'}className='barChart'/>
            </main>
        );
    }
}

