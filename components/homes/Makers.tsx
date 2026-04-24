"use client";

import { useRef, useState, useEffect } from "react";
import { Fugaz_One } from "next/font/google";
import Image from "next/image";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

// ================= DATA =================
const MAKERS = [
    { src: "/images/image3.png", name: "YUKA", ig: "me.yka" },
    { src: "/images/image4.png", name: "HARU", ig: "haru.official" },
    { src: "/images/image5.png", name: "SORA", ig: "sora.sky" },
    { src: "/images/image6.png", name: "KAI", ig: "kai.night" },
    { src: "/images/image1.png", name: "REI", ig: "rei.vibe" },
];

// ================= MAKERS =================
export default function Makers() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Center slider on mount
    useEffect(() => {
        if (scrollRef.current) {
            const slider = scrollRef.current;
            slider.scrollLeft = (slider.scrollWidth - slider.clientWidth) / 2;
        }
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        scrollRef.current.scrollLeft = scrollLeft - (e.pageX - scrollRef.current.offsetLeft - startX) * 2;
    };

    return (
        <div className="py-10 ">

            {/* TITLE */}
            <div className={`${fugaz.className} text-[44px] leading-none text-center md:flex md:justify-center md:gap-3 lg:text-[120px]`}>
                <p className="text-transparent" style={{ WebkitTextStroke: '1px #FFF7FE' }}>THE NIGHT</p>
                <p className="text-[#FFF7FE] drop-shadow-[0_0_20px_#FC5CF2]">MAKERS</p>
            </div>

            {/* CAROUSEL */}
            <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                className={`flex gap-4 overflow-x-auto overflow-y-hidden pt-10 px-4 no-scrollbar cursor-grab active:cursor-grabbing select-none
                lg:justify-center
                ${isDragging ? "scroll-auto" : "scroll-smooth snap-x snap-mandatory"}`}
                            >
                {MAKERS.map((item, i) => (
                    <div
                        key={i}
                        className="w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[18vw] aspect-[3/4] flex-shrink-0 snap-center relative group rounded-2xl overflow-hidden border border-white/5 "
                    >
                        <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            sizes="(max-width: 640px) 75vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 18vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:from-[#FC5CF2]/80 transition-all duration-500" />
                        <div className={`${fugaz.className} absolute bottom-5 left-5 text-[#FFF7FE] z-10`}>
                            <p className="text-[20px] md:text-[24px] tracking-wide">{item.name}</p>
                            <p className="text-[12px] md:text-[14px] underline opacity-70 group-hover:opacity-100 transition-opacity">
                                IG: {item.ig}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}