import "./index.css";

export const Card = ({card, openModal, deleteCard, setWatchCard}) => {
    const handleImgClick = () => {
        setWatchCard(card.id);
    }

    const handleEditClick = () => {
        openModal(card);
    };

    const handleDeleteClick = () => {
        deleteCard(card.id);
    };

    const altImg = `${card.title} image`;

    return (
        <li id={card.id} className="card">
            <div className="card-data">
                <img onClick={handleImgClick} src={card.image} alt={altImg} />
            </div>
            <div className="card-options">
                <button onClick={handleDeleteClick}>Delete</button>
                <button onClick={handleEditClick}>Edit</button>
            </div>
        </li>
    );
};
