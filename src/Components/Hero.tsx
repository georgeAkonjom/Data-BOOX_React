import { Link } from "react-router-dom";
import "../styles/hero.css";
import HeroImg from "/Group 917.png";
import backdrop from "/Polygon 1.png"

function scrollPolly(){
	let image=document.getElementById("backdrop")
	image?.className.add
}

function Hero() {
	return (
		<section id="hero">
			<div className="leftcontain">
				<div>
					<span className="herotext">
						A Powerful And Flexible Data Management
						Solution.
					</span>
					<p className="subtext hero-sub">
					DataBOOX offers powerful features to effortlessly <br /> manage and organize your data.
					</p>
				</div>
				<div className="heroCta">
					<Link to="../pages/Contact">
						<button className="cta">Try a Free Demo</button>
					</Link>
					<Link to="../pages/About">Learn More</Link>
				</div>
			</div>

			<div className="heroimgcontain">
				<img
					className="heroimg hide"
					src={HeroImg}
					alt="computer screen displays the databoox interface."
				/>
				<img
					id="backdrop"
					className="backdrop hide"
					// onScroll={scrollPolly("backdrop")}
					src={backdrop}
					alt="skewed triangle polygon backdrop"
				/>
			</div>
		</section>
	);
}

export default Hero;
