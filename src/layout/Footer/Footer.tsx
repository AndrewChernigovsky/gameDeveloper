import { Flex, Grid, Container, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Cursor from './../Cursor/Cursor';

const Footer = () => {
	const color = useColorModeValue("#0a0a0a", "#8b00ff");

	return (<>
		<footer>
			<Container
				maxW={{ lg: "1440px" }}
				borderTop={`1px solid `}
			>
				<Grid
					m="0 auto"
					alignContent="center"
					justifyContent="center"
					p={"20px 20px"}
					gap="20px"
				>
					<Text textAlign="center">Contact me</Text>
					<Flex alignItems="center" justifyContent="center">
						<Link to="https://vk.com/im?media=&sel=307022061" className="social-link link">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 2 48 45"
								width="55px"
								height="55px"
								fill={color}
							>
								<path d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23c12.683,0,23-10.318,23-23S37.683,2,25,2z M34.973,29.535 c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557 c-1.397-0.915-2.86-2.689-3.888-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0 c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589 c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454 s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.828,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82 c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19 c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711 c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.442,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393 c0.232-0.133,0.225-0.13,0.543-0.13S35.832,19,36.532,19c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.516,2.607-2.234,4.797 C32.943,27.793,32.63,27.457,34.973,29.535z" />
							</svg>
						</Link>
						<Link to="https://t.me/ImGospodin" className="social-link link">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="12 10 48 50"
								width="55px"
								height="55px"
								baseProfile="basic"
								fill={color}
							>
								<path d="M36,12c13.255,0,24,10.745,24,24S49.255,60,36,60S12,49.255,12,36S22.745,12,36,12z M44.279,45.783	c0.441-1.354,2.51-14.853,2.765-17.513c0.077-0.806-0.177-1.341-0.676-1.58c-0.603-0.29-1.496-0.145-2.533,0.229	c-1.421,0.512-19.59,8.227-20.64,8.673c-0.995,0.423-1.937,0.884-1.937,1.552c0,0.47,0.279,0.734,1.047,1.008	c0.799,0.285,2.812,0.895,4.001,1.223c1.145,0.316,2.448,0.042,3.178-0.412c0.774-0.481,9.71-6.46,10.351-6.984	c0.641-0.524,1.152,0.147,0.628,0.672c-0.524,0.524-6.657,6.477-7.466,7.301c-0.982,1.001-0.285,2.038,0.374,2.453	c0.752,0.474,6.163,4.103,6.978,4.685c0.815,0.582,1.641,0.846,2.398,0.846S43.902,46.94,44.279,45.783z" />
							</svg>
						</Link>
						<Link to="mailto:stiem.ru@mail.ru" className="social-link link">
							<svg fill={color} height="55px" width="55px" version="1.1" id="Layer_1"
								viewBox="0 0 512 512">
								<g>
									<g>
										<path d="M459.473,398.099h-53.08c-4.58,0-8.294,3.713-8.294,8.294c0,4.58,3.713,8.294,8.294,8.294h28.889
			C389.781,466.16,325.192,495.413,256,495.413c-63.949,0-124.071-24.903-169.291-70.122C41.491,380.071,16.587,319.949,16.587,256
			c0-38.695,9.443-77.13,27.307-111.149c2.13-4.055,0.568-9.069-3.487-11.199c-4.055-2.131-9.07-0.57-11.199,3.487
			C10.101,173.527,0,214.629,0,256c0,68.38,26.628,132.668,74.981,181.019S187.62,512,256,512
			c75.775,0,146.375-32.824,195.179-90.365v37.838c0,4.58,3.713,8.294,8.294,8.294c4.58,0,8.294-3.713,8.294-8.294v-53.08
			C467.767,401.813,464.053,398.099,459.473,398.099z"/>
									</g>
								</g>
								<g>
									<g>
										<path d="M437.019,74.981C388.668,26.628,324.38,0,256,0c-40.549,0-79.333,9.206-115.277,27.364
			c-30.38,15.347-57.772,36.991-79.902,63.007V52.527c0-4.58-3.713-8.294-8.294-8.294c-4.58,0-8.294,3.713-8.294,8.294v53.08
			c0,4.58,3.713,8.294,8.294,8.294h53.08c4.58,0,8.294-3.713,8.294-8.294c0-4.58-3.713-8.294-8.294-8.294H76.771
			c20.1-22.646,44.508-41.543,71.431-55.144C181.805,25.194,218.074,16.587,256,16.587c63.949,0,124.071,24.903,169.291,70.122
			c45.219,45.22,70.122,105.341,70.122,169.291c0,38.695-9.443,77.13-27.307,111.149c-2.13,4.055-0.568,9.069,3.487,11.199
			c1.231,0.646,2.549,0.952,3.848,0.952c2.984,0,5.866-1.615,7.349-4.44C501.899,338.473,512,297.371,512,256
			C512,187.62,485.372,123.332,437.019,74.981z"/>
									</g>
								</g>
								<g>
									<g>
										<path d="M379.853,141.546H132.147c-19.207,0-34.834,15.626-34.834,34.834v168.086c0,19.207,15.627,34.834,34.834,34.834h247.706
			c19.207,0,34.834-15.627,34.834-34.834V176.38C414.687,157.173,399.06,141.546,379.853,141.546z M132.147,158.134h247.706
			c1.699,0,3.336,0.251,4.897,0.687l-110.182,103.7c-10.413,9.799-26.725,9.8-37.137,0l-110.181-103.7
			C128.812,158.385,130.449,158.134,132.147,158.134z M113.901,344.466V176.38c0-2.208,0.414-4.316,1.136-6.276L211,260.424
			l-95.964,90.319C114.314,348.783,113.901,346.675,113.901,344.466z M379.853,362.713H132.147v0c-1.699,0-3.336-0.251-4.897-0.687
			l95.851-90.214l2.961,2.788c8.393,7.9,19.165,11.849,29.937,11.849s21.544-3.95,29.937-11.849l2.961-2.788l95.851,90.214
			C383.188,362.462,381.551,362.713,379.853,362.713z M398.099,344.466c0,2.208-0.414,4.316-1.136,6.276L301,260.422l95.964-90.318
			c0.722,1.961,1.136,4.068,1.136,6.276V344.466z"/>
									</g>
								</g>
							</svg>
						</Link>
					</Flex>
					<Text textAlign="center">© Alexandr Volyanskiy <br /> All content and trademarks property of their respective owners. 2023</Text>
				</Grid>
			</Container>
		</footer>
		<Cursor/>
  
  </>

  );
};

export default Footer;