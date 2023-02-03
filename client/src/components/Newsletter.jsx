import React from 'react';

const Newsletter = () => {
	return (
		<>
			<div className='newsletter'>
				<div className='wrapper w-38 h-18 bg-bg-pinkBackground'>
					<input
						type='email'
						value='email'
					/>
				</div>
				<button type='submit'>SUBSCRIBE</button>
			</div>
		</>
	);
};

export default Newsletter;
