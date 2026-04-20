import FlashCard from "./FlashCard";

interface FlashItem {
	imgPath: string;
	tag: string;
	subtext: string;
}

interface FlashContainerProps {
	items: FlashItem[];
}

function FlashContainer({ items }: FlashContainerProps) {
	return (
		<div className="flex flex-row items-baseline justify-evenly flex-wrap bg-[#D9D9D9] p-4 rounded-[30px] mx-4 md:mx-16 my-16">
			{items.map((item, index) => (
				<FlashCard
					key={index}
					imgPath={item.imgPath}
					tag={item.tag}
					subtext={item.subtext}
				/>
			))}
		</div>
	);
}

export default FlashContainer;
