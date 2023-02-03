import React from 'react';
import Img1 from '../assets/candle4.jpg';

const Banner = () => {
	return (
		<div className='relative'>
			<img
				src={Img1}
				alt='candles'
				className='w-20 absolute top-10 left-24'
			/>
			<div className='absolute top-15 left-14 text-xl'>
				<h1 className='text-pinkText shadow-md shadow-pinkHover'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem, necessitatibus.
				</h1>
				<button
					type='submit'
					className='w-12 h-9 bg-pinkMenu text-pinkClick'
				></button>
			</div>
		</div>
	);
};

export default Banner;
