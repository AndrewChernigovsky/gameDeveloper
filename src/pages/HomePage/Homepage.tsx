import Portfolio from "./../../Content/Portfolio/Portfolio";
import Advantages from "./../../Content/Advantages/Advantages"

interface IModeTheme {
	toggleColorMode: () => void;
}

const HomePage = ({ toggleColorMode }: IModeTheme) => {
	return (
		<main className="main">
			<Advantages toggleColorMode={toggleColorMode} />
			<Portfolio />

		</main>
	);
}

export default HomePage;