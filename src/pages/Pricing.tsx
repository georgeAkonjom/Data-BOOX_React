import DemoCTA from "../Components/DemoCTA";
import Footer from "../Components/Footer";
import TextGroup from "../Components/TextGroup";
import BillToggle from "../Components/BillToggle";
function Pricing() {
	return (
		<>
			<div className="flex flex-col items-center p-16 md:p-8 bg-[#f7f7f7]">
				<TextGroup
					tag="BILLING"
					topic="Choose the plan that's right for your business"
					subtext="Start with the free plan to try out our platform for 14 days."
				/>
				<BillToggle/>
			</div>
			<DemoCTA />
			<Footer />
		</>
	);
}

export default Pricing;
