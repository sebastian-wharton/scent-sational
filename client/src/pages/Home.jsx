import React from 'react';
import Newsletter from '../components/Newsletter';
import Banner from '../components/Banner';

const Home = () => {
	return (
		<>
			<h1 className='text-2xl text-blue font-bold absolute left-20 top-60'>
				Home
			</h1>
			<Newsletter />
			<Banner />
			<div className='box1'>
				<h3>Box1</h3>
			</div>
		</>
	);
};

export default Home;
