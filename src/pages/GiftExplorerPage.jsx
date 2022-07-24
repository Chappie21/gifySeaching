import { useState } from "react"
import { SearchComponent, GifFlex } from "../components";


const GiftExplorerPage = () => {

    const [category, setCategory] = useState([]);
    const [categoryExist, setCategoryExist] = useState(false);

    const addNewCategory = (value) => {
        const exist = category.find(cat => cat.toLowerCase() === value.toLowerCase());
        ;
        setCategoryExist(exist ? true : false);

        // if category does not exist, add it
        if (exist) return;

        // add new category to the array
        setCategory([value, ...category]);
    }


    return (
        <div className="d-flex flex-column justify-content-center bg-black m-0 p-0 vh-100">
            <div className="container w-50 h-50">
                <h1 className="text-center text-white mb-5">Gify explorer</h1>
                <SearchComponent onNewCategory={addNewCategory} />
                {
                    categoryExist === true &&
                    <div className="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                        <strong>Category already exist</strong>
                        <button type="button" className="btn-close" onClick={() => setCategoryExist(false)}></button>
                    </div>
                }
                {
                    category.map(cat => <GifFlex key={cat} category={cat} />)
                }
            </div>
        </div>
    )
}

export default GiftExplorerPage
