import React from 'react';
import Hamburger from './icons/Hamburger';
import Link from 'next/link';

const Header = () => {
	const handleNavbar = () => {
		const menu = document.getElementById('menu');
		menu.classList.toggle('hidden');
	};

	return (
		<header className='relative'>
			<div className='border-none flex justify-between items-center px-8 py-8 md:px-0'>
				<Link href='/'>
					<img
						className='h-8 cursor-pointer'
						src='/assets/logo.svg'
						alt='Arch Logo'
					/>
				</Link>
				<ul
					id='menu'
					className='hidden absolute flex flex-col justify-evenly items-center left-0 h-240px w-full bg-very-light-grey font-bold text-black md:static md:bg-white md:flex md:flex-row md:h-auto md:text-medium-grey md:mx-auto lg:ml-24'
					style={{ top: '5rem' }}
				>
					<li>
						<Link href='/portfolio'>Portfolio</Link>
					</li>
					<li className='md:mx-16'>
						<Link href='/about-us'>About Us</Link>
					</li>
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
				<span
					id='burger'
					onClick={handleNavbar}
					className='md:hidden cursor-pointer'
				>
					<Hamburger />
				</span>
			</div>
		</header>
	);
};
export default Header;
