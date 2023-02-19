import Portfolio from "./../../Content/Portfolio/Portfolio";
import Advantages from "./../../Content/Advantages/Advantages"
import Intro from './../../Content/Intro/Intro';

interface IModeTheme {
	toggleColorMode: () => void;
}

const HomePage = ({ toggleColorMode }: IModeTheme) => {
	return (
		<main className="main">
			<Intro />
			<Advantages toggleColorMode={toggleColorMode} />
			<Portfolio />

		</main>
	);
}

export default HomePage;