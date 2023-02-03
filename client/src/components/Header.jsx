import React from 'react';
import Nav from './Nav';
import logo from '../assets/logo.svg';
// TODO: account svg
// TODO arrow svg
// TODO burger svg

const Header = () => {
	return (
		<>
			<div
				className='ctn bg-pinkMenu text-pinkText w-full
			 h-28 sticky top-0 flex justify-between items-center pr-2'
			>
				<img
					src={logo}
					alt='SCENT-sational logo'
					className='h-12 m-2'
				/>
				<Nav />
				<div className='authBtns'>
					<button type='submit'>Log In</button>
					<button type='submit'>Sign Up</button>
				</div>
			</div>
		</>
	);
};

export default Header;
