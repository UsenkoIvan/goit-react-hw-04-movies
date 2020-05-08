import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import Loader from "./Loader/Loader";

const AsyncHomePage = lazy(() =>
  import("../pages/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);

const AsyncMovieDetailsPage = lazy(() =>
  import(
    "../pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);
const AsyncMoviesPage = lazy(() =>
  import("../pages/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);

const AsyncErrorPage = lazy(() =>
  import("../pages/ErrorPage/ErrorPage" /* webpackChunkName: "ErrorPage" */)
);

const App = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={AsyncHomePage} />
          <Route path="/movies/:id" component={AsyncMovieDetailsPage} />
          <Route path="/movies" component={AsyncMoviesPage} />
          <Route component={AsyncErrorPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
