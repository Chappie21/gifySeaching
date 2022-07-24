import { GifCard } from "./index";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifFlex = ({ category = 'example text' }) => {

  const { gifs, loading } = useFetchGifs(category);

  if (loading) {
    return (
      <div className="text-center text-white">
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-white mt-5">{category}</h2>
      <div className="row row-cols-2">
        {
          gifs.map(image => <GifCard key={image.id} {...image} />)
        }
      </div>
    </>
  )
}