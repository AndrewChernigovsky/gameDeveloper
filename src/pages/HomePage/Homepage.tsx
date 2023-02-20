import About from "../../Content/About/About";
import Intro from "../../Content/Intro/Intro";
import Portfolio from "../../Content/Portfolio/Portfolio";
import Advantages from "./../../Content/Advantages/Advantages"
import Skills from './../../Content/Skills/Skills';

const HomePage = () => {
	return (
		<main className="main">
			<Intro />
			<Skills />
			<About />
			<Advantages/>
			<Portfolio />
		</main>
	);
}

export default HomePage;