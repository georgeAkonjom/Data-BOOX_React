import "../styles/flashcontain.css";
import FlashCard from "./FlashCard";

function FlashContain1() {
	return (
		<div className="flashcontain container">
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Collection and Integration"
				subtext="Multiple enumerators, not a problem! Databoox can collect data from multiple sources simultaneously, and integrate seamlessly into a unified database."
			/>
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Analysis and Reporting"
				subtext="Gain valuable insights into your data with auto-generated indicator progress reports and weekly emumerator check-ins; See the full extent of your reach with PowerBI graphs and charts, and analyse your progress over time."
			/>
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Security, Access, and Roles"
				subtext="We offer robust security features to keep your data safe and compliant with industry regulations. Enumerator and stakeholder access is easily set and modified, keeping sensitive information private and protected always."
			/>
			<FlashCard
				imgPath="/Iconar.png"
				tag="Data Backup and Recovery"
				subtext="Lost your DataBOOX auto-generated reports? We offer automated data backup and recovery features on an opt-in basis. We will not collect or store your data (exept explicitly stated, or required to use DataBOOX) without your permission."
			/>
		</div>
	);
}

export default FlashContain1;
