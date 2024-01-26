

export default function PortfolioCard({title, description, image, link}) {
    return (
        <div className="card">
            <img src={image} alt={`Image for ${title}`} />
            <div className="card-body">
            <header><h3>{title}</h3></header>
                <section><p>{description}</p></section>
                <a href={link} target="_blank" rel="noopener noreferrer">View</a>
            </div>
        </div>
    )
}