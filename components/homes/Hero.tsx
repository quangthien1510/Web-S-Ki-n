// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { Fugaz_One, Poppins, Kaushan_Script } from "next/font/google";
// import { useRef, useEffect } from "react";

// const mistralLike = Kaushan_Script({
//   subsets: ["latin"],
//   weight: "400",
// });

// const fugaz = Fugaz_One({
//   subsets: ["latin"],
//   weight: "400",
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const VideoItem = ({ src }: { src: string }) => {
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const toggleMute = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   return (
//     <div className="relative w-full h-full">
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="w-full h-full object-cover pointer-events-none"
//       >
//         <source src={src} type="video/mp4" />
//       </video>
//       <button
//         onClick={toggleMute}
//         className="absolute top-4 right-4 z-50 bg-black/40 p-2 rounded-full text-white pointer-events-auto hover:bg-[#FC5CF2] transition"
//       >
//         {isMuted ? "🔇" : "🔊"}
//       </button>
//     </div>
//   );
// };

// export default function Hero() {
//   const [open, setOpen] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   // LOGIC CĂN GIỮA KHI LOAD TRANG
//   useEffect(() => {
//     if (scrollRef.current) {
//       const slider = scrollRef.current;
//       // Tính toán: (Tổng độ dài nội dung - Độ dài khung nhìn) / 2 = Vị trí chính giữa
//       const center = (slider.scrollWidth - slider.clientWidth) / 2;
//       slider.scrollLeft = center;
//     }
//   }, []); // Chạy 1 lần duy nhất khi load trang

//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (!scrollRef.current) return;
//     setIsDragging(true);
//     setStartX(e.pageX - scrollRef.current.offsetLeft);
//     setScrollLeft(scrollRef.current.scrollLeft);
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging || !scrollRef.current) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const stopDragging = () => setIsDragging(false);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="w-full overflow-x-hidden">
//       <div className="relative w-full">
//         {/* MENU */}
//         <div className="flex items-center justify-between px-4 md:px-8 fixed top-0 left-0 z-50 w-full bg-black/20 backdrop-blur-md">
//           <div className="flex items-center gap-6">
//             <div >
//               <Image src="/images/logo.png" alt="logo" width={3000} height={3000} className="w-30 lg:w-60" />
//             </div>
//             <div className={`${fugaz.className} hidden md:flex gap-8 lg:gap-14  text-white italic text-[16px] md:text-[18px] lg:text-[32px]`}>
//               <span onClick={() => scrollTo("events")} className="cursor-pointer hover:text-[#FC5CF2] transition">EVENTS</span>
//               <span onClick={() => scrollTo("price")} className="cursor-pointer hover:text-[#FC5CF2] transition">PRICE</span>
//               <span onClick={() => scrollTo("menu")} className="cursor-pointer hover:text-[#FC5CF2] transition">MENU</span>
//               <span onClick={() => scrollTo("crew")} className="cursor-pointer hover:text-[#FC5CF2] transition">OUR CREW</span>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">

//             <div className={`${fugaz.className} text-[#FFF7FE] text-[clamp(16px,2.5vw,32px)] flex justify-center mt-5 lg:py-0`}>
//               <button className="bg-[#FC5CF2] px-5 py-2 rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg">
//                 INDULGE TONIGHT
//               </button>
//             </div>

//             <div className="md:hidden text-3xl text-white cursor-pointer" onClick={() => setOpen(true)}>☰</div>
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         <div className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-10 text-white text-3xl bg-black/90 backdrop-blur-md transition-all duration-500 transform ${open ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}`}>
//           <div className="absolute top-5 right-5 text-4xl cursor-pointer" onClick={() => setOpen(false)}>✕</div>
//           <span onClick={() => { scrollTo("events"); setOpen(false); }}>EVENTS</span>
//           <span onClick={() => { scrollTo("price"); setOpen(false); }}>PRICE</span>
//           <span onClick={() => { scrollTo("menu"); setOpen(false); }}>MENU</span>
//           <span onClick={() => { scrollTo("crew"); setOpen(false); }}>OUR CREW</span>
//         </div>

//         {/* SLIDER (Added Scroll Center Logic) */}
//         <div
//           ref={scrollRef}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={stopDragging}
//           onMouseLeave={stopDragging}
//           className={`flex items-center gap-4 h-[400px] lg:h-[650px] pt-30 lg:pt-65  overflow-x-auto no-scrollbar -skew-y-6 select-none cursor-grab active:cursor-grabbing ${isDragging ? "scroll-auto" : "snap-x snap-mandatory scroll-smooth"}`}
//         >
//           {[
//             { src: "/images/imageleft.png", type: "image" },
//             { src: "/video/Douyin.mp4", type: "video" },
//             { src: "/video/Social.mp4", type: "video" },
//             { src: "/video/actuall.mp4", type: "video" },
//             { src: "/images/imageright.png", type: "image" }
//           ].map((item, i) => (
//             <div
//               key={i}
//               className={`flex-shrink-0 snap-center h-full overflow-hidden border border-white/10 ${i === 2 ? 'w-[70vw] md:w-[35vw]' : 'w-[50vw] md:w-[25vw]'}`}
//             >
//               {item.type === "video" ? <VideoItem src={item.src} /> : (
//                 <div className="relative w-full h-full">
//                   <Image src={item.src} fill alt="" className="object-cover pointer-events-none" />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* TEXT OVERLAY */}
//         <div className="absolute inset-0 flex flex-col justify-center top-30 px-4 md:px-10 lg:top-90 pointer-events-none z-20">
//           <div className="transform -skew-y-6 leading-[0.9]">
//             <p className={`${fugaz.className} text-white text-[32px] md:text-[80px] lg:text-[120px]`}>THE BEST</p>
//             <p className={`${mistralLike.className} text-white text-[50px] md:text-[110px] lg:text-[200px] drop-shadow-[0_0_20px_#FC5CF2]`}>NEVER STOPS</p>
//           </div>
//         </div>

//         {/* DESCRIPTION */}
//         <div className="relative lg:pt-50 px-4 md:mt-16 lg:mt-35 md:px-10 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">

//           <p className={`${poppins.className} text-white text-sm md:text-base lg:w-[50%]`}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//           </p>
//           <div className={`${fugaz.className} text-[#FFF7FE] text-[clamp(16px,2.5vw,32px)] flex justify-center py-10 lg:py-0`}>
//             <button className="bg-[#FC5CF2] px-10 py-3 rounded-full hover:scale-90 transition-transform active:scale-95 shadow-lg">
//               INDULGE TONIGHT
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Fugaz_One, Poppins, Kaushan_Script } from "next/font/google";

const mistralLike = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const VideoItem = ({ src }: { src: string }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src={src} type="video/mp4" />
      </video>

      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-50 bg-black/40 p-2 rounded-full text-white hover:bg-[#FC5CF2] transition"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default function Hero() {
  const [open, setOpen] = useState(false);

  // ✅ NAVBAR STATE (NEW)
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // CENTER SLIDER
  useEffect(() => {
    if (scrollRef.current) {
      const slider = scrollRef.current;
      const center = (slider.scrollWidth - slider.clientWidth) / 2;
      slider.scrollLeft = center;
    }
  }, []);

  // 🔥 NAVBAR LOGIC PRO
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // kéo lên → hiện
      if (currentY < lastScrollY) {
        setShowNav(true);
      }

      // kéo xuống → ẩn
      if (currentY > lastScrollY) {
        setShowNav(false);
      }

      setLastScrollY(currentY);

      // đứng yên → ẩn
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowNav(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [lastScrollY]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative w-full">

        {/* ================= NAVBAR ================= */}
        <div
          className={`flex items-center justify-between px-4 md:px-8 fixed top-0 left-0 z-50 w-full backdrop-blur-md transition-all duration-500
          ${showNav ? "translate-y-0 opacity-100 bg-black/40" : "-translate-y-full opacity-0"}`}
        >
          <div className="flex items-center gap-6">
            <Image src="/images/logo.png" alt="logo" width={3000} height={3000} className="w-30 lg:w-60" />

            <div className={`${fugaz.className} hidden md:flex gap-8 lg:gap-14 text-white italic text-[16px] md:text-[18px] lg:text-[32px]`}>
              <span onClick={() => scrollTo("events")} className="cursor-pointer hover:text-[#FC5CF2]">EVENTS</span>
              <span onClick={() => scrollTo("price")} className="cursor-pointer hover:text-[#FC5CF2]">PRICE</span>
              <span onClick={() => scrollTo("menu")} className="cursor-pointer hover:text-[#FC5CF2]">MENU</span>
              <span onClick={() => scrollTo("crew")} className="cursor-pointer hover:text-[#FC5CF2]">OUR CREW</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`${fugaz.className} text-[#FFF7FE] text-[clamp(16px,2.5vw,32px)] flex justify-center mt-5 lg:py-0`}>
              <button className="bg-[#FC5CF2] px-5 py-2 rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg">
                INDULGE TONIGHT
              </button>
            </div>

            <div className="md:hidden text-3xl text-white cursor-pointer" onClick={() => setOpen(true)}>
              ☰
            </div>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-10 text-white text-3xl bg-black/90 backdrop-blur-md transition-all duration-500
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
        >
          <div className="absolute top-5 right-5 text-4xl cursor-pointer" onClick={() => setOpen(false)}>
            ✕
          </div>

          <span onClick={() => { scrollTo("events"); setOpen(false); }}>EVENTS</span>
          <span onClick={() => { scrollTo("price"); setOpen(false); }}>PRICE</span>
          <span onClick={() => { scrollTo("menu"); setOpen(false); }}>MENU</span>
          <span onClick={() => { scrollTo("crew"); setOpen(false); }}>OUR CREW</span>
        </div>

        {/* ================= SLIDER ================= */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className={`flex items-center gap-4 h-[400px] lg:h-[650px] pt-30 lg:pt-65 overflow-x-auto no-scrollbar -skew-y-6 select-none cursor-grab active:cursor-grabbing ${isDragging ? "scroll-auto" : "snap-x snap-mandatory scroll-smooth"}`}
        >
          {[
            { src: "/images/imageleft.png", type: "image" },
            { src: "/video/Douyin.mp4", type: "video" },
            { src: "/video/Social.mp4", type: "video" },
            { src: "/video/actuall.mp4", type: "video" },
            { src: "/images/imageright.png", type: "image" }
          ].map((item, i) => (
            <div
              key={i}
              className={`flex-shrink-0 snap-center h-full overflow-hidden border border-white/10 ${i === 2 ? 'w-[70vw] md:w-[35vw]' : 'w-[50vw] md:w-[25vw]'}`}
            >
              {item.type === "video" ? (
                <VideoItem src={item.src} />
              ) : (
                <div className="relative w-full h-full">
                  <Image src={item.src} fill alt="" className="object-cover pointer-events-none" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TEXT + DESCRIPTION giữ nguyên của bạn */}
        <div className="absolute inset-0 flex flex-col justify-center top-10 px-4 md:px-10 lg:top-90 pointer-events-none z-20">
          <div className="transform -skew-y-6 leading-[0.9]">
            <p className={`${fugaz.className} text-white text-[32px] md:text-[80px] lg:text-[120px]`}>THE BEST</p>
            <p className={`${mistralLike.className} text-white text-[50px] md:text-[110px] lg:text-[200px] drop-shadow-[0_0_20px_#FC5CF2]`}>
              NEVER STOPS
            </p>
          </div>
        </div>

        <div className="relative mt-30 lg:pt-50 px-4 md:mt-16 lg:mt-35 md:px-10 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          <p className={`${poppins.className} text-white text-sm md:text-base lg:w-[50%]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>

          <div className={`${fugaz.className} text-[#FFF7FE] text-[clamp(16px,2.5vw,32px)] flex justify-center py-10 lg:py-0`}>
            <button className="bg-[#FC5CF2] px-10 py-3 rounded-full hover:scale-90 transition-transform active:scale-95 shadow-lg">
              INDULGE TONIGHT
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}