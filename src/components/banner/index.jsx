import "./index.css"

export const Banner = ({ watchCard, categories }) => {
    if (!watchCard) {
        return (
            <div className="banner">
                <h1>No card found for Banner</h1>
            </div>
        )
    }

    const color = categories.find(([category]) => category === watchCard.category)?.[1] || "#FFFFFF";

    return (
        <div className="bg-img" style={{ backgroundImage: `url(${watchCard.image})` }}>
            <div className="data">
                <label style={{backgroundColor: color}}>{watchCard.category}</label>
                <h1>{watchCard.title}</h1> {/* Corrigi de 'tile' para 'title' */}
                <p>{watchCard.description}</p>
            </div>
            <div className="video">
                {watchCard.video && (
                    <iframe 
                        width="560" 
                        height="315" 
                        src={watchCard.video} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                )}
            </div>
        </div>
    );
};