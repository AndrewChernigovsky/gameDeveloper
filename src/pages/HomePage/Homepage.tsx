import About from "../../Content/About/About";
import Intro from "../../Content/Intro/Intro";
import Advantages from "./../../Content/Advantages/Advantages"
import Skills from './../../Content/Skills/Skills';
import IntroText from './../../Content/IntroText/IntroText';

interface IModeTheme {
	isDark: boolean;
	setOpacityHeader: any;
}

const HomePage = ({ isDark, setOpacityHeader }: IModeTheme) => {



	return (
		<main className='main'>
			<Intro setOpacityHeader={setOpacityHeader}/>
			<IntroText />
			<Skills />
			<Advantages/> 
			<About isDark={isDark} />
		</main>
	);
}

export default HomePage;