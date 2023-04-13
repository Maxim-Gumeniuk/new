import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import store, { persistor } from './app/store';
import reportWebVitals from './reportWebVitals';
import { CommonRouter } from './routes/common';
import { MyGlobalStyle } from './styled/global';
import { myTheme } from './styled/my-theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<App />
					<MyGlobalStyle />
				</BrowserRouter>
			</PersistGate >
		</Provider>
	</StrictMode >,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
