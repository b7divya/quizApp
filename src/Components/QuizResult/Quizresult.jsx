import React from 'react'
import './Quizresult.css'

function Quizresult (props) {
    return (
        <>
        <div className="show-score">
            Your Score: {props.score} <br />
            Total Score: {props.totalScore}
        </div>
        <button className="next" onClick={props.tryAgain}>Try Again</button>
        </>
    )
}

export default Quizresult