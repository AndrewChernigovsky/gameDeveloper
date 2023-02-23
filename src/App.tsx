import Header from "./layout/Header/Header";
import HomePage from "./pages/HomePage/Homepage";
import Footer from "./layout/Footer/Footer";
import "./App.css";

import { useColorMode } from "@chakra-ui/react";

import Project1 from './Content/Portfolio/project1'
import Project2 from './Content/Portfolio/project2'
import Project3 from './Content/Portfolio/project3'

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
				<Route path="/" element={<HomePage isDark={isDark} />} />
				<Route path="/project1" element={<Project1 />} />
				<Route path="/project2" element={<Project2 />} />
				<Route path="/project3" element={<Project3 />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />

		</div>
	);
}

export default App;
