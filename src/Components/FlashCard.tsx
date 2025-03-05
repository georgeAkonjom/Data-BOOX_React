import "../styles/flashcard.css";
interface FlashCardProps {
	imgPath: string;
	tag: string;
	subtext: string;
}
function FlashCard({
	tag,
	imgPath,
	subtext,
}: FlashCardProps) {
	return (
		<div className="flashcard">
			<div className="flashicon">
				<img src={imgPath} alt="placeholder" />
			</div>
			<p className="tag">{tag}</p>
			<p className="subtext">{subtext}</p>
		</div>
	);
}

export default FlashCard;
