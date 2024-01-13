import React from "react";
import './Feedback.css';

class Feedback extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <button type="button">Good</button>
                    <button type="button">Neutral</button>
                    <buttonv type="button">Bad</buttonv>
                </div>  
                <div>
                    <p>Good</p>s
                    <p>Neutral</p>
                    <p>Bad</p>
                </div>
            </div>
        ); 
    }
}

export default Feedback;