import AboutHero from "../Components/aboutHero";
import AboutTextGroup from "../Components/AboutTextGroup";
import DemoCTA from "../Components/DemoCTA";
import Footer from "../Components/Footer";
import "../styles/about.css"

function About() {
	return (
		<>
			<AboutHero />
			<AboutTextGroup />
			<div className="missionWrapper">
			<p className="topic"> <span className="">Mission</span><br /> To bring about the technological advancement of Africa.</p>
			<p className="topic"> <span className="">Vision</span><br /> To develop tech products for everyone everywhere.</p>
			</div>
			<DemoCTA />
			<Footer />
		</>
	);
}

export default About;
