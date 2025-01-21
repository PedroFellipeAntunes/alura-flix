// connection com backend
async function listCards() {
    const connection = await fetch("http://localhost:3000/cards");

    if (!connection.ok) {
        throw new Error("Error when loading data");
    }

    return await connection.json();
}

async function createCard(data) {
    const connection = await fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: data.title,
            category: data.category,
            image: data.image,
            video: data.video,
            description: data.description
        })
    });

    if (!connection.ok) {
        throw new Error("Error when creating data");
    }

    return await connection.json();
}

async function updateCard(updatedCardData) {
    const connection = await fetch(`http://localhost:3000/cards/${updatedCardData.id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: updatedCardData.title,
            category: updatedCardData.category,
            image: updatedCardData.image,
            video: updatedCardData.video,
            description: updatedCardData.description
        })
    });

    if (!connection.ok) {
        throw new Error("Error when updating data");
    }

    return await connection.json();
}

async function deleteCard(id) {
    const connection = await fetch(`http://localhost:3000/cards/${id}`, {
        method: "DELETE"
    });

    if (!connection.ok) {
        throw new Error("Error when deleting data");
    }

    return await connection.json();
}

export const connectApi = {
    listCards,
    createCard,
    deleteCard,
    updateCard
}