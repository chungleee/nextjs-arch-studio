import React from 'react';
import ContactDetailCard from '../components/ContactDetailCard';
import H1 from '../components/H1';
import ArrowButton from '../components/ArrowButton';
import InputField from '../components/InputField';
import { contactDetails } from '../data/contact';

const Contact = () => {
	return (
		<div>
			<picture>
				<source
					media='(min-width: 1280px)'
					srcSet='/assets/contact/desktop/image-hero.jpg'
					alt='Telephone hero picture'
				/>
				<source
					media='(min-width: 768px)'
					srcSet='/assets/contact/tablet/image-hero.jpg'
					alt='Telephone hero picture'
				/>
				<img
					className='w-full'
					src='/assets/contact/mobile/image-hero.jpg'
					alt='Telephone hero picture'
				/>
			</picture>
			<main>
				<section className='pt-20 pb-10 px-6'>
					<H1>
						Tell us about <br /> your project
					</H1>
					<p className='leading-6 mb-12 text-dark-grey text-left text-sm lg:w-445px'>
						We’d love to hear more about your <br className='md:hidden' />
						project. Please, <br className='hidden md:block' /> leave a message{' '}
						<br className='md:hidden' />
						below or give us a call. We have two <br />
						offices, one in Texas and one in <br className='md:hidden' />
						Tennessee. If you find <br className='hidden md:block' /> yourself
						nearby, <br className='md:hidden' />
						come say hello!
					</p>
				</section>
				<section className='pt-10 pb-20 px-6'>
					<H1>
						Contact <br className='md:hidden' /> Details
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

				<section className='pt-10 pb-20 px-6'>
					<H1>
						Connect <br className='md:hidden' /> with us
					</H1>
					<div className='mt-8'>
						<InputField name='name' />
						<InputField name='email' className='my-8' />
						<InputField name='message' />
					</div>
					<ArrowButton className='ml-auto' />
				</section>
			</main>
		</div>
	);
};

export default Contact;
