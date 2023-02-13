import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

import Home from './pages/Home';
import Auth from './pages/Auth';
import User from './pages/User';
import Store from './pages/Store';
import Cart from './pages/Cart';
import Products from './pages/Products';
import NoPage from './pages/NoPage';
import './styles/tailwind.css';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={<Layout />}
				>
					<Route
						path='home'
						element={<Home />}
					/>
					<Route
						path='auth'
						element={<Auth />}
					/>
					<Route
						path='user'
						element={<User />}
					/>

					<Route
						path='store'
						element={<Store />}
					/>
					<Route
						path='products'
						element={<Products />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
					<Route
						path='*'
						element={<NoPage />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
