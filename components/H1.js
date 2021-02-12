import React from 'react';

const H1 = ({ children }) => {
	return (
		<h1
			className='font-bold mb-4 leading-3rem text-5xl text-very-dark-blue lg:text-6xl lg:mb-16'
			style={{ letterSpacing: '-1px' }}
		>
			{children}
		</h1>
	);
};

export default H1;
