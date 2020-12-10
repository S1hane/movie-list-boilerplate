import React from 'react';
class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    debugger;
    const output = this.props.movieList.map((item, index, array) => {
      <div key={item + index}>{item.title}</div>;
    });

    return (
      <div>{output}</div>
    );
  }
}

export default MovieListItem;
