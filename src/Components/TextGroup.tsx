interface TextGroupProps {
	topic: string;
	tag: string;
	subtext: string;
}

function TextGroup({topic, tag, subtext}:TextGroupProps) {
	return (
		<div className="flex flex-col items-center mx-4 md:mx-16 my-16 p-4">
			<p className="font-poppins font-semibold tracking-[2px] text-sec-font-gray py-4 uppercase text-xs">
				{tag}
			</p>
			<p className="font-raleway text-lg font-bold max-w-[30rem] text-center leading-snug">
				{topic}
			</p>
			<p className="text-sec-font-gray max-w-[30rem] text-base text-center mt-2">
				{subtext}
			</p>
		</div>
	);
}

export default TextGroup;
