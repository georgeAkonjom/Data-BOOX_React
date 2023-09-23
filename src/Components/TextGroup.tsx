import "../styles/textgroup.css";
interface TextGroupProps {
	topic: string;
	tag: string;
	subtext: string;
}

function TextGroup({topic, tag, subtext}:TextGroupProps) {
	return (
		<div className="container">
			<p className="tag">{tag}</p>
			<p className="topic">
				{topic}
			</p>
			<p className="subtext">
				{subtext}
			</p>
		</div>
	);
}

export default TextGroup;
