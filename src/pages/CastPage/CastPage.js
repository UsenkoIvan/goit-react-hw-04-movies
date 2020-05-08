import React, { Component } from "react";
import { getCast } from "../../services/API";
import styles from "./CastPage.module.css";

export default class CastPage extends Component {
  state = { casts: [] };

  componentDidMount() {
    this.fetchCast();
  }

  fetchCast = () => {
    const { match } = this.props;
    const { id } = match.params;
    getCast(id).then(({ data }) => this.setState({ casts: data.cast }));
  };

  render() {
    const { casts } = this.state;
    return (
      <>
        <ul className={styles.list}>
          {casts &&
            casts.map(({ profile_path, name, character, id }) => (
              <li key={id} className={styles.listItem}>
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}
