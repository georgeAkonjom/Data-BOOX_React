import montage1 from "/montageimg1.png";
import montage2 from "/montageimg2.png";
import montage3 from "/montageimg3.png";

function AboutTextGroup() {
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
				<p className="font-poppins font-semibold tracking-[2px] text-sec-font-gray py-4 uppercase text-sm">WHO WE ARE</p>
				<p className="font-raleway text-2xl lg:text-3xl font-bold">
					We're here to drive change in Africa.
				</p>
				<div className="mt-4 flex flex-col gap-4">
					<p className="text-sec-font-gray text-xs">
						DataBOOX is a homegrown solution
						from <a href="" className="text-black font-semibold">BOOX Community Ltd</a>. BOOX Community was
						founded in 2019 out of a passion to see the
						technological advancement of Africa. The
						combination of innovation and commitment has
						birthed tech solutions influencing a spectrum of
						business spaces and providing users with ease,
						conveniences and satisfaction.
					</p>
					<p className="text-sec-font-gray text-xs">
						Over the years we have grown to partner with
						developement organizations such as Heifer and IITA and International institutes for tropical agriculture, providing Technology for
						Development (T4D) and Information and
						Communication Technology for Development (ICT4D)
						to overcome hurdles and barriers in their programs
						and drive them to achieve sustainable success.
					</p>
					<p className="text-sec-font-gray text-xs">
						We support activities and programs across Nigeria
						in digitalization, technology, project management,
						research and development capacities. We help
						organizations carry out research-based surveys and
						conduct assessments using DataBOOX for management
						and visualization of accrued data.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutTextGroup;
