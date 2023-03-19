import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);
