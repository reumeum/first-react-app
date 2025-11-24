import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, movieNm, directors, movieNmEn, nationAlt, repGenreNm }) {
  return (
    <div>
      <h3>
        <Link to={`/movie/${id}`}>
          {movieNm}{" "}
          {directors.length > 0 &&
            `| ${directors.map((d) => d.peopleNm).join(", ")}`}
        </Link>
      </h3>
      {movieNmEn && <div>{`[${movieNmEn}]`}</div>}
      <div>
        {nationAlt} | {repGenreNm}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  movieNm: PropTypes.string.isRequired,
  directors: PropTypes.arrayOf(PropTypes.string),
  movieNmEn: PropTypes.string,
  nationAlt: PropTypes.string.isRequired,
  repGenreNm: PropTypes.string,
};

export default Movie;
