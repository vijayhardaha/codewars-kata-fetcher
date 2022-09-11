import { Container } from "react-bootstrap";

export default function Header() {
	return (
		<header className="site-header">
			<Container>
				<div className="mt-4">
					<h1 className="fw-bold mb-3">
						<span className="text-primary">CodeWars</span> Kata Fetcher
					</h1>
					<p>
						A small online tool to fetch the codewars kata&#39;s information using the kata url. Inspired from the codepan{" "}
						<a href="https://codepen.io/Alca/full/OJPvNmZ" target="_blank" rel="noreferrer">
							CodeWars API
						</a>{" "}
						by{" "}
						<a href="https://codepen.io/Alca" target="_blank" rel="noreferrer">
							Jacob Foster
						</a>
						.<br />
						You can copy the Kata url and paste in <strong className="text-warning">Input box</strong> and fetch the kata information, this tool has{" "}
						<strong className="text-warning">Click to copy</strong> feature to copy the data quickly and use it on for your work.
					</p>
				</div>
				<hr className="border border-primary border-2 opacity-50" />
			</Container>
		</header>
	);
}
