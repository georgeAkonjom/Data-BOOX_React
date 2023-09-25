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
				tag="Mission"
				topic="To bring about the technological advancement of Africa."
				subtext=""
			/>
			<TextGroup
				tag="Vision"
				topic="To develop tech products and services for everyone everywhere."
				subtext=""
			/>
			<DemoCTA />
			<Footer />
		</>
	);
}

export default About;
