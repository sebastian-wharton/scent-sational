import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='flex gap-x-2 bg-pink4 text-pink5 justify-end'>
			<NavLink
				className={({ isActive }) => (isActive ? 'active' : undefined)}
				to='/home'>
				<p className='p-2'>Home</p>
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? 'active' : undefined)}
				to='/store'>
				<p className='p-2'>Shop</p>
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? 'active' : undefined)}
				to='/auth'>
				<p className='p-2'>Auth</p>
			</NavLink>
			<div className='dropdown'>
				<p className='p-2'>More</p>
			</div>
		</div>
	);
};

export default Nav;
