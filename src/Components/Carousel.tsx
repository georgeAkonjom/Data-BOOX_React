import TextGroup from "./TextGroup";
import CarouselChild from "./CarouselChild";
import "../styles/carousel.css";

function Carousel() {
	return (
		<div className="dark container">
			<TextGroup
				topic="How our partners use DataBOOX"
				tag="OUR IMPACT"
				subtext=""
			/>

			<div className="scrollgrid">
				<CarouselChild
					imgPath="/rectangle-120-lady.png"
					logoPath="/groupiitawhite.png"
					subtext="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
				/>
				<CarouselChild
					imgPath="/Rectangle 119green.png"
					logoPath="/groupcswhite.png"
					subtext="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
				/>
				<CarouselChild
					imgPath="/Rectangle 119green.png"
					logoPath="/groupcswhite.png"
					subtext="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
				/>
				<CarouselChild
					imgPath="/Rectangle 119green.png"
					logoPath="/groupcswhite.png"
					subtext="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
				/>
				<CarouselChild
					imgPath="/Rectangle 119green.png"
					logoPath="/groupcswhite.png"
					subtext="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
				/>
				<CarouselChild
					imgPath="/Rectangle 119green.png"
					logoPath="/groupcswhite.png"
					subtext="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
				/>
			</div>
		</div>
	);
}

export default Carousel;
