import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getHomePage } from "../../services/API";
import styles from "./HomePage.module.css";

export default class HomePage extends Component {
  state = {
    trends: [],
    isLoading: false,
  };

  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
    match: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    this.fetchTrendMovies();
  }

  fetchTrendMovies = () => {
    this.setState({
      isLoading: true,
    });

    getHomePage()
      .then(({ data }) =>
        this.setState({
          trends: data.results,
        })
      )
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  };

  isLoading = () => {
    this.setState({ isLoading: true });
  };

  render() {
    const { trends } = this.state;

    return (
      <div>
        <h2 className={styles.title}>Trend Movie</h2>
        <ul className={styles.list}>
          {trends.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
