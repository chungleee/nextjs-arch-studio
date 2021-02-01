import React from 'react';

const PortfolioCard = ({ item }) => {
	console.log(item);
	return (
		<div>
			<img
				src={item.images.mobile}
				alt={item.title}
				srcSet={`${item.images.desktop} 1280w,
                ${item.images.tablet} 768w`}
			/>
		</div>
	);
};

export default PortfolioCard;
