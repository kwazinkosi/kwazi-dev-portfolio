import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Socials from "../../components/socials"; 
// import Button from "../../components/button";

export default function about() {
  return (
    <div className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold text-white">About</h1>
        <p className="text-white text-xl my-4">I am a passionate fullstack web developer based in Johannesburg. I craft dynamic web solutions with creativity and precision. Let's embark on a digital adventure where innovation meets seamless functionality.</p>
        <div className="flex flex-col items-center justify-center sm:justify-start md:justify-center lg:justify-center mb-10 md:mb-20 lg:mb-20 sm:flex-row md:flex-row lg:flex-row md:w-4/6 lg:w-1/2 sm:w-full lg:-mt-20 md:-mt-6 sm:-mt-4 mt-8 mx-4 md:mx-0">
            
        </div>
      </div>
      <div className="">
        <Footer className="" socials={Socials} />
      </div>
    </div>
  )
}
