import Hero from "../Components/Hero";
import TextGroup from "../Components/TextGroup";
import FlashContainer from "../Components/FlashContainer";
import PartnerList from "../Components/PartnerList";
import DemoCTA from "../Components/DemoCTA";
import Footer from "../Components/Footer";
import FeatureList from "../Components/FeatureList";
import Carousel from "../Components/Carousel";

const featuresData = [
	{
		imgPath: "/Iconar.png",
		tag: "Data Collection",
		subtext: "Databoox can collect data from multiple sources simultaneously, and integrate seamlessly into a unified database.",
	},
	{
		imgPath: "/Iconar.png",
		tag: "Data Analysis",
		subtext: "Gain valuable insights into your data with auto-generated indicator progress reports and weekly emumerator check-ins.",
	},
	{
		imgPath: "/Iconar.png",
		tag: "Data Security",
		subtext: "We offer robust security features, and adhere to industry regulation to keep sensitive information private and protected always.",
	},
	{
		imgPath: "/Iconar.png",
		tag: "Data Backup",
		subtext: "We offer automated data backup and recovery features on an opt-in basis. (See privacy policy)",
	},
];

const stepsData = [
	{
		imgPath: "/One.png",
		tag: "Sign Up for Free",
		subtext: "Enjoy the next 14 days for free with support from our team as you get started.",
	},
	{
		imgPath: "/Two.png",
		tag: "Create your Project",
		subtext: "Create your first project during sign up, set project parameters and indicators.",
	},
	{
		imgPath: "/Three.png",
		tag: "Log on to your dashboard",
		subtext: "Once your account is setup, Log on and access your project dashboard.",
	},
	{
		imgPath: "/Four.png",
		tag: "Add data to DataBOOX",
		subtext: "Already have data previously collected and want to upload all of it? Contact a team member for help.",
	},
];

function Home() {
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<Hero />
				<PartnerList />
			</div>
			<TextGroup
				tag="FEATURES"
				topic="Leverage your data for decision-making"
				subtext="See your data in action with DataBOOX' analytics. Track indicators and objectives across a specified timeframe."
			/>
			<FlashContainer items={featuresData} />
			<FeatureList />
			<TextGroup
				tag="HOW TO GET STARTED"
				topic="Start your project in dataBOOX in 4 simple steps"
				subtext="You can get started right away with your first demo project on DataBOOX at no cost."
			/>
			<FlashContainer items={stepsData} />
			<DemoCTA />
			<Carousel />
			<Footer />
		</>
	);
}

export default Home;
