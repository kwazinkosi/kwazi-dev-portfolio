import HeroImage from "../../components/image";
import HeroIntro from "../../components/hero-intro";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar className ="bg-gray-800 top-1"/>
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-tertiary1 to-tertiary2 sm:p-4 md:p-8 lg:p-12">
        <HeroIntro />
        <HeroImage />
      </div>
    </div>
  );
}
