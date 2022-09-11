import { useEffect, useState } from "react";
import { Form, Col, Row, Button, Alert, Stack } from "react-bootstrap";
import { GiBrightExplosion } from "react-icons/gi";
import { GoCheck } from "react-icons/go";
import { HiOutlineBell } from "react-icons/hi";
import { RiRefreshLine } from "react-icons/ri";
import isEmpty from "just-is-empty";

import { isValidUrl, getKataID, getChallenge, examples } from "../lib/utils";

export default function SearchForm({ setData }) {
	const [cache, setCache] = useState(new Map());
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [url, setUrl] = useState(null);

	const handleClick = () => {
		if (isValidUrl(url)) {
			fetchData(getKataID(url));
		}
	};

	const fetchData = async (kataID) => {
		setData({});
		setError(false);
		setLoading(true);

		if (cache.has(kataID)) {
			setData(cache.get(kataID));
		} else {
			const response = await getChallenge(kataID);
			if (response && response.success !== false) {
				setData(response);

				let oldCache = cache;
				oldCache.set(kataID, response);
				setCache(oldCache);
			} else {
				const errorMessage = response?.reason || "Couldn't complete process due to an unknown error";
				setError(errorMessage);
			}
		}

		setLoading(false);
	};

	useEffect(() => {
		const reset = () => {
			setData({});
			setError(false);
			setLoading(false);
		};

		if (isEmpty(url)) {
			reset();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	useEffect(() => {
		if (!isValidUrl(url)) {
			setError("Invalid URL: Please provide a valid Codewars Kata url. e.g.: https://www.codewars.com/kata/57089707fe2d01529f00024a");
		} else {
			setError(false);
			handleClick();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return (
		<>
			<div id="search-box">
				<Form.Group className="mb-3" controlId="search-input">
					<h5>
						<Form.Label className="mb-0">Enter the codewars kata url below:</Form.Label>
					</h5>
					<Row>
						<Col>
							<Form.Control
								type="text"
								value={url || ""}
								placeholder="e.g.: https://www.codewars.com/kata/57089707fe2d01529f00024a"
								onChange={(e) => {
									setUrl(e.target.value);
								}}
							/>
						</Col>
						<Col xs="auto" className="ps-0">
							<Button aria-label="Submit Form" disabled={loading || !isValidUrl(url) || isEmpty(url)} onClick={handleClick}>
								<GiBrightExplosion />
							</Button>
							<Button
								aria-label="Reset Form"
								className="ms-2"
								variant="dark"
								disabled={loading || isEmpty(url)}
								onClick={(e) => {
									setUrl(null);
								}}
							>
								<RiRefreshLine />
							</Button>
						</Col>
					</Row>
				</Form.Group>

				{!isEmpty(url) && !isEmpty(error) && (
					<Alert variant="info">
						<HiOutlineBell size={20} />
						<span className="ms-2">{error}</span>
					</Alert>
				)}

				{loading && !isEmpty(url) && isEmpty(error) && (
					<Alert variant="success">
						<GoCheck size={20} />
						<span className="ms-2">
							<strong>Please wait, while your request is being processed...</strong>
						</span>
					</Alert>
				)}
			</div>
			<div className="examples">
				<Stack direction="horizontal" gap="2">
					{examples.map((kataUrl, index) => (
						<Button key={index} variant="dark" size="sm" onClick={() => setUrl(kataUrl)}>{`Example ${index + 1}`}</Button>
					))}
				</Stack>
			</div>
		</>
	);
}
