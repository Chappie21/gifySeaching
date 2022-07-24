import { useState } from 'react'

export const SearchComponent = ({ onNewCategory }) => {

    const [category, setCategory] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault(); // prevent page reload

        // dont emit event if category is empty or length is less than 1
        if (category.trim().length <= 1) return;

        onNewCategory(category.trim()); // emit the new category to the parent component
        setCategory(''); // reset the input
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    className="form-control border-white bg-black text-white"
                    aria-describedby="categorySearch"
                    placeholder='Search category'
                    value={category}
                    onChange={({ target: { value } }) => setCategory(value)}
                />
            </form>
        </>
    )
}