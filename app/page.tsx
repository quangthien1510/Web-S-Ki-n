import Hero from "@/components/homes/Hero";
import EventInfo from "@/components/homes/EventInfo";
import Pricing from "@/components/homes/Pricing";
import Lineup from "@/components/homes/Lineup";
import CTA from "@/components/homes/CTA";
import Makers from "@/components/homes/Makers";
import Vip from "@/components/homes/Vip";
import Footer from "@/components/homes/Footer";
export default function Home() {
  
  return (
    <div className="bg-[#040308] lg:px-5  ">

      <Hero></Hero>

      <div id="events">
        <EventInfo />
      </div>

      <div id="price">
        <Pricing />
      </div>

      <div id="menu">
        <Lineup />
      </div>

      <CTA></CTA>

      <div id="crew">
        <Makers />
      </div>
      
      <Vip></Vip>
      <Footer></Footer>
    </div>
  )
}