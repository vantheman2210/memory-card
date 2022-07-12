import { useState } from 'react';

const Cards = (props) => {
	return (
		<div className="cards">
			{[ ...Array(12) ].map((x, i) => {
				return <div key={i} className={`card${i}`}>Hello</div>
			})}
		</div>
	);
};

export default Cards;
