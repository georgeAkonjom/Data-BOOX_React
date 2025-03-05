import Hero from "../Components/Hero";
import TextGroup from "../Components/TextGroup";
import FlashContain from "../Components/FlashContain1";
import PartnerList from "../Components/PartnerList";
import DemoCTA from "../Components/DemoCTA";
import Footer from "../Components/Footer";
import FlashContain2 from "../Components/FlashContain2";
import FeatureList from "../Components/FeatureList";
import Carousel from "../Components/Carousel";

function Home() {
	return (
		<>
			<Hero />
			<PartnerList />
			<TextGroup
				tag="FEATURES"
				topic="Leverage your data for decision-making"
				subtext="See your data in action with DataBOOX' analytics. Track indicators and objectives across a specified timeframe."
			/>
			<FlashContain />
			<FeatureList />
			<TextGroup
				tag="HOW TO GET STARTED"
				topic="Start your project in dataBOOX in 4 simple steps"
				subtext="You can get started right away with your first demo project on DataBOOX at no cost."
			/>
			<FlashContain2 />
			<DemoCTA />
			<Carousel />
			<Footer />
		</>
	);
}

export default Home;
