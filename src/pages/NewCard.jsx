import './index.css'

import { Header } from '../components/header';
import { Footer } from '../components/footer';

import { createCard } from "../services/cardService";

export const NewCard = ({categories}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      image: event.target.image.value,
      category: event.target.category.value,
      video: event.target.video.value,
      description: event.target.description.value,
    };

    const isCreated = createCard(data);

    if (isCreated) {
      handleClear(event);
      alert("Card added sucessfully");
    } else {
      alert("Error when adding new card");
    }
  };

  const handleClear = (event) => {
    event.preventDefault();
    const form = event.target.closest("form");

    if (form) {
      form.reset();
    }
  };

  return (
    <div>
      <Header />
      <main className='new-page'>
        <h2>Add new Card</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input required type="text" name="title" placeholder='Title of video...' />
            </label>
            <label>
              Category:
              <select required name="category">
                <option value="">Select a category</option>
                {categories.map(([category]) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Image:
              <input required type="text" name="image" placeholder='Image url...' />
            </label>
            <label>
              Video:
              <input required type="text" name="video" placeholder='Video url...' />
            </label>
            <label>
              Description:
              <textarea required name="description" placeholder='Description'></textarea>
            </label>
            <div className='buttons'>
              <button type="submit">Store</button>
              <button type="button" onClick={handleClear}>Clear</button>
            </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};