import Header from "./layout/Header/Header";
import HomePage from "./pages/HomePage/Homepage";
import Skills from "./Content/Skills/Skills";
import Footer from "./layout/Footer/Footer";

import { useColorMode } from "@chakra-ui/react";

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<div>
			<Header/>
			<Skills/>
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
