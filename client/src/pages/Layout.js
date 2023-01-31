import { Outlet, Link } from 'react-router-dom';
import Footer from './components/Footer';

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/store.js'>Store</Link>
					</li>
					<li>
						<Link to='/auth.js'>Auth</Link>
					</li>
					<li>
						<Link to='/user.js'>User</Link>
					</li>
					<li>
						<Link to='/cart.js'>Cart</Link>
					</li>
					<li>
						<Link to='/products.js'>Products</Link>
					</li>
					<li>
						<Link to='/noPage'>NoPage</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
