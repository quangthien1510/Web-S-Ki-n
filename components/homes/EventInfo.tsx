"use client";

import { useState, useRef, useEffect } from "react";
import { Fugaz_One, Poppins, Kaushan_Script } from "next/font/google";
import Image from "next/image";

const mistralLike = Kaushan_Script({ subsets: ['latin'], weight: '400' });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover pointer-events-none"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-50 bg-black/40 p-2 rounded-full text-white pointer-events-auto hover:bg-[#FC5CF2] transition"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

// ================= DATA =================
const EVENTS = [
  { id: 1, type: "video", src: "/video/actuall.mp4", name: "SHOW NAME 1", time: "21:00" },
  { id: 2, type: "video", src: "/video/Saves.mp4", name: "SHOW NAME 2", time: "22:30" },
  { id: 3, type: "image", src: "/images/image2.png", name: "SHOW NAME 3", time: "00:00" },
];

// ================= EVENT INFO =================
export default function EventInfo() {
  return (
    <div className="overflow-x-hidden">
      <div className="w-full pt-40 pb-20">
        <div className="relative">

          {/* TITLE */}
          <div className={`${fugaz.className} px-4 mb-10 flex gap-2 lg:gap-7 relative z-20 justify-center items-center -translate-y-4 lg:-translate-y-10 2xl:-translate-y-20`}>
            <p className="text-transparent text-[clamp(44px,6vw,110px)]" style={{ WebkitTextStroke: '2px #FFF7FE' }}>PULSE OF</p>
            <p className="text-[#FFF7FE] text-[clamp(44px,6vw,120px)] drop-shadow-[0_0_20px_#89E7FE]">TOKYO</p>
          </div>

          {/* BACKGROUND SKEW */}
          <div className="bg-[#89E7FE] w-full mx-auto h-[40vh] md:h-[90vh] lg:h-[40vh] skew-y-6" />

          {/* CAROUSEL */}
          <div className="absolute inset-0 flex items-center z-10 translate-y-[2%] lg:translate-y-[6%] justify-center">
            <div className="flex gap-4 px-4 overflow-x-auto overflow-y-hidden no-scrollbar touch-pan-x overscroll-x-contain w-full justify-start lg:justify-center">
              {EVENTS.map((event) => (
                <div key={event.id} className="relative w-[65vw] md:w-[35vw] lg:w-[22vw] aspect-[2.5/4] flex-shrink-0">

                  {event.type === "video" ? (
                    <VideoItem src={event.src} />
                  ) : (
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                      <Image
                        src={event.src}
                        alt={event.name}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 65vw, (max-width: 1024px) 35vw, 22vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    </div>
                  )}

                  {/* SHOW INFO */}
                  <div className="absolute bottom-[5%] left-4 leading-none z-20 pointer-events-auto">
                    <p className={`${fugaz.className} text-[#FFF7FE] text-[clamp(20px,2vw,28px)] uppercase`}>
                      {event.name}
                    </p>
                    <p
                      className={`${mistralLike.className} text-transparent text-[clamp(70px,7vw,140px)] hover:text-[#FFF7FE] hover:drop-shadow-[0_0_20px_#FFF7FE] transition duration-500`}
                      style={{ WebkitTextStroke: '2px #FFF7FE' }}
                    >
                      {event.time}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER TEXT & BUTTON */}
      <div className="px-5 2xl:pt-10 w-full pb-20">
        <p className={`${poppins.className} text-[#FFF7FE] text-[14px] md:text-[16px] lg:text-[20px] text-center lg:px-60 leading-relaxed opacity-80`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className={`${fugaz.className} text-[#FFF7FE] text-[clamp(16px,2.5vw,32px)] flex justify-center mt-5 lg:py-0`}>
          <button className="bg-[#FC5CF2] px-5 py-2 rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg">
            INDULGE TONIGHT
          </button>
        </div>
      </div>
    </div>
  );
}