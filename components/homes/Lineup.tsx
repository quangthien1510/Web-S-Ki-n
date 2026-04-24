import Image from "next/image";
import { SimpleGrid } from '@mantine/core';
import { Fugaz_One } from "next/font/google";
const images = [
	"/images/image2.png",
	"/images/image7.png",
	"/images/image8.png",
	"/images/image9.png",
	"/images/image9.png",
	"/images/image8.png",
	"/images/image7.png",
	"/images/image2.png",
];
const fugaz = Fugaz_One({
	subsets: ["latin"],
	weight: "400",
});
export default function Lineup() {
	return (
		<div>

			{/* TITLE */}
			<div className={`${fugaz.className} text-[44px] text-center leading-none pb-4 lg:flex lg:justify-center lg:gap-5 lg:text-[120px]`}>
				<p style={{ WebkitTextStroke: '1px #FFF7FE' }}>LIQUID</p>
				<p className="text-[#FFF7FE] drop-shadow-[0_0_20px_#FC5CF2]">CIRCUITRY</p>
			</div>


			<div className="border border-[#FFF7FE] rounded-xl">

				<div className="lg:flex lg:justify-between lg:items-center lg:px-4">

					{/* MENU */}
					<div className={`${fugaz.className} text-[16px] md:text-[20px] lg:text-[32px] lg:flex lg:items-center lg:gap-10`}>

						<div className="flex gap-6 md:gap-10 px-2 py-5">
							<button className="text-[#FC5CF2] border border-[#FC5CF2] px-4 py-1 rounded-full">
								WINES
							</button>
							<p className="text-[#FFF7FE]">COCKTAIL</p>
						</div>

						<div className="flex gap-6 md:gap-10 text-[#FFF7FE] px-5">
							<p>MOCKTAIL</p>
							<p>SOFT DRINKS</p>
						</div>

					</div>

					{/* BUTTON */}
					<div className="hidden lg:block">
						<button className={`${fugaz.className} text-[28px] text-[#FFF7FE] bg-[#FC5CF2] px-4 py-2 rounded-full`}>
							VIEW MENU
						</button>
					</div>

				</div>
				{/* GRID */}
				<SimpleGrid cols={{ base: 2, sm: 3, lg: 4 }} spacing="md" className="pt-5 px-4 lg:pb-10">

					{/* CARD */}
					{images.map((img, i) => (
						<div key={i} className="relative w-full aspect-[3/4] group shadow-[0_0_250px_rgba(252,92,242,0.45)] rounded-xl overflow-hidden">

							{/* IMAGE */}
							<Image
								src={img}
								alt="image"
								fill
								className="object-cover"
							/>

							{/* HOVER */}
							<div className="absolute inset-0 bg-gradient-to-t from-[#FC5CF2]/70 to-transparent opacity-0 group-hover:opacity-30 transition" />

							{/* TEXT */}
							<div className={`${fugaz.className} absolute bottom-2 left-2 text-[#FFF7FE] text-[14px] md:text-[18px] lg:text-[24px] flex gap-2`}>
								<p>COOKTAIL NAME</p>
								<p>1</p>
							</div>

						</div>
					))}

				</SimpleGrid>

				{/* MOBILE BUTTON */}
				<div className="block lg:hidden">
					<div className={`${fugaz.className} flex justify-center py-4`}>
						<button className="text-[20px] text-[#FFF7FE] bg-[#FC5CF2] px-4 py-2 rounded-full">
							VIEW MENU
						</button>
					</div>
				</div>

			</div>

		</div>
	)
}