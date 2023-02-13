import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
	return (
		<>
			<div className='h-full w-screen'>
				<Header />
				<div className='h-full w-screen'>
					<Outlet />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
