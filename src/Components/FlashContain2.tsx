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
				subtext="You can create your first project, select project location"
			/>
			<FlashCard
				imgPath="/Three.png"
				tag="Login your dashboard"
				subtext="Once your account is setup, its easy and simple to login and access your project dashboard."
			/>
			<FlashCard
				imgPath="Four.png"
				tag="Enjoy dataBOOX"
				subtext="Now you can enjoy the robust dataBOOX solid features."
			/>
		</div>
	);
}

export default FlashContain2;
