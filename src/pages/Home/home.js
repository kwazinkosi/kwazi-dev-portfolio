import HeroImage from "../../components/image";
import HeroIntro from "../../components/hero-intro";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Socials from "../../components/socials"; 

// TODO: polish up the colors, footer and socials components
// TODO: add a favicon
// TODO: add a 404 page
// TODO: add a loading page
// TODO: remove unnecessary margins and paddings

export default function Home() {
  return (
    <div className="z-10 h-screen bg-gradient-to-b from-tertiary1 to-tertiary2">
      <Navbar className =""/>
      <div className="mt-16 pt-16 sm:pt-20 md:pt-auto md:mt-20 lg:pt-auto lg:mt-20 flex items-center justify-center sm:p-6 md:p-8 lg:p-12 flex-col md:flex-row">
        <HeroIntro className="" socials={Socials} />
        <HeroImage className="" />
        
      </div>
      <div className="">
        <Footer className="" socials={Socials} />
      </div>
    </div>
  );
}
