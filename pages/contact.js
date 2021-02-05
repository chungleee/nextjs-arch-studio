import React from 'react';
import ContactDetailCard from '../components/ContactDetailCard';
import H1 from '../components/H1';
import { contactDetails } from '../data/contact';

const Contact = () => {
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
					<H1>
						Tell us about <br /> your project
					</H1>
					<p className='leading-6 mb-12 text-left text-sm lg:w-445px'>
						We’d love to hear more about your <br /> project. Please, leave a
						message <br />
						below or give us a call. We have two <br /> offices, one in Texas
						and one in <br />
						Tennessee. If you find yourself nearby, <br /> come say hello!
					</p>
				</section>
				<section className='pt-10 pb-20 px-6'>
					<H1>
						Contact <br /> Details
					</H1>
					{contactDetails.map((contactDetail) => {
						return (
							<ContactDetailCard
								key={contactDetail.phone}
								contactDetail={contactDetail}
							/>
						);
					})}
				</section>

				<section>
					<H1>
						Connect <br /> with us
					</H1>
				</section>
			</main>
		</div>
	);
};

export default Contact;
