import { Fugaz_One } from "next/font/google";
import { Poppins } from "next/font/google";
const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Pricing() {
  return (
    <div className="py-10 pb-35  overflow-hidden">
      <div className={`${fugaz.className} px-4 text-center pt-10 text-[44px] lg:flex lg:gap-5 lg:justify-center lg:text-[120px]`}>
        <p className="text-transparent" style={{ WebkitTextStroke: '1px #FFF7FE' }}> THE NIGHT </p>
        <p className="text-[#FFF7FE] drop-shadow-[0_0_20px_#FC5CF2]"> RATES </p>
      </div>

      {[
        { title: "NORMAL SEAT: 1 SET (50MIN)", price: "500,000" },
        { title: "POLE DANCE SEAT", price: "600,000" },
        { title: "VIP SEAT: 1 SET (50MIN)", price: "700,000" },
        { title: "VIP SEAT: 1 SET (50MIN)", price: "350,000" }
      ].map((item, index) => (
        /* Đã bỏ border-b ở đây */
        <div key={index} className="group relative px-4  transition-all duration-500 hover:bg-[#FC5CF2] cursor-pointer">

          {/* Hiệu ứng Ví màu xám rơi từ trên xuống */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[200%] opacity-0 
                      group-hover:-translate-y-1/2 group-hover:opacity-100 
                      transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 pointer-events-none">

            {/* Hình dáng cái ví màu xám tối giản */}
            <div className="
              absolute left-4 bottom-0 
              translate-x-0 
              translate-y-full 
              opacity-0
              group-hover:translate-y-[-1%] 
              group-hover:opacity-100 
              transition-all duration-500 
              ease-[cubic-bezier(0.34,1.56,0.64,1)] 
              z-20 pointer-events-none
            ">

              <div className="
                w-32 h-40 
                bg-[#D1D5DB] 
                shadow-[20px_20px_40px_rgba(0,0,0,0.4)] 
                rotate-[15deg] 
                rounded-md 
                border-l-4 border-gray-400
                scale-75
                group-hover:scale-125
                transition-all duration-500
                
              ">
              </div>

            </div>
          </div>

          {/* Nội dung text */}
          <div className="relative z-10">
            <p className={`${fugaz.className} text-[24px] text-transparent lg:text-[32px] transition-colors `}
              style={{ WebkitTextStroke: '1px #FFF7FE' }}>
              {item.title}
            </p>

            <div className="lg:flex lg:items-center justify-between">
              <p className={`${poppins.className} text-[#FFF7FE] pt-5 lg:text-[16px] max-w-2xl group-hover:text-white/90`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
              <p className={`${fugaz.className} text-[#FFF7FE] text-[40px] text-right pt-2 lg:text-[70px] whitespace-nowrap group-hover:text-white`} >
                {item.price}VND
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}