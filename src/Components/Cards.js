import { useState } from 'react';
import '../Styles/Cards.css';

const Cards = (props) => {
	return (
		<div className="cardContainer">
			{[ ...Array(12) ].map((x, i) => {
				return (
					<div key={i} className="cards">
						<img className="images" alt="img" src={require('../Images/joker.jpg')} />
						<p>Villain</p>
					</div>
				);
			})}
		</div>
	);
};

/*require('../Images/joker.jpg').default*/

export default Cards;
