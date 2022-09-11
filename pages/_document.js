import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles]),
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100;200;300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

					<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
					<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
					<link rel="manifest" href="/manifest.json" />

					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
					<meta name="theme-color" content="#ffffff" />

					<meta name="title" content="CodeWars Kata Fetcher" />

					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://codewars-kata-fetcher.vercel.app/" />
					<meta property="og:title" content="CodeWars Kata Fetcher" />
					<meta property="og:description" content="A small online tool to fetch the codewars kata's information using the kata url." />
					<meta property="og:image" content="/thumbnail.png" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:url" content="https://codewars-kata-fetcher.vercel.app/" />
					<meta name="twitter:title" content="CodeWars Kata Fetcher" />
					<meta name="twitter:description" content="A small online tool to fetch the codewars kata's information using the kata url." />
					<meta name="twitter:image" content="/thumbnail.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
