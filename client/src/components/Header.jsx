import React from 'react';
import Nav from './Nav';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
// TODO: account svg
// TODO arrow svg
// TODO burger svg

const Header = () => {
	return (
		<>
			<div
				className='ctn bg-pink4 text-pinkText w-screen
			 h-16 sticky top-0 flex justify-between items-center pr-2'>
				<img
					src={logo}
					alt='SCENT-sational logo'
					className='h-7 m-2'
				/>

				<div className='authBtns'>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'active' : undefined
						}
						to='/auth'>
						<button
							type='submit'
							className='px-4 py-1 border-2 text-pink5'>
							Log In
						</button>
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							isActive ? 'active' : undefined
						}
						to='/auth'>
						<button
							type='submit'
							className='px-4 py-1 m-2 border-2 text-pink5'>
							Sign Up
						</button>
					</NavLink>
				</div>
			</div>
			<Nav />
		</>
	);
};

export default Header;
