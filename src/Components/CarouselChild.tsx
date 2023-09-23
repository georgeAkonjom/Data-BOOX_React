import "../styles/carouselchild.css"
interface CarouselProps {
	imgPath: string;
	logoPath: string;
	subtext: string;
}

function CarouselChild({imgPath, logoPath, subtext}: CarouselProps) {
	return (
		<div className="scrollchild">
			<img
				className="logo-partner"
				src={logoPath}
				alt="A partner or client logo"
			/>
			<img
				className="carousel-image"
				src={imgPath}
				alt="An image in a carousel"
			/>
			<p className="subtext">
				{subtext}
			</p>
		</div>
	);
}

export default CarouselChild;
