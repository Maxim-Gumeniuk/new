import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CommonRouter } from './routes/common';
import { ProtectedRoutes } from './routes/protected';
import { myTheme } from './styled/my-theme';

function App() {
	const content = useRoutes([...CommonRouter, ...ProtectedRoutes]);
	return (<>
		<ThemeProvider theme={myTheme}>{content}</ThemeProvider>
	</>
	);
}

export default App;
