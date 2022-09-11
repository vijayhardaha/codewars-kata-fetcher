import { useEffect, useState } from "react";
import { InputGroup, Form, Tabs, Tab } from "react-bootstrap";
import isEmpty from "just-is-empty";

import { CopyButton } from "../lib/utils";

export default function Information({ data }) {
	const [hasData, setData] = useState(false);

	useEffect(() => {
		setData(!isEmpty(data));
	}, [data]);

	const renderText = (value) => {
		return (
			<InputGroup>
				<Form.Control type="text" size="sm" value={value} readOnly aria-label="Example text with button addon" />
				{hasData && <CopyButton value={value} type="icon" />}
			</InputGroup>
		);
	};

	const renderArray = (items) => {
		return isEmpty(items) ? <>&mdash;</> : items.map((item, index) => <CopyButton key={index} value={item} type="tag" />);
	};

	const displayJson = () => {
		const json = JSON.stringify(data, null, "\t");
		return (
			<>
				<CopyButton value={json} type="button" />
				<pre className="mt-3 mb-0" style={{ whiteSpace: "pre-wrap" }}>
					<code>{json}</code>
				</pre>
			</>
		);
	};

	const displayTable = () => {
		const tr = (name, value) => {
			return (
				<tr>
					<th scope="row" className="ps-0">
						{name}:
					</th>
					<td className="pe-0">{value}</td>
				</tr>
			);
		};

		return (
			<table className="table info-table">
				<tbody>
					{tr("ID", renderText(data?.id || ""))}
					{tr("Name", renderText(data?.name || ""))}
					{tr("Slug", renderText(data?.slug || ""))}
					{tr("Category", renderText(data?.category || ""))}
					{tr("Published At", renderText(data?.publishedAt || ""))}
					{tr("Approved At", renderText(data?.approvedAt || ""))}
					{tr("Languages", renderArray(data?.languages || []))}
					{tr("Url", renderText(data?.url || ""))}
					{tr("Rank", renderArray(data?.rank?.name ? [data.rank.name] : []))}
					{tr("Created At", renderText(data?.createdAt || ""))}
					{tr("Created By", renderText(data?.createdBy?.username || ""))}
					{tr("Approved By", renderText(data?.approvedBy?.username || ""))}
					{tr("Total Attempts", renderText(data?.totalAttempts || ""))}
					{tr("Total Completed", renderText(data?.totalCompleted || ""))}
					{tr("Total Stars", renderText(data?.totalStars || ""))}
					{tr("Vote Score", renderText(data?.voteScore || ""))}
					{tr("Tags", renderArray(data?.tags || []))}
				</tbody>
			</table>
		);
	};

	return (
		<div id="information-box" className="mt-4 mb-5">
			<Tabs defaultActiveKey="information" id="kata-tabs" className="mt-3">
				<Tab eventKey="information" title="Kata Information">
					<div className="p-3 border border-top-0 rounded-bottom">{displayTable()}</div>
				</Tab>
				<Tab eventKey="json" title="Json Data" disabled={!hasData}>
					<div className="p-3 border border-top-0 rounded-bottom">{displayJson()}</div>
				</Tab>
			</Tabs>
		</div>
	);
}
