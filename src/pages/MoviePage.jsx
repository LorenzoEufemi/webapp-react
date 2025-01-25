import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const getMovies = () => {
        const params = {};
        if (search.length > 0) {
            params.search = search;
        };

        axios.get(`${apiUrl}/movies`, { params }).then((resp) => {
            setMovies(resp.data.data);
        })
    };

    useEffect(() => {
        getMovies()

    }, []);

    const handleEnterKey = (event) => {
        if(event.key === "Enter"){
            getMovies()
        }
    };

    return (
        <>
            <section className="mt-4 mb-5">
                <h1>Una vasta selezione di film tutti in 4k</h1>
                <p>Seleziona il fim che più ti piace!</p>
                <button className="btn btn-primary mb-3 " onClick={() => navigate(-1)}>indietro</button>
            </section>
            <section>
                <h2>I nostri film:</h2>
                <div className="my-4 d-flex">
                    <input

                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        onKeyUp={handleEnterKey}
                        className="form-control"
                        type="search"
                        aria-label="Cerca film per parola chiave"
                        placeholder="Cerca film..."
                    />
                    <button onClick={getMovies} className="btn btn-primary ms-2">
                        Cerca
                    </button>
                </div>
                {movies.length > 0 ? (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                        {movies.map((curmovie) => (
                            <div className="col" key={curmovie.id}>
                                <MovieCard movie={curmovie} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="alert alert-warning">
                        Non abbiamo trovato nulla. Riprova!
                    </div>
                )}
            </section>
        </>
    )
}

export default MoviePage;