function BillToggle() {
    return (
			<div className="flex flex-row items-center gap-4">
				<p className="text-sec-font-gray text-xs">Bill Monthly</p>
				<label className="relative inline-block w-[60px] h-[34px]">
					<input type="checkbox" className="opacity-0 w-0 h-0 peer" />
					<span className="absolute cursor-pointer inset-0 bg-white outline-[#7f8c9f] outline-2 transition-all duration-400 rounded-[34px] 
						before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 before:bg-[#7f8c9f] before:transition-all before:duration-400 before:rounded-full
						peer-checked:before:translate-x-[26px] peer-checked:before:bg-black"></span>
				</label>
				<p className="text-sec-font-gray text-xs">
					Bill Annually <br />
					Save 15%
				</p>
			</div>
		);
}

export default BillToggle;