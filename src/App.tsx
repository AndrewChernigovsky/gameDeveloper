import Header from "./layout/Header/Header";
import HomePage from "./pages/HomePage/Homepage";
import Footer from "./layout/Footer/Footer";
import "./App.css";

import {useState} from "react";

import { useColorMode, Box } from "@chakra-ui/react";

import Cursor from './layout/Cursor/Cursor';

import Project1 from './Content/Portfolio/project1'
import Project2 from './Content/Portfolio/project2'
import Project3 from './Content/Portfolio/project3'

import NotFoundPage from './pages/NotFoundPage'

import AboutMePage  from './pages/AboutMePage/AboutMePage'

import { Route, Routes } from 'react-router-dom';

import "@fancyapps/ui/dist/fancybox/fancybox.css";

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
	const [opacityHeader, setOpacityHeader] = useState("0.1");

	return (
		<div className={`${isDark ? "wrapper-dark" :  " wrapper-ligth"  }`}>
			<div className="all">
				<Header
					toggleColorMode={toggleColorMode}
					isDark={isDark}
					opacityHeader={opacityHeader}

				/>
				<Routes>
					<Route path="/" element={<HomePage isDark={isDark} setOpacityHeader={setOpacityHeader} />} />
					<Route path="/about" element={<AboutMePage isDark={isDark} />} />
					<Route path="/project1" element={<Project1 />} />
					<Route path="/project2" element={<Project2 />} />
					<Route path="/project3" element={<Project3 />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
				<Footer />

			</div>

			<Box display={['none', 'none', 'none', 'none', 'none', 'block', 'block',]} className={`${isDark ? 'dark-theme' : ''}`}>
				<Cursor /></Box> 
		</div>
	);
}

export default App;
