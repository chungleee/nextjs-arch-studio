import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

const LeaderCard = ({ src, name }) => {
	return (
		<div className='mb-8'>
			<img src={`${src}`} alt={`Photo of ${name}`} className='w-full mb-4' />
			<h1 className='font-bold text-lg leading-6'>Jake Richards</h1>
			<h2 className='font-medium leading-6 my-2'>Chief Architect</h2>
			<ul className='flex'>
				<li className='mr-3'>
					<a href='#'>
						<LinkedInIcon />
					</a>
				</li>
				<li>
					<a href='#'>
						<TwitterIcon />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default LeaderCard;
