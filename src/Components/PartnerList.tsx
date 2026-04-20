import partnerJesnoch from "/partnerjesnoch.png";
import partnerHeifer from "/partnerHeifer.png";
import partnerMC from "/partnermercycorps.png";
import partnercrs from "/partnercrs.png";
import partnerUsaid from "/partnerusaid.png";
import partneriita from "/partneriita.png";

function PartnerList() {
	return (
		<div className="flex flex-col items-start mx-4 md:mx-16 pb-12 p-4 gap-4">
			<p className="text-sec-font-gray max-w-[30rem] text-base">We have worked with</p>
			<div className="grid grid-cols-3 md:grid-cols-6 w-full gap-8 md:gap-20 items-center">
				<img
					className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
					src={partnerJesnoch}
					alt="Jesnoch International"
				/>
				<img
					className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
					src={partnerHeifer}
					alt="Heifer International"
				/>
				<img 
					className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
					src={partnerUsaid} 
					alt="USAID" 
				/>
				<img 
					className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
					src={partnerMC} 
					alt="Mercy Corps" 
				/>
				<img 
					className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
					src={partnercrs} 
					alt="CRS" 
				/>
				<img 
					className="transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
					src={partneriita} 
					alt="IITA" 
				/>
			</div>
		</div>
	);
}

export default PartnerList;
