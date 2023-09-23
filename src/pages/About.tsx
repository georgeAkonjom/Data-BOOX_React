import AboutHero from "../Components/aboutHero";
import AboutTextGroup from "../Components/AboutTextGroup";
import TextGroup from "../Components/TextGroup";
import DemoCTA from "../Components/DemoCTA";
import Footer from "../Components/Footer";

function About() {
	return (
		<>
			<AboutHero />
			<AboutTextGroup />
			<TextGroup
				tag="OUR CORE VALUES"
				topic="We’re a deeply mission-driven company."
				subtext=""
			/>
			<DemoCTA />
			<Footer/>
		</>
	);
}

export default About;
