import React from 'react';
import MovieListItem from './MovieListItem.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>MovieList</span>
        <div> <MovieListItem movieList={this.props.movieList}/> </div>
      </div>
    );
  }
}
export default MovieList;
