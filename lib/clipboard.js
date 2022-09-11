import { useState } from "react";
import toast from "react-hot-toast";

export default function ClipBoard({ timeout = 2000 } = {}) {
	const [error, setError] = useState(null);
	const [copied, setCopied] = useState(false);
	const [copyTimeout, setCopyTimeout] = useState(null);

	const handleCopyResult = (value) => {
		setCopyTimeout(setTimeout(() => setCopied(false), timeout));
		setCopied(value);
		toast.dismiss();
		toast.success("Copied to clipboard!");
	};

	const copy = (valueToCopy) => {
		if ("clipboard" in navigator) {
			navigator.clipboard
				.writeText(valueToCopy)
				.then(() => handleCopyResult(true))
				.catch((err) => setError(err));
		} else {
			setError(new Error("useClipboard: navigator.clipboard is not supported"));
		}
	};

	const reset = () => {
		setCopied(false);
		setError(null);
		clearTimeout(copyTimeout);
	};

	return { copy, reset, error, copied };
}
