import { useState } from 'react';

const Cards = (props) => {
	return (
		<div className="cards">
			{[ ...Array(12) ].map((x, i) => {
				return (
					<div key={i} className={`card${i}`}>
						<img alt="img" src={require('../Images/joker.jpg')} />
						<p>Villain</p>
					</div>
				);
			})}
		</div>
	);
};

/*require('../Images/joker.jpg').default*/

export default Cards;
