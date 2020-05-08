import React, { Component } from "react";
import { getReviews } from "../../services/API";

export default class ReviewsPage extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const { match } = this.props;
    const { id } = match.params;

    getReviews(id).then(({ data }) => this.setState({ reviews: data.results }));
  };

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ author, id, content }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </>
    );
  }
}
