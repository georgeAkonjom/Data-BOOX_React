import "../styles/abouttextgroup.css";
import montage1 from "/montageimg1.png";
import montage2 from "/montageimg2.png";
import montage3 from "/montageimg3.png";

function AboutTextGroup() {
	return (
		<div className="montage container">
			<div className="imggrid">
				<img
					className="montageimg gridchild1"
					src={montage3}
					alt="DataBOOX loading in on a mobile device."
				/>
				<img
					className="montageimg gridchild2"
					src={montage1}
					alt="Farmer in straw hat hunched over in mud"
				/>
				<img
					className="montageimg gridchild3"
					src={montage2}
					alt="Young man with a crate on his shoulder"
				/>
				<img
					className="montageimg gridchild4"
					src={montage3}
					alt="DataBOOX loading in on a mobile device."
				/>
			</div>
			<div className="about">
				<p className="tag">DATABOOX EDGE</p>
				<p className="topic">
					Unlock the true value of your data with our
					platform.
				</p>
				<br />
				<p className="subtext">
					DataBOOX is a revolutionary and homegrown solution
					from BOOX Community Ltd, BOOX Community was
					founded in 2019 out of a passion to see the
					technological advancement of Africa. The
					combination of innovation and commitment has
					birthed tech solutions influencing a spectrum of
					business spaces and providing users with ease,
					conveniences and satisfaction.
				</p>
				<br />
				<p className="subtext">
					Over the years we have grown to partner with
					iNGOs, USAID partners providng technology for
					development (T4D) and Information and
					Communication Technology for development (ICT4D)
					to overcome hurdles and barriers in their programs
					and drive them to achieve sustainable success.
				</p>
				<br />
				<p className="subtext">
					We support activities and programs across Nigeria
					in digitalization, technology, project management,
					research and development capacities. We help
					organizations carry out research-based surveys and
					conduct assessments using DataBOOX for management
					and visualization of accrued data.
				</p>
			</div>
		</div>
	);
}

export default AboutTextGroup;
