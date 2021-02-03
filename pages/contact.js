import React from 'react';
import ContactDetailCard from '../components/ContactDetailCard';

const Contact = () => {
	const contactDetails = [
		{
			name: 'main office',
			mail: 'archone@mail.com',
			address: '1892 Chenoweth Drive TN',
			phone: '123-456-3451',
		},
		{
			name: 'office II',
			mail: 'archtwo@mail.com',
			address: '3399 Wines Lane TX',
			phone: '832-123-4321',
		},
	];
	return (
		<div>
			<picture>
				<img
					src='/assets/contact/mobile/image-hero.jpg'
					alt='Telephone hero picture'
				/>
			</picture>
			<main>
				<section className='pt-20 pb-10 px-6'>
					<h1 className='font-bold text-left leading-none mb-4 text-4xl tracking-tight md:text-6xl'>
						Tell us about <br /> your project
					</h1>
					<p className='leading-6 mb-12 text-left text-sm lg:w-445px'>
						We’d love to hear more about your <br /> project. Please, leave a
						message <br />
						below or give us a call. We have two <br /> offices, one in Texas
						and one in <br />
						Tennessee. If you find yourself nearby, <br /> come say hello!
					</p>
				</section>
				<section className='pt-10 pb-20 px-6'>
					<h1 className='capitalize font-bold leading-none mb-4 text-4xl tracking-tight md:text-6xl'>
						contact <br /> details
					</h1>
					{contactDetails.map((contactDetail) => {
						return (
							<ContactDetailCard
								key={contactDetails.phone}
								contactDetail={contactDetail}
							/>
						);
					})}
				</section>
			</main>
		</div>
	);
};

export default Contact;
