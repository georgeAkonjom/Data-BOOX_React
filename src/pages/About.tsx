import AboutHero from "../Components/AboutHero";
import AboutTextGroup from "../Components/AboutTextGroup";
import DemoCTA from "../Components/DemoCTA";
import Footer from "../Components/Footer";

function About() {
	return (
		<>
			<AboutHero />
			<AboutTextGroup />
			<div className="bg-[#fba201] flex flex-col md:flex-row text-left justify-around p-8 md:p-[10vh] gap-8">
				<p className="font-raleway text-lg font-bold max-w-[30rem] leading-snug"> 
					<span className="text-sm block mb-2">Mission</span>
					To bring about the technological advancement of Africa.
				</p>
				<p className="font-raleway text-lg font-bold max-w-[30rem] leading-snug"> 
					<span className="text-sm block mb-2">Vision</span>
					To develop tech products for everyone everywhere.
				</p>
			</div>
			<DemoCTA />
			<Footer />
		</>
	);
}

export default About;
