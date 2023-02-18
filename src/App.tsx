import Header from "./layout/Header/Header";
import HomePage from "./pages/HomePage/Homepage";
import Skills from "./Content/Skills/Skills";
import Footer from "./layout/Footer/Footer";
import "./App.css";

import { useColorMode } from "@chakra-ui/react";

import Project1 from './../src/Content/Portfolio/projects/project1/project1'
import NotFoundPage from './pages/NotFoundPage'

import { Route, Routes } from 'react-router-dom';

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<div className="wrapper">
			<Header
				toggleColorMode={toggleColorMode}
				isDark={isDark}
			/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/project1" element={<Project1 />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			
			<Footer/>
		</div>
	);
}

export default App;
