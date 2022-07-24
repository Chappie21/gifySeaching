const API_KEY = '47WaYkV30IEJ49B2zHDjHppWTADwb1Rl';

const getGifts = async (query) => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10`);
        const { data } = await response.json();
        const listGifs = data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }))
        return listGifs;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


export default getGifts;