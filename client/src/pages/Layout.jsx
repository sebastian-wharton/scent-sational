import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
	return (
		<>
			<div className='page'>
				<Header />
				<div className='content'>
					<Outlet />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
