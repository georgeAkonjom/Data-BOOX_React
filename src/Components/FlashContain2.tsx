import "../styles/flashcontain.css"
import FlashCard from "./FlashCard";
function FlashContain2() {
	return (
		<div className="flashcontain container">
			<FlashCard
				imgPath="/One.png"
				tag="Sign Up for Free"
				subtext="Enjoy the next 14 days for free with support from our team as you get started."
			/>
			<FlashCard
				imgPath="/Two.png"
				tag="Create your Project"
				subtext="Create your first project during sign up, set project parameters and indicators."
			/>
			<FlashCard
				imgPath="/Three.png"
				tag="Log on to your dashboard"
				subtext="Once your account is setup, Log on and access your project dashboard."
			/>
			<FlashCard
				imgPath="Four.png"
				tag="Add data to DataBOOX"
				subtext="Already have data previously collected and want to upload all of it? Contact a team member for help."
			/>
		</div>
	);
}

export default FlashContain2;
