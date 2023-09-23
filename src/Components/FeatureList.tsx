import "../styles/abouttextgroup.css";
import "../styles/featurelist.css";
import montage1 from "/montageimg1.png";
import montage2 from "/montageimg2.png";
import montage3 from "/montageimg3.png";

function FeatureList() {
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
					technological advancement of Africa.
				</p>
				<div className="featurelist">
					<ul>
						<li className="subtext">Create Project</li>
						<li className="subtext">Create Tools</li>
						<li className="subtext">Track Indicators</li>
						<li className="subtext">Analyse Data</li>
						<li className="subtext">Monitor Progress</li>
						<li className="subtext">Register and Monitor Beneficiaries</li>
						<li className="subtext">Assign Interventions</li>
						<li className="subtext">Generate Reports</li>
                    </ul>
                    <button className="cta">Try a Free Demo</button>
				</div>
			</div>
		</div>
	);
}

export default FeatureList;
