import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import { data } from '../data/portfolio';

const Portfolio = () => {
	console.log('portoflio data: ', data);
	return (
		<main className='grid justify-center gap-8'>
			{data.map((item) => {
				return <PortfolioCard item={item} key={item.title} />;
			})}
		</main>
	);
};

export default Portfolio;
