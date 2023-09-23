import "../styles/partnerlist.css"
import partnerJesnoch from "/partnerjesnoch.png";
import partnerHeifer from "/partnerHeifer.png";
import partnerMC from "/partnermercycorps.png";
import partnercrs from "/partnercrs.png";
import partnerUsaid from "/partnerusaid.png";
import partneriita from "/partneriita.png";

function PartnerList() {
	return (
		<div className="partners container">
			<p className="subtext">We have worked with</p>
			<div className="partnerimgcontain">
				<img
					src={partnerJesnoch}
					alt="Jesnoch International"
				/>
				<img
					src={partnerHeifer}
					alt="Heifer International"
				/>
				<img src={partnerUsaid} alt="USAID" />
				<img src={partnerMC} alt="Mercy Corps" />
				<img src={partnercrs} alt="CRS" />
				<img src={partneriita} alt="IITA" />
			</div>
		</div>
	);
}

export default PartnerList;
