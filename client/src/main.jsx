import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.scss';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Layout />,
// 	},
// ]);

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

{
	/* <RouterProvider router={router} />; */
}
