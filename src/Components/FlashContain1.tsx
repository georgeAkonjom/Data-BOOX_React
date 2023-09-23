import "../styles/flashcontain.css";
import FlashCard from "./FlashCard";

function FlashContain1() {
	return (
		<div className="flashcontain container">
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Collection and Integration"
				subtext="Databoox can collect data from multiple sources and integrate them seamlessly into a unified database."
			/>
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Analysis and Reporting"
				subtext="We provide powerful data analysis and reporting capabilities, allowing you to gain valuable insights into your data."
			/>
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Security, Access, and Roles"
				subtext="We offer robust security features to keep your data safe and compliant with industry regulations."
			/>
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Backup and Recovery"
				subtext="We offer automated data backup and recovery features."
			/>
		</div>
	);
}

export default FlashContain1;