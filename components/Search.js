import { useState } from "react";
import { Container } from "react-bootstrap";

import Information from "./Information";
import SearchForm from "./SearchForm";

export default function Search() {
	const [data, setData] = useState({});

	return (
		<div className="search-section mt-5">
			<Container>
				<SearchForm setData={setData} />
				<hr className="border" />
				<Information data={data} />
			</Container>
		</div>
	);
}
