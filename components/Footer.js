import { Container, Row, Col, Stack } from "react-bootstrap";

export default function Footer() {
	const links = [
		{ url: "https://github.com/vijayhardaha/codewars-kata-fetcher/", label: "Source Code" },
		{ url: "https://github.com/vijayhardaha/codewars-kata-fetcher/issues", label: "Issues" },
		{ url: "https://twitter.com/vijayhardaha/", label: "Twitter" },
		{ url: "https://pph.me/vijayhardaha/", label: "PeoplePerHour" },
	];

	return (
		<footer className="site-footer" style={{ fontSize: "0.75em" }}>
			<Container>
				<hr className="border border-primary border-1 opacity-50" />

				<Row className="pb-3">
					<Col>
						<p className="mb-1 mb-sm-0">
							Copyright&copy; 2022,{" "}
							<a href="https://twitter.com/vijayhardaha/" target="_blank" rel="noreferrer">
								Vijay Hardaha
							</a>
						</p>
					</Col>
					<Col sm="auto">
						<Stack direction="horizontal" gap={3}>
							{links.map(({ url, label }, i) => {
								return (
									<a key={`footer-link-${i}`} href={url} target="_blank" rel="noreferrer">
										{label}
									</a>
								);
							})}
						</Stack>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
