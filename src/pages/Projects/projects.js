import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import Card from "../../components/portfolio-card"
import portData from "../../data/portfolio"
import "../../styles/portfolio.css"

export default function projects() {
  return (
    <div className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2 flex-grow w-full">
      <Navbar />
      {/* <div className="flex flex-col justify-center w-full px-4 py-8 mx-auto md:px-8 md:py-16 lg:px-16 lg:py-24 xl:px-32 xl:py-32 2xl:px-48 2xl:py-40">
        <h1 className="portfolio font-bold text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl 2xl:text-8xl">My Projects</h1>
      </div>                                                                                                                               */}
      <div className="flex flex-col justify-center w-full my-24 md:my-36 lg:my-40">
        <div className="flex flex-col items-center justify-center text-center flex-1 p-8 mx-4 sm:mx-12 md:mx-16 lg:mx-24 text-white ">
          <h1 className="portfolio font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            My Projects
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Here are some of the projects I've worked on.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mt-4 mx-8 sm:mx-12 md:mx-16 lg:mx-24 my-8">      
          {portData.map((data, i) => (
            <Card  key={i} title={data.title} description={data.description} image={data.image} link={data.github} />   
          ))}
        </div>
      </div>

      <div className=" flex flex-grow flex-col justify-end w-full">
        <Footer className=""></Footer>
      </div>
    </div>
  );
}
