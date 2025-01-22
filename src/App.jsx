import { useState, useEffect } from 'react'
import { Header } from "./components/header"
import { Banner } from './components/banner'
import { Footer } from './components/footer'
import { Group } from './components/group'
import { Modal } from "./components/modal";

import { loadCards, updateCard, deleteCard } from "./services/cardService";

export const App = ({categories}) => {
  const [cards, setCards] = useState([]); // Data

  useEffect(() => {
    loadCards(setCards); // Load data when creating component
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editCard, setEditCard] = useState(null);
  const [watchCard, setWatchCard] = useState(null);

  // Initialize watchCard with the first card after the data is loaded
  useEffect(() => {
    if (cards.length > 0) {
      // Cria um mapa para priorizar as categorias baseado na ordem
      const categoryPriority = categories.map(category => category[0]);
  
      // Ordena os cards com base na prioridade das categorias
      const prioritizedCard = cards
        .filter(card => categoryPriority.includes(card.category)) // Filtra os cards que possuem categorias válidas
        .sort((a, b) => categoryPriority.indexOf(a.category) - categoryPriority.indexOf(b.category))[0]; // Ordena baseado na prioridade
  
      setWatchCard(prioritizedCard || cards[0]); // Define o card prioritário ou usa o primeiro como fallback
    }
  }, [cards, categories]); // Runs whenever cards changes

  // Function to update the currently watched card
  const changeWatchCard = (id) => {
    const card = cards.find((card) => card.id === id); // Find the card by ID
    setWatchCard(card || null); // Update watchCard (or null if not found)
  };

  const openModal = (data) => {
    setEditCard(data);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditCard(null);
  };

  const handleSave = (updatedData) => {
    // console.log(updatedData);
    updateCard(updatedData, setCards);
    closeModal();
  };

  const handleDelete = (data) => {
    deleteCard(data, setCards);
  };

  return (
    <div className='App'>
      <Header />
      <Banner watchCard={watchCard} categories={categories}/>
      <main>
        <Group
          openModal={openModal}
          label="Front-End"
          cards={cards.filter(card => card.category === "Front-End")}
          deleteCard={handleDelete}
          setWatchCard={changeWatchCard}
          categories={categories}
          />
        <Group
          openModal={openModal}
          label="Back-End"
          cards={cards.filter(card => card.category === "Back-End")}
          deleteCard={handleDelete}
          setWatchCard={changeWatchCard}
          categories={categories}
          />
        <Group
          openModal={openModal}
          label="Mobile"
          cards={cards.filter(card => card.category === "Mobile")}
          deleteCard={handleDelete}
          setWatchCard={changeWatchCard}
          categories={categories}
        />
      </main>
      <Footer />

      {/* Modal Overlay */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={editCard}
        onSave={handleSave}
        categories={categories}
      />
    </div>
  )
}