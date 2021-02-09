import React from 'react';

const PortfolioCard = ({ item }) => {
	return (
		<div className='relative'>
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
				<img
					className='w-full'
					src={`${item.images.mobile}`}
					alt={`${item.title}`}
				/>
			</picture>
			<div
				className='absolute text-white text-lg font-bold capitalize'
				style={{ bottom: '25px', left: '25px' }}
			>
				<h1>{item.title}</h1>
				<h2 className='font-normal text-base text-very-light-grey'>{`${item.month} ${item.year}`}</h2>
			</div>
		</div>
	);
};

export default PortfolioCard;
