import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "1d2ef93d69da113c6465c0b70ac8b17a";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo?key=${API_KEY}&movieCd=${id}`
      )
    ).json();
    setMovie(json.movieInfoResult.movieInfo);
    setLoading(false);
  };

  const MovieDetail = () => {
    console.log(movie);
    return (
      <div>
        <h1>
          {movie.movieNm} ({movie.movieNmEn})
        </h1>
        <h2>Actors</h2>
        <div>
          {movie.actors.map((a) => {
            return <div>{a.peopleNm}</div>;
          })}
        </div>
        <h2>Genres</h2>
        <div>
          <div>{movie.genres.map((g) => g.genreNm).join(", ")}</div>
        </div>
        <h2>개봉일</h2>
        <div>{`${movie.openDt.slice(0, 4)}년 ${movie.openDt.slice(
          4,
          6
        )}월 ${movie.openDt.slice(6, 8)}일`}</div>
      </div>
    );
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : <MovieDetail />}</div>;
}

export default Detail;
