import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import axios from "axios";

function SingleMoviePage() {
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${apiUrl}/movies/${slug}`).then((resp) => {
            setMovie(resp.data.data);
        })
    }, []);

    return (
        <>
            {movie && (
                <>
                    <section className="">
                        <button className="btn btn-primary mt-5 " onClick={() => navigate(-1)}>indietro</button>
                        <div className="card mt-5 w-75" >
                            <img src={`${apiUrl}/images/${movie.image}`} className="card-img-top " alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">{movie.title}</h3>
                                <h5 className="card-title">Regista: {movie.director} {movie.release_year}</h5>
                                <h6 className="card-title">Genere: {movie.genre}</h6>
                                <p className="card-text">Descr: {movie.abstract}</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row row-cols1 g-3 mt-5">
                            {movie.reviews.map(review => <ReviewCard key={review.id} review={review} />)}

                        </div>
                    </section>
                </>
            )}
        </>
    )
}
export default SingleMoviePage;