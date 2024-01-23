import Navbar from "../../components/navbar"  
import Footer from "../../components/footer";
import Socials from "../../components/socials";
// import Button from "../../components/button";
import ContactForm from "../../components/contact-form";


export default function contact() {
  return (
    <div className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold text-white">Contact</h1>
        <ContactForm/> 
      </div>

      <div className="">
        <Footer className="" socials={Socials} />
      </div>
    </div>
  )
}
