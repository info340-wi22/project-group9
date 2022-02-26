import React from 'react';
import { Link} from 'react-router-dom';

export function IncorrectAnswer() {
    console.log("incorrect");
    return (
        <main className="triviaBody centerMain">
            <div className="col-sm-12">
                <div className="content">
                    <h1>Incorrect answer!</h1>
                    <p>Your answer was incorrect.</p>
                    <Link to="/trivia2" className="btn btn-lg start centerElement">Try another question</Link>
                </div>
            </div>
        </main>
    )
}