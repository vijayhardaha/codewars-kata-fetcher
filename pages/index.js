import Head from "next/head";
import { Toaster } from "react-hot-toast";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";

export default function Home() {
	return (
		<div id="page">
			<Head>
				<title>CodeWars Kata Fetcher</title>
				<meta name="description" content="A small online tool to fetch the codewars kata's information using the kata url." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main" id="content">
				<Header />
				<Search />
				<Footer />
				<Toaster position="top-right" />
			</main>
		</div>
	);
}
