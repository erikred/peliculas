import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json'
import Paginacion from './Paginacion';
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState(1);

  let peliculas = peliculasJson;

  const buscarPeliculas = () => {
    let url = "";
  }

  const TOTAL_PER_PAGE = 3;

  const cargarPeliculas = () => {
    peliculas = peliculas.slice((currentPage-1)* TOTAL_PER_PAGE, currentPage * TOTAL_PER_PAGE);
  }

  const getTotalPage = () => {
    let totalAmountMovies = peliculasJson.length;
    return Math.ceil(totalAmountMovies / TOTAL_PER_PAGE);
  }

  cargarPeliculas();

  return (
    <PageWrapper>
      {
        peliculas.map(pelicula =>
          <Pelicula title={pelicula.title} img={pelicula.img} year={pelicula.year} rate={pelicula.year} runTime={pelicula.runTime} mmpa={pelicula.mmpa} release={pelicula.release} actors={pelicula.actors} directors={pelicula.directors}>
            {pelicula.description}
          </Pelicula>
        )
      }
      <Paginacion page={currentPage} total={getTotalPage()} onChange={(pagina)=>{
        setCurrentPage(pagina);
      }} />
    </PageWrapper>
  );
}

export default App;
