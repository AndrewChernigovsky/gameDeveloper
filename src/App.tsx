<<<<<<< HEAD
import Header from "./layout/Header/Header";
import HomePage from "./pages/HomePage/Homepage";
import Skills from "./Content/Skills/Skills";
=======
import Header from './layout/Header/Header';
import HomePage from './pages/HomePage/Homepage';
import Footer from './layout/Footer/Footer';
import './App.css';
import { useColorMode } from '@chakra-ui/react';
>>>>>>> 9066a2166097aa8745e09a372626281de2bd0923

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
<<<<<<< HEAD
		<div>
			<Header/>
			<Skills/>
=======
		<div className="wrapper">
			<Header
				colorMode={colorMode}
				toggleColorMode={toggleColorMode}
				isDark={isDark}
			/>
>>>>>>> 9066a2166097aa8745e09a372626281de2bd0923
			<HomePage />
			<Footer
				colorMode={colorMode}
				toggleColorMode={toggleColorMode}
				isDark={isDark}
			/>
		</div>
	);
}

export default App;
