import { connectApi } from "./connectApi";

// Load
export const loadCards = async (setCards) => {
  try {
    const data = await connectApi.listCards();
    setCards(data);
  } catch (e) {
    console.error(e);
  }
};

// Create
export const createCard = async (newCardData, setCards) => {
  try {
    //No need to return because it happens on another window
    await connectApi.createCard(newCardData);
  } catch (e) {
    console.error(e);
  }
};

// Update
export const updateCard = async (updatedCardData, setCards) => {
  try {
    // console.log("bf",updatedCardData)
    const updatedCard = await connectApi.updateCard(updatedCardData);
    // console.log("after",updatedCard)
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
  } catch (e) {
    console.error(e);
  }
};

// Delete
export const deleteCard = async (cardId, setCards) => {
  try {
    await connectApi.deleteCard(cardId);
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  } catch (e) {
    console.error(e);
  }
};