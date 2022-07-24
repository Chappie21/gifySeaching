import { useState, useEffect } from "react"
import getGifts from "../api/getGifts";

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    // cuando el useEffect no tiene una observacion de estados en su arreglo de escucha, solo se ejecuta al renderizar el componente la primera vez
    useEffect(() => {
        getGiftsCategory();
        return
    }, []);

    const getGiftsCategory = async () => {
        try {
            setLoading(true);
            let data = await getGifts(category);
            setLoading(false);
            setGifs(data);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return {
        gifs,
        loading
    }
}