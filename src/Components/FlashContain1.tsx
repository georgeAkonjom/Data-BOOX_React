import "../styles/flashcontain.css";
import FlashCard from "./FlashCard";

function FlashContain1() {
	return (
		<div className="flashcontain container">
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Collection"
				subtext="Databoox can collect data from multiple sources simultaneously, and integrate seamlessly into a unified database."
			/>
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Analysis"
				subtext="Gain valuable insights into your data with auto-generated indicator progress reports and weekly emumerator check-ins."
			/>
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Security"
				subtext="We offer robust security features, and adhere to industry regulation to keep sensitive information private and protected always."
			/>
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Backup"
				subtext="We offer automated data backup and recovery features on an opt-in basis. (See privacy policy)"
			/>
		</div>
	);
}

export default FlashContain1;
