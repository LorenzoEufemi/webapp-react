import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateMoviePage () {
    const apiUrl = import.meta.env.VITE_API_URL;

  const defalutForm = {
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstract: "",
    image: "",
  };

  const [movieData, setMovieData] = useState(defalutForm);

  const navigate = useNavigate();

  const handelInputChange = (event) => {
    
    const inputName = event.target.name;
    if (inputName === "image") {
      
      const imageFile = event.target.files[0];
      const newObject = { ...movieData, image: imageFile };
      setMovieData(newObject);
    } else {
      const value = event.target.value;
      const newObject = {
        ...movieData,
        [inputName]: value,
      };
      setMovieData(newObject);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
   
    const dataToSend = new FormData();

   
    for (let key in movieData) {
      dataToSend.append(key, movieData[key]);
    }

    axios
      .post(`${apiUrl}/movies`, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        
        navigate("/movies");
      });
  };

  return (
    <>
      <h1 className="mt-3">Aggiungi un film</h1>
      <button className="btn btn-primary mt-3 mb-3" onClick={() => navigate(-1)}>indietro</button>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="title">Titolo:</label>
          <input
            required
            minLength="3"
            type="text"
            className="form-control"
            name="title"
            id="title"
            value={movieData.title}
            onChange={handelInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author">Regista:</label>
          <input
            type="text"
            className="form-control"
            name="author"
            id="author"
            value={movieData.director}
            onChange={handelInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre">Genere:</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            id="genre"
            value={movieData.genre}
            onChange={handelInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="abstract">Descrizione:</label>
          <textarea
            className="form-control"
            name="abstract"
            id="abstract"
            value={movieData.abstract}
            onChange={handelInputChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image">copertina del libro:</label>
          
          <input
            type="file"
            className="form-control"
            name="image"
            id="image"
            onChange={handelInputChange}
          />
        </div>
        <button className="btn btn-primary">Aggiungi</button>
      </form>
    </>
  );
};

export default CreateMoviePage;