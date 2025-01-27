import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SingleMoviePage from "./pages/SingleMoviePage";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies">
              <Route index element={<MoviePage />} />
              <Route path=":slug" element={<SingleMoviePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
