export const GifCard = ({id, title, url }) => {

    return (
        <div 
            className="container d-flex flex-column align-items-center justify-content-between m-lg-3 m-md-3 mt-3 p-0 border"
            style={{width: '18rem'}}
        >
            <img src={url} alt={title} className="img-fluid" style={{height: '90%'}} />
            <p className="text-center text-white mb-5">{title}</p>
        </div>
    )
}
