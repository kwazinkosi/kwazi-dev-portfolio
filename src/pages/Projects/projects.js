import Footer from "../../components/footer"
import Navbar from "../../components/navbar"


export default function projects() {
  return (
    <div  className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2 flex-grow w-full">
      <Navbar/>
      <div className="flex flex-col justify-center w-full">

      </div>                                                                                                                              
      <div className=" flex flex-grow flex-col justify-end w-full">
        <Footer className="" >
          {/* <Socials /> */}
        </Footer>
      </div>
    </div> 
  )
}
