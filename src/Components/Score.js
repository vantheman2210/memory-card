import React, { useEffect, useState } from 'react';
import '../Styles/Score.css';

const Score = (props) => {
	const [ score, setScore ] = useState(0);
	const [ highScore, setHighScore ] = useState(0);
	const [ selectedCards, setSelectedCards ] = useState([]);

	useEffect(
		() => {
			if (props.cards.length !== 0 && props.cards.length === 2) {
				setSelectedCards((prevCards) => [ ...prevCards, props.cards ]);
				isEqual(props.cards);
			}
		},
		[ props ]
	);

	useEffect(
		() => {
			const selectedCardsFlat = selectedCards.flat(2);

			console.log(selectedCardsFlat);

			if (selectedCardsFlat.length > 2 && selectedCardsFlat.includes(props.card.toString())) {
				console.log('here');
				getHighScore();
				setScore(0);
			} else return;
		},
		[ props.card ]
	);

	const getHighScore = () => {
		if (score > highScore) {
			return setHighScore(score);
		}
	};

	const isEqual = (arr1) => {
		if (arr1[0].join() === arr1[1].join()) {
			getHighScore();
			setScore(0);
		} else setScore(score + 1);
	};

	return (
		<div className="scoreContainer">
			<div className="currentScore">Score: {score}</div>
			<div className="bestScore">Best Score: {highScore}</div>
		</div>
	);
};

export default Score;
