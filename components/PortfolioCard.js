import React from 'react';

const PortfolioCard = ({ item }) => {
	console.log(item);
	return (
		<div>
			<picture>
				<source
					media='(min-width: 1280px)'
					srcSet={`${item.images.desktop}`}
					alt={`${item.title}`}
				/>
				<source
					media='(min-width: 768px)'
					srcSet={`${item.images.tablet}`}
					alt={`${item.title}`}
				/>
				<img src={`${item.images.mobile}`} alt={`${item.title}`} />
			</picture>
		</div>
	);
};

export default PortfolioCard;
