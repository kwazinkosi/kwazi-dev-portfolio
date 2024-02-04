
export default function PortfolioCard({title, description, image, link}) {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 bg-primary rounded-lg shadow-lg w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto my-8 md:my-12 lg:my-16 xl:my-20 2xl:my-24">
        <div className="image mt-10">
            <img src={image} alt="project" className="rounded-lg"/>
        </div>
        <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mt-4">{title}</h3>
            <p className="text-lg text-secondary mt-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-lg text-secondary mt-4">View project</a>
        </div>
    </div>
    )
}