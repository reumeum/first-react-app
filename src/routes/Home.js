import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const API_KEY = "1d2ef93d69da113c6465c0b70ac8b17a";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${API_KEY}`
      )
    ).json();
    setMovies(json.movieListResult.movieList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  const Movies = () => {
    return (
      <div>
        <h1>Movies List</h1>
        <div>
          {movies.map((m) => (
            <Movie
              key={m.movieCd}
              id={m.movieCd}
              movieNm={m.movieNm}
              directors={m.directors}
              movieNmEn={m.movieNmEn}
              nationAlt={m.nationAlt}
              repGenreNm={m.repGenreNm}
            />
          ))}
        </div>
      </div>
    );
  };
  return <div>{loading ? <h1>Loading...</h1> : <Movies />}</div>;
}

export default Home;