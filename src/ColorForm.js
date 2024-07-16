import React, { useState } from 'react';

function ColorForm({ addColor }) {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            addColor(input);
            setInput(''); // Clear the input field after submission
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter a color"
            />
            <button type="submit">Add Color</button>
        </form>
    );
}

export default ColorForm;
