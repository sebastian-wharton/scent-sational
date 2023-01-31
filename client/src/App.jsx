import { Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/user'>User</Link>
					</li>
					<li>
						<Link to='/auth'>Auth</Link>
					</li>
					<li>
						<Link to='/store'>Store</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
					<li>
						<Link to='/cart'>Cart</Link>
					</li>
					<li>
						<Link to='/noPage'>404</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route
					path='/'
					element={<Layout />}
				>
					<Route
						index
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
						path='cart'
						element={<Cart />}
					/>
					<Route
						path='*'
						element={<NoPage />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
