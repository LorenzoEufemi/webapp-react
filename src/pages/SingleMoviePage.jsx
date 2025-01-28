import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import axios from "axios";

const initialValues = {
    name: "",
    text: "",
    vote: 0,
};

function SingleMoviePage() {
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialValues);//stato campi del form

    const getMovie = () => {
        axios.get(`${apiUrl}/movies/${slug}`).then((resp) => {
            setMovie(resp.data.data);
        })
    };

    useEffect(() => {
        getMovie()

    }, []);


    const storeReview = (formData) => {

        axios
            .post(`${apiUrl}/movies/${movie.id}/reviews`, formData)
            .then((resp) => {

                // Azzeriamo i campi del form
                setFormData(initialValues);
                // Se il salvataggio della review è andata a buon fine richiediamo i dati aggiornati del libro dal server
                getMovie();
            });
    };



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
                        <h3 className="mt-3">Recensioni: </h3>
                        <div className="row row-cols1 g-3 mt-3">
                            {movie.reviews.map(review => <ReviewCard key={review.id} review={review} />)}

                        </div>
                    </section>
                    <section className="mt-5">
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <h2 className="text-center">Invia una nuova recensione</h2>
                                <ReviewForm
                                    formData={formData}
                                    setFormData={setFormData}
                                    onSubmitFunction={storeReview}
                                />
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
export default SingleMoviePage;