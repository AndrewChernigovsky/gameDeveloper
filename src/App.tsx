import Header from './layout/Header/Header';
import HomePage from './pages/HomePage/Homepage';
import Footer from './layout/Footer/Footer';
import './App.css';
import { useColorMode } from '@chakra-ui/react';

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<div className="wrapper">
			<Header
				colorMode={colorMode}
				toggleColorMode={toggleColorMode}
				isDark={isDark}
			/>
			<HomePage />
			<Footer/>
		</div>
	);
}

export default App;
