import React, { Component, lazy } from "react";
import { Route } from "react-router-dom";
import { getMovieDetailsPage } from "../../services/API";

const AsyncDetailsPage = lazy(() =>
  import("./DeteilsPage" /* webpackChunkName: "DetailsPage" */)
);

const AsyncCastPage = lazy(() =>
  import("../CastPage/CastPage" /* webpackChunkName: "CastPage" */)
);

const AsyncReviewsPage = lazy(() =>
  import("../ReviewsPage/ReviewsPage" /* webpackChunkName: "ReviewsPage" */)
);

export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    const { match } = this.props;
    const { id } = match.params;

    getMovieDetailsPage(id).then(({ data }) =>
      this.setState({
        movie: data,
      })
    );
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }

    if (location.state === undefined) {
      history.push("/");
    }
  };

  render() {
    const { movie } = this.state;
    const { location } = this.props;

    return (
      <>
        <AsyncDetailsPage
          {...movie}
          location={location}
          onClickBTN={this.handleGoBack}
        />
        <Route path="/movies/:id/cast" component={AsyncCastPage} />
        <Route path="/movies/:id/reviews" component={AsyncReviewsPage} />
      </>
    );
  }
}
