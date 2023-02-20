import About from "../../Content/About/About";
import Intro from "../../Content/Intro/Intro";
import Portfolio from "../../Content/Portfolio/Portfolio";
import Advantages from "./../../Content/Advantages/Advantages"

interface IModeTheme {
	toggleColorMode: () => void;
}

const HomePage = ({ toggleColorMode }: IModeTheme) => {
	return (
		<main className="main">
			<Intro />
			<About />
			<Advantages toggleColorMode={toggleColorMode} />
			<Portfolio />
		</main>
	);
}

export default HomePage;