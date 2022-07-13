import React, { useEffect, useState } from 'react';
import '../Styles/Score.css';

const Score = (props) => {
	const [ score, setScore ] = useState(0);
	const [ highScore, setHighScore ] = useState(0);
	const [ currentVillain, setCurrentVillain ] = useState([]);
	const [ prevVillain, setPrevVillain ] = useState([]);

	const getHighScore = () => {
		if (score > highScore) {
			return setHighScore(score);
		}
	};

	const updateScore = () => {
		if (currentVillain !== prevVillain) {
			setScore(score + 1);
			getHighScore();
			setCurrentVillain([]);
			setPrevVillain([]);
		} else {
			setScore(0);
			setCurrentVillain([]);
			setPrevVillain([]);
		}
	}; 

  useEffect(() => { 
    console.log(props, score)
  }, [score])

	return (
		<div className="scoreContainer">
			<div className="currentScore">Score: {score}</div>
			<div className="bestScore">Best Score: {highScore}</div>
		</div>
	);
};

export default Score;
