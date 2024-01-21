import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Socials from "../../components/socials"; 
import Hexagon from "../../components/hexagon";

const aboutTexts = [
  "—A passionate fullstack web developer. I craft dynamic web solutions with creativity and precision. ", 
  "Let's embark on a digital adventure where innovation meets seamless functionality." 
  
];
export default function about() {
  return (
    <div className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold text-white">About</h1>
        <div className="flex flex-row items-center justify-center">
           <Hexagon text={aboutTexts[0]} />
           <Hexagon text={aboutTexts[1]} />
        </div>
      </div>
      <div className="">
        <Footer className="" socials={Socials} />
      </div>
    </div>
  )
}
