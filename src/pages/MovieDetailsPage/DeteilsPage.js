import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieDetailsPage.module.css";

const DeteilsPage = ({
  id,
  onClickBTN,
  title,
  vote_average,
  overview,
  genres,
  poster_path,
}) => {
  return (
    <div className={styles.container}>
      <button onClick={onClickBTN} className={styles.btn}>
        Go back
      </button>

      <div className={styles.info}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="#"
        />
        <div>
          <h2>{title}</h2>
          <p>User Score:{vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres &&
              genres.length > 0 &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>

      <div>
        <p>Additional information</p>
        <ul>
          <Link to={{ pathname: `/movies/${id}/cast` }}>
            <li>Cast</li>
          </Link>
          <Link to={{ pathname: `/movies/${id}/reviews` }}>
            <li>Reviews</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DeteilsPage;
