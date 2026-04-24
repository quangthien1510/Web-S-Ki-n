import { Fugaz_One, Poppins } from "next/font/google";
import Image from "next/image";
const fugaz = Fugaz_One({
	subsets: ["latin"],
	weight: "400",
});
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export default function Vip() {
	return (
		<div className="pt-20">
			<div className={`${fugaz.className} text-[60px] px-4 leading-none lg:hidden block`}>
				<p className=" " style={{ WebkitTextStroke: '1px #FFF7FE' }}>THE VIP</p>
				<p className="text-[#FFF7FE]">EXCLUSIVE</p>
			</div>

			<div className="px-4 lg:hidden block ">
				<p className={`${poppins.className} text-[14px] text-[#FFF7FE]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in </p>
			</div>

			<div className="py-20 relative ">
				<div className="bg-[#89F7FE] h-100 lg:h-120 skew-y-6  ">

				</div>

				<div className="bg-[#FC5CF2] h-100 w-full lg:h-120  -skew-y-6 absolute top-20">

					<div className=" lg:flex">
						{/* DESTOP */}
						<div className="lg:flex lg:flex-col">
							<div className={`${fugaz.className} text-[170px] px-4 leading-none hidden lg:block skew-y-6`}>
								<p className=" text-transparent " style={{ WebkitTextStroke: '4px #FFF7FE' }}>THE VIP</p>
								<p className="text-[#FFF7FE]">EXCLUSIVE</p>
							</div>

							<div className="px-4 hidden lg:block skew-y-6">
								<p className={`${poppins.className} text-[16px] text-[#FFF7FE]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									Duis aute irure dolor in </p>
							</div>


							<div className={`${fugaz.className} text-[#FC5CF2] text-[clamp(16px,1.5vw,30px)] py-5 px-2 hidden lg:block skew-y-6`}>
								<button className="bg-[#FFF7FE] px-10 py-3 rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg">
									INDULGE TONIGHT
								</button>
							</div>
							{/*END DESTOP */}
						</div>

						<div className="">
							<Image src="/images/bg.png" alt="bg" width={3000} height={3000} className=" w-200 h-100 lg:h-120    " />
						</div>

					</div>

				</div>

			</div>

			<div className=" pb-10 px-4 block lg:hidden" >
				<button className={`${fugaz.className} bg-[#FFF7FE] text-[#FC5CF2] text-[24px] px-4 py-1 rounded-full`}>INDULGE TONIGHT</button>
			</div>
		</div>
	)
}
