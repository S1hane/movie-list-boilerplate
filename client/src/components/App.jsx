import React from 'react';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="header">Welcome to Movie List</div>
        <div>your source for terrible movies!</div>
        <div>------------------------------------------</div>
        <div><MovieList movieList={this.state.movieList} /></div>
      </div>
    );
  }
}

export default App;
