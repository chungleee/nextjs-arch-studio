import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import Card from '../components/Card';
import { nanoid } from 'nanoid';
import Pagination from '../components/Pagination';
import { features, heroes } from '../public/data';

const Home = () => {
	const [hero, setHero] = useState(0);

	const handleSelectHero = (index) => {
		setHero(index);
	};

	return (
		<div>
			<section
				className={`bg-img-paramour  bg-cover bg-no-repeat flex items-center h-screen px-8 text-white md:px-0 md:bg-img-paramour-tablet md:justify-center lg:mb-20 lg:relative lg:bg-${heroes[hero]}`}
			>
				<div className='md:w-3/5'>
					<h1 className='font-bold leading-none mb-4 text-4xl tracking-tight md:text-6xl'>
						Project <br /> Paramour
					</h1>
					<p className='leading-6 mb-12 text-left text-sm lg:w-445px'>
						Project made for an art museum near Southwest <br /> London. Project
						Paramour is a statement of bold, <br /> modern architecture.
					</p>

					<Button className='font-bold text-sm'>
						<Link href='/portfolio'>See Our Portfolio</Link>
					</Button>
				</div>
				<div
					className='lg:absolute lg:flex lg:bottom-0'
					style={{ left: '-80px' }}
				>
					<Pagination handleSelectHero={handleSelectHero} heroes={heroes} />
				</div>
			</section>

			<section className='px-8 md:px-0 lg:mt-20'>
				<div className='py-12 lg:relative'>
					<hr className='border-light-grey w-16 mb-12 md:hidden' />
					<h1
						className='hidden text-very-light-grey md:block md:font-bold md:text-medium lg:text-huge lg:absolute'
						style={{
							letterSpacing: '-3px',
							top: '-100px',
						}}
					>
						Welcome
					</h1>
					<div className='lg:flex lg:justify-end'>
						<div className='leading-6 text-sm text-dark-grey lg:flex lg:flex-col lg:w-445px lg:mt-auto lg:mx-auto'>
							<h1 className='font-bold mb-10 leading-none text-very-dark-blue text-4xl tracking-tight md:text-5xl lg:text-6xl'>
								Welcome to <br /> Arch Studio
							</h1>
							<p className='mb-6'>
								We have a unique network and skillset to help bring your
								projects to life. Our small team of highly skilled individuals
								combined with our large network put us in a strong position to
								deliver exceptional results.
							</p>
							<p className='mb-6'>
								Over the past 10 years, we have worked on all kinds of projects.
								From stations to high-rise buildings, we create spaces that
								inspire and delight.
							</p>
							<p className='mb-6 lg:mb-0'>
								We work closely with our clients so that we understand the
								intricacies of each project. This allows us to work in harmony
								the surrounding area to create truly stunning projects that will
								stand the test of time.
							</p>
						</div>
						<img
							className='hidden lg:block'
							src='/assets/home/desktop/image-welcome.jpg'
							alt='welcome image'
						/>
					</div>
				</div>
			</section>

			<section className='bg-img-small-team  bg-cover bg-no-repeat flex items-center h-screen px-8 text-white md:px-0 md:bg-img-small-team-tablet md:justify-center'>
				<div className='md:w-3/5'>
					<h1 className='font-bold leading-none mb-8 text-4xl tracking-tight md:text-5xl'>
						Small team, <br /> big ideas
					</h1>
					<Button className='font-bold text-sm'>
						<Link href='/about-us'>About Us</Link>
					</Button>
				</div>
			</section>

			<section className='px-8 py-12 md:px-0'>
				<div>
					<div className='mb-8 flex justify-between items-center'>
						<h1 className='font-bold  text-4xl tracking-tight md:text-5xl'>
							Featured
						</h1>
						<span className='hidden md:inline'>
							<Button>
								<Link href='/portfolio'>See All</Link>
							</Button>
						</span>
					</div>
					<div className='lg:flex'>
						{features.map((feature, idx) => {
							let key = nanoid();
							return (
								<Card
									count={idx + 1}
									key={key}
									name={feature.name}
									className={`my-4 bg-no-repeat bg-cover lg:w-350px lg:h-560px bg-${feature.image} md:bg-${feature.tablet} lg:bg-${feature.desktop}`}
								/>
							);
						})}
					</div>
					<Button className='w-full md:hidden'>See All</Button>
				</div>
			</section>
		</div>
	);
};

export default Home;
