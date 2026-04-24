"use client";

import { useState, useRef, useEffect } from "react";
import { Fugaz_One, Poppins, Kaushan_Script } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });
const mistralLike = Kaushan_Script({ subsets: ['latin'], weight: '400' });

// ================= DATA =================
const CTA_DATA = {
  bgText: "JOIN NOW",
  videoSrc: "/video/Visual.mp4",
  title: ["LESS TALK,", "MAKE NOISE"],
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
};

// ================= VIDEO ITEM =================
const VideoItem = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {inView && (
        <video ref={videoRef} autoPlay muted loop playsInline preload="none" className="w-full h-full object-cover pointer-events-none">
          <source src={src} type="video/mp4" />
        </video>
      )}
      <button onClick={toggleMute} className="absolute bottom-4 right-4 z-50 bg-black/40 p-2 rounded-full text-white pointer-events-auto hover:bg-[#FC5CF2] transition">
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

// ================= CTA =================
export default function CTA() {
  return (
    <div className="py-20 overflow-hidden ">
      <div className="relative overflow-hidden py-25 lg:pb-40">

        {/* BACKGROUND SKEW */}
        <div className="bg-[#FC5CF2] w-full min-h-[30vh] md:min-h-[45vh] lg:min-h-[55vh] -skew-y-6 relative overflow-hidden flex items-center">
          <div className={`${fugaz.className} w-[120%] ml-[-1%] flex flex-col leading-none tracking-tighter opacity-90`}>
            {[0, 1, 2].map((row) => (
              <div
                key={row}
                className={`text-[clamp(100px,11vw,170px)] whitespace-nowrap flex gap-8 ${row === 1 ? 'ml-[-11%]' : ''} ${row !== 2 ? 'border-b border-dashed border-black' : ''}`}
              >
                {[0, 1, 2].map((col) => (
                  <span
                    key={col}
                    className={(row + col) % 2 === 0 ? "text-[#FFF7FE]" : "text-transparent"}
                    style={(row + col) % 2 !== 0 ? { WebkitTextStroke: '2px #FFF3FE' } : {}}
                  >
                    {CTA_DATA.bgText}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* VIDEO OVERLAY */}
        <div className="absolute top-[10%] left-[15%] md:left-[35%] lg:top-[4%] lg:left-[35%] skew-y-6">
          <div className="w-[70vw] sm:w-[40vw] md:w-[35vw] lg:w-[29vw] aspect-[3/4]">
            <VideoItem src={CTA_DATA.videoSrc} />
          </div>
        </div>

      </div>

      {/* TITLE */}
      <div className={`${mistralLike.className} text-center leading-none md:flex md:justify-center md:pt-10`}>
        {CTA_DATA.title.map((text, i) => (
          <p key={i} className="text-[clamp(32px,6vw,120px)] text-[#FFF7FE] drop-shadow-[0_0_20px_#FC5CF2] mx-2">
            {text}
          </p>
        ))}
      </div>

      {/* DESCRIPTION & BUTTON */}
      <div className="lg:flex pt-10 lg:justify-between lg:px-4 items-center">
        <p className={`${poppins.className} text-[#FFF7FE] text-[clamp(12px,2vw,16px)] px-4 py-5 text-center lg:text-left md:w-full lg:w-[50%] opacity-80`}>
          {CTA_DATA.description}
        </p>
        <div className={`${fugaz.className} text-[#FFF7FE] text-[clamp(16px,2.5vw,32px)] flex justify-center py-10 lg:py-0`}>
          <button className="bg-[#FC5CF2] px-10 py-3 rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg">
            INDULGE TONIGHT
          </button>
        </div>
      </div>
    </div>
  );
}