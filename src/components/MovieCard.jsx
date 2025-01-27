import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

function MovieCard({ movie }) {

    return (
        <>
            <div className="card h-100" >
                <img src={
                    movie.image
                        ? `${apiUrl}/images/${movie.image}` : "https://placehold.jp/150x150.png"} className="card-img-top img" alt={`${movie.title}`} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <h6 className="card-title">{movie.director}</h6>
                    <p className="card-text">{movie.abstract}</p>
                    <Link to={`/movies/${movie.slug}`} className="btn btn-primary">Dettagli</Link>
                </div>
            </div>


        </>
    )
}

export default MovieCard;