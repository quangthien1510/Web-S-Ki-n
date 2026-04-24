'use client';
import Image from "next/image";
import { Fugaz_One, Poppins, Kaushan_Script } from "next/font/google"
const mistralLike = Kaushan_Script({
	subsets: ['latin'],
	weight: '400',
})
const fugaz = Fugaz_One({
	subsets: ["latin"],
	weight: "400",
});
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});
export default function Footer() {
	return (
		<div className="pt-20 lg:pt-50">
			<div className="md:flex md:justify-between">
				<div className="md:flex md:flex-col">
					<div className="flex">
						<div>
							<Image src="/images/logo.png" alt="logo" width={3000} height={3000} className="w-30 lg:w-60" />
						</div>

						<div className="text-[#FFF7FE] leading-none">
							<p className={`${fugaz.className} text-[32px] lg:text-[70px]`}>THE BEAT</p>
							<div className={mistralLike.className}>
								<p className="text-[36px] lg:text-[70px] drop-shadow-[0_0_20px_#FC5CF2]">NEVER STOPS</p>
							</div>
						</div>
					</div>

					<div className={`${poppins.className} md:w-120 lg:w-200 2xl:w-250`}>
						<p className="text-[#FFF7FE] px-4 pt-5 text-[14px] lg:text-[16px] 2xl:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
					</div>

					<div className={`${fugaz.className} text-[#FFF7FE] text-[clamp(16px,1.5vw,32px)] px-2 mt-10 lg:py-0`}>
                    <button className="bg-[#FC5CF2] px-10 py-3 rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg">
                        INDULGE TONIGHT
                    </button>
                </div>

					<div className={`${fugaz.className} text-[24px] text-[#FFF7FE] hidden md:block md:px-4 md:pt-10 lg:text-[32px] 2xl:text-[35px]`}>

						<p className="text-transparent py-5" style={{ WebkitTextStroke: '1px #FFF7FE' }}>ABOUT</p>
						<div className="md:flex md:gap-4 lg:gap-20 2xl:gap-30">

							<p
								onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
								className="cursor-pointer hover:text-[#FC5CF2] transition"
							>
								EVENTS
							</p>

							<p
								onClick={() => document.getElementById('price')?.scrollIntoView({ behavior: 'smooth' })}
								className="cursor-pointer hover:text-[#FC5CF2] transition"
							>
								PRICE
							</p>

							<p
								onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
								className="cursor-pointer hover:text-[#FC5CF2] transition"
							>
								MENU
							</p>

							<p
								onClick={() => document.getElementById('crew')?.scrollIntoView({ behavior: 'smooth' })}
								className="cursor-pointer hover:text-[#FC5CF2] transition"
							>
								OUR CREW
							</p>

						</div>
					</div>
				</div>

				{/* MOBILE */}
				<div className=" md:hidden lg:hidden block">
					<div className="flex justify-between px-4 pt-10 ">

						<div className={`${fugaz.className} text-[24px] text-[#FFF7FE] `}>
							<p className="text-transparent py-5" style={{ WebkitTextStroke: '1px #FFF7FE' }}>ABOUT</p>

							<p>EVENTS</p>
							<p>PRICE</p>
							<p>MENU</p>
							<p>OUR CREW</p>
						</div>


						<div className={`${fugaz.className} text-[24px]  text-[#FFF7FE]`}>
							<p className="text-transparent py-5" style={{ WebkitTextStroke: '1px #FFF7FE' }}>CONTACT</p>
							<p>ZALO</p>
							<p>WHATAPP</p>
						</div>

					</div>
				</div>
				{/*END MOBILE */}

				<div className=" md:flex md:flex-col">

					<div className={`${fugaz.className} text-[24px] hidden md:block md:px-4 lg:text-[32px] text-[#FFF7FE]`}>
						<p className="text-transparent py-5" style={{ WebkitTextStroke: '1px #FFF7FE' }}>CONTACT</p>
						<div className="md:flex md:flex-gap md:gap-25">
							<p>ZALO</p>
							<p>WHATAPP</p>
						</div>
					</div>

					<div className={fugaz.className}>
						<p className="text-transparent py-5 text-[24px] px-4" style={{ WebkitTextStroke: '1px #FFF7FE' }}>OPENING HOURS</p>
					</div>

					<div className={`${fugaz.className} text-[24px] lg:text-[32px] flex justify-between px-4  text-[#FFF7FE]`}>

						<div className="flex flex-col">
							<p>MON - FRI</p>
							<p>SAT - SUN</p>
						</div>

						<div className="flex flex-col">
							<p>20:30 - 05:00</p>
							<p>19:30 - 05:00</p>
						</div>

					</div>

					<div className="px-4 py-5 "  >
						<Image src="/images/bando.png" alt="bando" width={3000} height={3000} className="w-93 h-53 lg:w-114 rounded-xl object-cover" />
					</div>

				</div>
			</div>
		</div>
	)
}