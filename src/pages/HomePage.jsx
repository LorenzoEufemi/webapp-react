
import { Link } from "react-router-dom";

function HomePage() {

    return (
        <>
            <section className="text-center mt-4">

                <h3>La nostra app offre un catalogo immenso di film</h3>
                <p>Qui è dove puoi vedere quello che vuoi quando vuoi!</p>
                <Link to="/movies" className="btn btn-primary">Vai al catalogo</Link>
            </section>
        </>
    )
}

export default HomePage;