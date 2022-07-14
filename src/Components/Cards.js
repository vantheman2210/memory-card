import { useState, useEffect } from 'react';
import Score from './Score';
import '../Styles/Cards.css';

const Cards = (props) => {
	const [ imageData, setImageData ] = useState([]);

	const [ cards, setCards ] = useState([]);

	const [ singleCard, setSingleCard ] = useState([]);

	useEffect(
		() => {
			const fetchData = async () => {
				const result = await fetch('data-images.json');
				const response = await result.json();
				const shuffle = response
					.map((data) => ({ data, sort: Math.random() }))
					.sort((a, b) => a.sort - b.sort)
					.map(({ data }, i) => data);
				setImageData(shuffle);
			};
			fetchData();
		},
		[ cards ]
	);

	useEffect(
		() => {
			if (cards.length !== 0 && cards.length === 2) {
				setCards([]);
			}
		},
		[ cards ]
	);

	const clickedCard = (e) => {
		const villain = [ e.currentTarget.children[1].textContent ];
		setCards((prevState) => [ ...prevState, villain ]);
		setSingleCard(villain);
	};

	return (
		<div className="cardScoreContainer">
			<Score cards={cards} card={singleCard} />
			<div className="cardContainer">
				{imageData.map((data, i) => {
					return (
						<div onClick={clickedCard} key={i} className="cards">
							<img className="images" alt="img" src={require(`../Images/${data.url}`)} />
							<p>{data.text}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Cards;
