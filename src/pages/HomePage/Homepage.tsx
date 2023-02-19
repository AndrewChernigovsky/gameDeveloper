import About from "../../Content/About/About";
import Intro from "../../Content/Intro/Intro";
import Portfolio from "../../Content/Portfolio/Portfolio";

const HomePage = () => {
	return (
		<main className="main">
			<Intro />
			<About />
			<Portfolio/>
		</main>
	);
}

export default HomePage;