import { Link } from "react-router-dom";

function DemoCTA() {
	return (
		<div className="flex flex-col items-center justify-center w-full p-8 md:p-16 h-[50vh] bg-[url('/DemoCTAbg.png')] bg-no-repeat bg-cover text-white text-center">
			<p className="font-poppins font-semibold tracking-[2px] py-4 uppercase text-xs">
				CONNECT WITH US TODAY
			</p>
			<p className="font-raleway text-lg font-bold max-w-[30rem] leading-snug">
				Transforming Data Management with Simplicity and
				Efficiency
			</p>
			<Link to="/pages/Contact">
				<button className="cta mt-[1.2rem] !bg-white !text-black hover:!bg-neutral-200">
					Try a Free Demo
				</button>
			</Link>
		</div>
	);
}

export default DemoCTA;
