import Button from "./button"


export default function PortfolioCard({title, description, image, link}) {
        const handleClick = () => {
            window.open(link, '_blank'); // opens in new tab
            // console.log(link);
        }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 font-overpass gap-8 p-8 md:p-8 lg:p-12 xl:p-16 2xl:p-20 bg-gradient-to-b from-tertiary2 to-primary rounded-lg shadow-lg ">
            <div className="image mt-10">
                <img src={image} alt="project" className="rounded-lg"/>
            </div>
            <div className="flex flex-col justify-center ">
                <h3 className="text-2xl font-bold text-white mt-4 font-overpass">{title}</h3>
                <p className="text-lg text-white mt-4">{description}</p>
                <div className="mt-4 flex justify-start">
                    <Button text="View Project" onClick={handleClick} />
                </div>

            </div>
        </div>
    )
}