import React, { useEffect, useState } from 'react';
import '../Styles/Score.css';

const Score = (props) => {
	const [ score, setScore ] = useState(0);
	const [ highScore, setHighScore ] = useState(0);

	useEffect(
		() => {
			if (props.cards.length !== 0 && props.cards.length === 2) {
				console.log('Works');
				getHighScore();
				isEqual(props.cards);
			}
		},
		[ props ]
	);

	const getHighScore = () => {
		if (score > highScore) {
			return setHighScore(score);
		}
	};

	const isEqual = (arr1) => {
		if (arr1[0].join() === arr1[1].join()) setScore(0);
		else setScore(score + 1);
	};

	const getScore = () => {
		return;
	};

	return (
		<div className="scoreContainer">
			<div className="currentScore">Score: {score}</div>
			<div className="bestScore">Best Score: {highScore}</div>
		</div>
	);
};

export default Score;
