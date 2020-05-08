import React, { Component, lazy } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { getMoviesPage } from "../../services/API";

const AsyncSearchFormMovies = lazy(() =>
  import(
    "../../components/SearchFormMovies/SearchFormMovies" /* webpackChunkName:"SearchFormMovies" */
  )
);

const getQueryFromProps = (props) =>
  queryString.parse(props.location.search).search;

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const query = getQueryFromProps(this.props);

    this.fetchMovies(query);
  }

  componentDidUpdate(prevProps) {
    const prevQuery = getQueryFromProps(prevProps);
    const nextQuery = getQueryFromProps(this.props);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  handleSubmit = (query) => {
    const { history } = this.props;

    history.push({
      search: `?search=${query}`,
    });
  };

  fetchMovies = (query) => {
    getMoviesPage(query).then(({ data }) =>
      this.setState({
        movies: data.results,
      })
    );
  };

  render() {
    const { location, match } = this.props;
    const { movies } = this.state;
    return (
      <>
        <AsyncSearchFormMovies onSubmit={this.handleSubmit} />
        <ul>
          {movies.map(({ id, title }) => (
            <Link
              to={{
                pathname: `${match.path}/${id}`,
                state: { from: location },
              }}
            >
              <li key={id}>{title}</li>
            </Link>
          ))}
        </ul>
      </>
    );
  }
}
