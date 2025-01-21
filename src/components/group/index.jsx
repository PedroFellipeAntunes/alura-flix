import "./index.css"
import { Card } from '../card'

export const Group = ({openModal, label, cards, deleteCard, setWatchCard, categories}) => {
    if (cards.length === 0) {
        return null;
    }

    const color = categories.find(([category]) => category === cards[0].category)?.[1] || "#FFFFFF";
    
    return (
        <div className="group">
            <label style={{backgroundColor: color}}>{label}</label>
            <ul>
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        openModal={openModal}
                        deleteCard={deleteCard}
                        setWatchCard={setWatchCard}
                    />
                ))}
            </ul>
        </div>
    )
}