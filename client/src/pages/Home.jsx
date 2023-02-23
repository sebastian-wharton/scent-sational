import React from 'react';
import Newsletter from '../components/Newsletter';
import Banner from '../components/Banner';
import AdCards from '../components/AdCards';

const Home = () => {
	return (
		<>
			<div className='bg-pink1 text-pinkText'>
				<div className='border-2 h-60 w-screen bg-pink5'>
					<Banner />
				</div>
				<div className='border-2 h-20 w-screen bg-pink4'>
					<Newsletter />
				</div>
				<div className='border-2 w-screen bg-pink5'>
					<AdCards />
				</div>
			</div>
		</>
	);
};

export default Home;
