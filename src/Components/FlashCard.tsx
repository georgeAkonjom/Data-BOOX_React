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
		<div className="flex flex-col items-center max-w-[15rem] p-4 text-center">
			<div className="max-w-[2rem]">
				<img src={imgPath} alt={tag} />
			</div>
			<p className="font-poppins font-semibold tracking-[2px] text-sec-font-gray py-4 uppercase text-xs">{tag}</p>
			<p className="text-sec-font-gray text-xs">{subtext}</p>
		</div>
	);
}

export default FlashCard;
