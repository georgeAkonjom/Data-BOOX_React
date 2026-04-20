function AboutHero() {
    return (
			<div className="flex flex-col items-center justify-center h-[80vh] bg-[url('/aboutherobackground.png')] bg-no-repeat bg-cover text-white text-center p-8">
				<p className="font-raleway text-xl font-bold max-w-[40rem] leading-tight">
					We have developed a revolutionary data management solution!
				</p>
				<p className="text-white text-base max-w-[30rem] mt-4 opacity-90">
					DataBOOX is a revolutionary and homegrown solution
					from BOOX Community Ltd.
				</p>
			</div>
		);
}

export default AboutHero;