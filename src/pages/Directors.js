import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Directors() {
  const [directors, setDirectors] = useState([]);
  
  useEffect(()=> {
    fetch("http://localhost:4000/directors")
    .then((r)=> r.json())
    .then((directors)=> setDirectors(directors))
  })

  const articles = directors.map((director) => {
    return(
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>{director.movies.map((movie) => {
          return <li key={movie}>{movie}</li>
        })}</ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {articles}
      </main>
    </>
  );
};

export default Directors;
