import React from 'react';

const InputField = ({ name, className }) => {
	return (
		<div className={`flex flex-col ${className ? className : ''}`}>
			<label
				className='pl-8 capitalize font-bold text-xl text-light-grey'
				htmlFor={name}
			>
				{name}
			</label>
			<input
				style={{ borderBottom: '1px solid black' }}
				name={name}
				type='text'
			/>
		</div>
	);
};

export default InputField;
