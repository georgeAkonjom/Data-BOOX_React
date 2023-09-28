import DemoCTA from "../Components/DemoCTA";
import Footer from "../Components/Footer";
import TextGroup from "../Components/TextGroup";
import "../styles/pricing.css";
import BillToggle from "../Components/BillToggle";
function Pricing() {
	return (
		<>
			<div className="container billing">
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
