import React from 'react';

const ContactDetailCard = ({ contactDetail }) => {
	return (
		<div className='text-dark-grey mb-12'>
			<h2 className='capitalize font-bold mb-4'>{contactDetail.name}</h2>
			<p>Mail: {contactDetail.mail}</p>
			<p className='my-4'>Address: {contactDetail.address}</p>
			<p>Phone: {contactDetail.phone}</p>
		</div>
	);
};

export default ContactDetailCard;
