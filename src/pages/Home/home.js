import HeroImage from "../../components/image";
import HeroIntro from "../../components/hero-intro";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <div className="z-10 h-screen bg-gradient-to-b from-tertiary1 to-tertiary2">
      <Navbar className =""/>
      {/* TODO -- find a better way than the use of style*/}
      <div style ={{"height":"60%"}} className=" mt-16 pt-16  sm:pt-20 md:pt-40 md:mt-20 lg:pt-48 lg:mt-20 flex items-center justify-center sm:p-6 md:p-8 lg:p-12 flex-col md:flex-row">
        <HeroIntro className="" />
        <HeroImage className="" />
      </div>
    </div>
  );
}
