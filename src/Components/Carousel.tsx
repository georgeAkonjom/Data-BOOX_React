import { useEffect, useRef } from "react";
import TextGroup from "./TextGroup";

const carouselItems = [
	{
		logo: "/groupcswhite.png",
		image: "/Rectangle 119green.png",
		text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
	},
	{
		logo: "/groupcswhite.png",
		image: "/Rectangle 119green.png",
		text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
	},
	{
		logo: "/groupcswhite.png",
		image: "/Rectangle 119green.png",
		text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
	},
	{
		logo: "/groupcswhite.png",
		image: "/Rectangle 119green.png",
		text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
	},
	{
		logo: "/groupcswhite.png",
		image: "/Rectangle 119green.png",
		text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
	},
	{
		logo: "/groupcswhite.png",
		image: "/Rectangle 119green.png",
		text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
	},
];

function Carousel() {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			if (scrollRef.current) {
				const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
				const maxScrollLeft = scrollWidth - clientWidth;

				if (scrollLeft >= maxScrollLeft - 10) {
					scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
				} else {
					scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
				}
			}
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="bg-black text-white pb-48">
			<TextGroup
				topic="How our partners use DataBOOX"
				tag="OUR IMPACT"
				subtext=""
			/>
			<div className="flex flex-row overflow-x-scroll gap-8 snap-x snap-mandatory scroll-smooth mx-4 md:mx-16 p-4" ref={scrollRef}>
				{carouselItems.map((item, index) => (
					<div className="flex flex-col gap-4 min-w-full md:min-w-[40%] snap-center" key={index}>
						<img
							className="self-center"
							src={item.logo}
							alt="A partner or client logo"
						/>
						<img
							className="carousel-image"
							src={item.image}
							alt="An image in a carousel"
						/>
						<p className="text-sec-font-gray max-w-[30rem] text-base">
							{item.text}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Carousel;
