import { useState, useEffect, useCallback } from 'react';
import '../Styles/Cards.css';

const Cards = (props) => {
	const [ imageData, setImageData ] = useState([]);

	useEffect(() => {
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
	}, []);

	const cardClick = () => {
		console.log('clicked');
	};

	return (
		<div className="cardContainer">
			{imageData.map((data, i) => {
				return (
					<div onClick={cardClick} key={i} className="cards">
						<img className="images" alt="img" src={require(`../Images/${data.url}`)} />
						<p>{data.text}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
