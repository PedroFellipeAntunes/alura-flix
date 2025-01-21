import "./index.css";

export const Modal = ({ isOpen, onClose, data, onSave, categories }) => {
    if (!isOpen) return null;

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const updatedData = {
            id: data.id,
            title: event.target.title.value,
            image: event.target.image.value,
            category: event.target.category.value,
            video: event.target.video.value,
            description: event.target.description.value,
        };

        onSave(updatedData); // Save data
        onClose(); // Close modal
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="button-close">
                    <button className="modal-close" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <h2>Edit Card</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label>Title:</label>
                        <input required type="text" name="title" defaultValue={data.title} />
                    </section>
                    <section>
                        <label>Category:</label>
                        <select required name="category" defaultValue={data.category}>
                            {categories.map(([category]) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </section>
                    <section>
                        <label>URL Image:</label>
                        <input required type="text" name="image" defaultValue={data.image} />
                    </section>
                    <section>
                        <label>URL Video:</label>
                        <input required type="text" name="video" defaultValue={data.video} />
                    </section>
                    <section>
                        <label>Description:</label>
                        <textarea required name="description" defaultValue={data.description}></textarea>
                    </section>
                    <div className='buttons'>
                        <button type="submit">Store</button>
                    </div>
                </form>
            </div>
        </div>
    );
};