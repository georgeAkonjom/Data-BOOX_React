import montage1 from "/montageimg1.png";
import montage2 from "/montageimg2.png";
import montage3 from "/montageimg3.png";

function FeatureList() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-16 mx-4 md:mx-16 my-16 p-4">
			<div className="grid grid-cols-2 gap-4">
				<img
					className="rounded-[3%] self-end justify-self-end"
					src={montage3}
					alt="DataBOOX loading in on a mobile device."
				/>
				<img
					className="rounded-[3%] self-end justify-self-start"
					src={montage1}
					alt="Farmer in straw hat hunched over in mud"
				/>
				<img
					className="rounded-[3%] justify-self-end"
					src={montage2}
					alt="Young man with a crate on his shoulder"
				/>
				<img
					className="rounded-[3%] self-end justify-self-start"
					src={montage3}
					alt="DataBOOX loading in on a mobile device."
				/>
			</div>
			<div className="flex flex-col items-start text-left max-w-[40rem]">
				<p className="font-poppins font-semibold tracking-[2px] text-sec-font-gray py-4 uppercase text-xs">DATABOOX EDGE</p>
				<p className="font-raleway text-lg font-bold leading-snug">
					Unlock the true value of your data with our
					platform.
				</p>
				<p className="text-sec-font-gray text-base mt-4">
					DataBOOX is an extremely flexible M&E, management and data organization software, built to track progress over large amounts of data. See How our partners use DataBOOX for their businesses in the following section.
				</p>
				<div className="mt-6">
					<ul className="flex flex-col list-none p-0">
						<li className="text-sec-font-gray text-base py-2 px-6 bg-[url('/section-2-iconcheck-list.png')] bg-[length:15px] bg-no-repeat bg-left">Create Projects</li>
						<li className="text-sec-font-gray text-base py-2 px-6 bg-[url('/section-2-iconcheck-list.png')] bg-[length:15px] bg-no-repeat bg-left">Track Indicators</li>
						<li className="text-sec-font-gray text-base py-2 px-6 bg-[url('/section-2-iconcheck-list.png')] bg-[length:15px] bg-no-repeat bg-left">Analyse and Visualize Data</li>
						<li className="text-sec-font-gray text-base py-2 px-6 bg-[url('/section-2-iconcheck-list.png')] bg-[length:15px] bg-no-repeat bg-left">Monitor Progress</li>
						<li className="text-sec-font-gray text-base py-2 px-6 bg-[url('/section-2-iconcheck-list.png')] bg-[length:15px] bg-no-repeat bg-left">Register and Monitor Beneficiaries</li>
						<li className="text-sec-font-gray text-base py-2 px-6 bg-[url('/section-2-iconcheck-list.png')] bg-[length:15px] bg-no-repeat bg-left">Assign Interventions</li>
						<li className="text-sec-font-gray text-base py-2 px-6 bg-[url('/section-2-iconcheck-list.png')] bg-[length:15px] bg-no-repeat bg-left">Generate Reports</li>
                    </ul>
                    <button className="cta mt-6">Try a Free Demo</button>
				</div>
			</div>
		</div>
	);
}

export default FeatureList;
