// AddCatForm.jsx
import React, { useState } from 'react';

function AddCatForm(props) {
    const { onAddCat } = props;
    const [newCat, setNewCat] = useState({ name: '', latinName: '', image: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCat({ ...newCat, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat(newCat);
        setNewCat({ name: '', latinName: '', image: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={newCat.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="latinName"
                placeholder="Latin Name"
                value={newCat.latinName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newCat.image}
                onChange={handleChange}
            />
            <button type="submit">Add Cat</button>
        </form>
    );
}

export default AddCatForm;
