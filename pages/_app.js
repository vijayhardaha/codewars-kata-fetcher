import "../styles/main.scss";

import SSRProvider from "react-bootstrap/SSRProvider";
import ThemeProvider from "react-bootstrap/ThemeProvider";

function MyApp({ Component, pageProps }) {
	return (
		<SSRProvider>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</SSRProvider>
	);
}

export default MyApp;
