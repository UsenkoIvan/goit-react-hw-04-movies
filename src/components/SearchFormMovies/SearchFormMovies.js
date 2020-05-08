import React, { Component } from "react";
import styles from "./SearchFormMovies.module.css";

export default class SearchFormMovies extends Component {
  state = {
    query: "",
  };

  handleChangeInput = (e) => {
    this.setState({ query: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    onSubmit(query);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Search films"
          onChange={this.handleChangeInput}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
