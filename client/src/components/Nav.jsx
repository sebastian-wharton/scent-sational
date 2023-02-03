import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='multi-button'>
			<NavLink
				className={({ isActive }) => (isActive ? 'active' : undefined)}
				to='/store'
			>
				<p className='p-4 text-lg'>Shop</p>
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? 'active' : undefined)}
				to='/auth'
			>
				<p className='p-4 text-lg'>Auth</p>
			</NavLink>
			<div className='dropdown'>
				<p className='p-4 text-lg'>See more</p>
				<p>SVG</p>
				{/* TODO: Transition rotate, list expands & Links to Home, 404, & Product Page*/}
			</div>
		</div>
	);
};

export default Nav;
