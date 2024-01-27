import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import Card from "../../components/portfolio-card"

export default function projects() {
  return (
    <div  className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2 flex-grow w-full">
      <Navbar/>
      <div className="flex flex-col justify-center w-full px-4 py-8 mx-auto md:px-8 md:py-16 lg:px-16 lg:py-24 xl:px-32 xl:py-32 2xl:px-48 2xl:py-40">
        <h1 className="portfolio font-bold text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl 2xl:text-8xl">My Projects</h1>
      </div>                                                                                                                              
      <div className=" flex flex-grow flex-col justify-end w-full">
        <Footer className="" >
          {/* <Socials /> */}
        </Footer>
      </div>
    </div> 
  )
}
