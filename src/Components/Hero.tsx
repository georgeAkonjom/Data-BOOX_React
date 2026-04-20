import { Link } from "react-router-dom";
import HeroImg from "/Group 917.png";
import backdrop from "/Polygon 1.png"

function Hero() {
	return (
		<section id="hero" className="flex flex-col md:flex-row flex-1 pt-24 items-center justify-center mx-8 lg:mx-32 gap-8">
			<div className="flex flex-col justify-center max-w-[40rem] gap-8 text-center md:text-left">
				<div>
					<span className="font-raleway text-xl font-bold leading-tight">
						A Powerful And Flexible Data Management
						Solution.
					</span>
					<p className="text-sec-font-gray max-w-[30rem] text-base mt-4 mx-auto md:mx-0">
					DataBOOX offers powerful features to effortlessly manage and organize your data.
					</p>
				</div>
				<div className="flex items-center justify-center md:justify-start gap-4">
					<Link to="/pages/Contact">
						<button className="cta">Try a Free Demo</button>
					</Link>
					<Link to="/pages/About" className="font-raleway">Learn More</Link>
				</div>
			</div>

			<div className="relative group overflow-visible">
				<img
					className="h-auto md:h-[40vh] max-w-full md:max-w-[40rem] transition-transform duration-500 ease-in-out group-hover:scale-105"
					src={HeroImg}
					alt="computer screen displays the databoox interface."
				/>
				<img
					id="backdrop"
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[120%] md:h-[60vh] transition-transform duration-700 ease-in-out group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:rotate-45 group-hover:scale-110"
					src={backdrop}
					alt="skewed triangle polygon backdrop"
				/>
			</div>
		</section>
	);
}

export default Hero;
