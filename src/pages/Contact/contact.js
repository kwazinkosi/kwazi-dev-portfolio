import Navbar from "../../components/navbar"  
import Footer from "../../components/footer";
import Socials from "../../components/socials";
// import Button from "../../components/button";
import ContactForm from "../../components/contact-form";


export default function contact() {
  return (
    <div className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center flex-1 px-20 text-white my-24 md:my-36 lg:my-40">
        <h1 className="about-text text-5xl font-bold ">Contact Me</h1>
        <ContactForm/> 
      </div>

      <div className="">
        <Footer className="" socials={Socials} />
      </div>
    </div>
  )
}
