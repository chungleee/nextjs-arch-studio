import React from 'react';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import LeaderCard from '../components/LeaderCard';

const AboutUs = () => {
	const leaderData = [
		{
			name: 'Jake Richard',
			src: '/assets/about/desktop/avatar-jake.jpg',
		},
		{
			name: 'Thompson Smith',
			src: '/assets/about/desktop/avatar-thompson.jpg',
		},
		{
			name: 'Jackson Rourke',
			src: '/assets/about/desktop/avatar-jackson.jpg',
		},
		{
			name: 'Maria Simpson',
			src: '/assets/about/desktop/avatar-maria.jpg',
		},
	];
	return (
		<div>
			<section>
				<img
					src='/assets/about/mobile/image-hero.jpg'
					alt='Picture of laptop with architectural blueprints'
				/>
				<div className='bg-white py-20 px-6'>
					<h1
						className='font-bold mb-4 leading-3rem text-5xl text-very-dark-blue'
						style={{ letterSpacing: '-1px' }}
					>
						Your team of professionals
					</h1>
					<p className='leading-6 tracking-normal text-dark-grey'>
						Our team of world-class <br /> professionals will work with you
						every step of the way. Strong relationships are at the core of
						everything we do. This extends to the relationship our projects have
						with their surroundings.
					</p>
				</div>
			</section>

			<hr className='ml-6 mb-20 w-16' color='#C8CCD8' />

			<section className='px-6 pb-20'>
				<h1 className='font-bold mb-4 leading-3rem text-5xl text-very-dark-blue capitalize'>
					Our <br /> heritage
				</h1>
				<div className='leading-6 tracking-normal text-dark-grey'>
					<p>
						Founded in 2007, we started as a trio of architects. Our
						complmentary skills and relentless attention to detail turned Arch
						into one of the most sought after boutique firms in the country.
					</p>
					<p className='my-8'>
						Specializing in Urban Design allowed us to focus on creating
						exceptional structures that live in harmony with their surroundings.
						We consider every detail from every surrounding element to inform
						our designs.
					</p>
					<p>
						Our small team of world-class professionals provides input on every
						project.
					</p>
				</div>
			</section>

			<section className='px-6'>
				<h1 className='font-bold mb-4 leading-3rem text-5xl text-very-dark-blue capitalize'>
					the <br /> leaders
				</h1>
				{leaderData.map(({ src, name }) => {
					return <LeaderCard src={src} name={name} />;
				})}
			</section>
		</div>
	);
};

export default AboutUs;
