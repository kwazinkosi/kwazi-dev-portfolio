import Navbar from "../../components/navbar"  
import Footer from "../../components/footer";
import Socials from "../../components/socials";
// import Button from "../../components/button";
import ContactForm from "../../components/contact-form";


export default function contact() {
  return (
    <div className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center flex-1 p-8 mx-4 sm:mx-12 md:mx-16 lg:mx-24 text-white my-24 md:my-36 lg:my-40">
        <h1 className="about-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Contact Me</h1>
        <ContactForm/> 
      </div>

      <div className="">
        <Footer className="" socials={Socials} />
      </div>
    </div>
  )
}
