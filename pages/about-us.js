import React from 'react';
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
			<section className='lg:flex lg:relative'>
				<img
					src='/assets/about/mobile/image-hero.jpg'
					srcSet='/assets/about/tablet/image-hero.jpg 768w,
									/assets/about/desktop/image-hero.jpg 1280w'
					alt='Picture of laptop with architectural blueprints'
					className='w-full lg:w-1/2'
				/>
				<div className='bg-white py-20 px-6 lg:absolute lg:p-0 lg:w-2/3 lg:bottom-0 lg:right-0 lg:flex lg:flex-col lg:justify-end lg:h-445px'>
					<h1
						className='hidden lg:block lg:font-bold lg:capitalize lg:text-very-light-grey'
						style={{ fontSize: '12.5rem' }}
					>
						about
					</h1>
					<div className='lg:w-3/4 lg:mx-auto'>
						<h1
							className='font-bold mb-4 leading-3rem text-5xl text-very-dark-blue lg:text-6xl lg:mb-16'
							style={{ letterSpacing: '-1px' }}
						>
							Your team of professionals
						</h1>
						<p className='leading-6 tracking-normal text-dark-grey'>
							Our team of world-class <br className='lg:hidden' /> professionals
							will work with you every step of the way. Strong relationships are
							at the core of everything we do. This extends to the relationship
							our projects have with their surroundings.
						</p>
					</div>
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

			<section className='px-6 md:mb-12'>
				<h1 className='font-bold mb-4 leading-3rem text-5xl text-very-dark-blue capitalize'>
					the <br /> leaders
				</h1>
				<div className='grid gap-4 md:grid-cols-2'>
					{leaderData.map(({ src, name }) => {
						return <LeaderCard key={src} src={src} name={name} />;
					})}
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
