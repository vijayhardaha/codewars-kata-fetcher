import { Button } from "react-bootstrap";
import { HiOutlineClipboardCheck, HiOutlineClipboardCopy } from "react-icons/hi";
import isEmpty from "just-is-empty";

import ClipBoard from "./clipboard";

// CONSTANTS
const corsAnywhere = "https://cors-anywhere.alca.tv";
const codewarsBase = "https://www.codewars.com/api/v1";
const codewarsReg = /^https?:\/\/(www\.)?codewars\.com\/kata\/((?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+)/;

export const examples = [
	"https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0",
	"https://www.codewars.com/kata/53b138b3b987275b46000115",
	"https://www.codewars.com/kata/55ea170313b76622b3000014",
	"https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b",
	"https://www.codewars.com/kata/63022799acfb8d00285b4ea0",
];

export const isValidUrl = (url) => codewarsReg.test(url);

export const getKataID = (url) => {
	if (isValidUrl(url)) {
		const match = url.match(codewarsReg);
		return match[2];
	}

	return null;
};

export const api = async (endpoint) => {
	const url = `${corsAnywhere}/${codewarsBase}/${endpoint}`;
	const res = await fetch(url);
	return res.json();
};

export const getChallenge = async (kataID) => {
	let res, error;

	try {
		res = await api(`code-challenges/${kataID}`);
	} catch (err) {
		error = err;
	}

	if (error) {
		throw error;
	}

	return res;
};

export function CopyButton({ value, type = "icon" }) {
	const { copied, copy } = ClipBoard({ timeout: 1000 });

	if (type === "icon") {
		return (
			<Button variant={copied ? "warning" : "dark"} onClick={() => copy(value)}>
				{copied ? <HiOutlineClipboardCheck /> : <HiOutlineClipboardCopy />}
			</Button>
		);
	} else if (type === "tag") {
		return (
			<Button variant={copied ? "warning" : "dark"} size="sm" className="me-2 mb-2" onClick={() => copy(value)}>
				{value}
			</Button>
		);
	} else {
		return (
			<Button variant={copied ? "warning" : "dark"} onClick={() => copy(value)}>
				{copied ? "Copied!" : "Copy Data"}
			</Button>
		);
	}
}

export const formatDate = (date) => {
	return !isEmpty(date) ? new Date(date).toLocaleDateString() : "";
};
