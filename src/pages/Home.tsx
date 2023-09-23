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
			<TextGroup
				tag="DATABOOX EDGE"
				topic="Unlock the true value of your data with our platform."
				subtext="See which work apps your team is working in, and join them with a click. Shared cursors equals better than screen-sharing."
			/>
			<FlashContain />
			<PartnerList />
			<FeatureList />
			<TextGroup
				tag="HOW TO GET STARTED"
				topic="Start your project in dataBOOX in 4 simple steps"
				subtext="You can get started right away with your first project on dataBOOX at no cost."
			/>

			<FlashContain2 />
			<Carousel />
			<DemoCTA />
			<Footer />
		</>
	);
}

export default Home;
