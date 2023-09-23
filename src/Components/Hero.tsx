import { Link } from "react-router-dom";
import "../styles/hero.css";
import HeroImg from "/data boox1.png";

function Hero() {
	return (
		<section id="hero">
			<div className="leftcontain">
				<div>
					<span className="herotext">
						A Powerful And Flexible Data Management
						Solution.
					</span>
					<p className="subtext">
						With a wide range of features and capabilities,
						dataBoox is the perfect solution for managing
						and organizing your data.
					</p>
				</div>
				<div className="heroCta">
					<Link to="../pages/Contact">
						<button className="cta">Try a Free Demo</button>
					</Link>
					<Link to="../pages/About">Learn More</Link>
				</div>
			</div>

			<div>
				<img
					className="heroimg hide"
					src={HeroImg}
					alt="Man interacts with Hologram DataBOOX"
				/>
			</div>
		</section>
	);
}

export default Hero;
