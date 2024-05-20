import React, { useState } from 'react'
import './Quiz.css'
import Questions from '../Questions/Questions'
import Quizresult from '../QuizResult/Quizresult';

function Quiz () {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion<Questions.length-1){
            setCurrentQuestion(currentQuestion+1);
            setSelected(0);
        } else {
            setShowResult(true);
        }
    }

    const updateScore = () => {
        if (selected ===Questions[currentQuestion].answer){
            setScore(score+1);
        }
    }

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setSelected(0);
        setScore(0);

    }
    return (
        <div className="main">
            <div className="main-container">
                {showResult ? (
                    <Quizresult score={score} totalScore={Questions.length} tryAgain={resetAll} />               
                ):(
                <>
                <div className="main-container-header">
                    <h1>Welcome To The Quiz App</h1>
                </div>
                <div className="main-container-section">
                    <div className="main-container-section-question">
                        <span id="number">{currentQuestion+1}.</span>
                        <span id="text">{Questions[currentQuestion].question}</span>
                    </div>
                    <div className="main-container-section-options">
                        {Questions[currentQuestion].options.map((option, i) => {
                            return (
                                <button 
                                // className="option-btn"
                                className={`option-btn ${
                                    selected == i+1?"checked":null
                                }`}
                                    onClick={() => setSelected(i+1)}
                                >
                                    {option}
                                </button>
                            )
                        })}
                    </div>
                    <div className="main-container-section-next">
                        <button className="next" onClick={changeQuestion}>Next</button>
                    </div>
                </div>
                </>
            )}
            </div>
        </div>
    )
}

export default Quiz;