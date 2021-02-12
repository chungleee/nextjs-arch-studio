import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/index.css';

const App = ({ Component, pageProps }) => {
	return (
		<div style={{ maxWidth: '1300px', margin: 'auto' }}>
			<div className='md:px-20 lg:px-32'>
				<Header />
				<Component {...pageProps} />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default App;
