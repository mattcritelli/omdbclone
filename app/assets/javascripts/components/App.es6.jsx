class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }

  }

  getMovies(movies){
    this.setState({
      movies: movies
    })

  }

  render() {
    return(
      <body>
        <div>
          <MovieSearch onSearch={this.getMovies.bind(this)}/>
          <MovieList data={this.state.movies} />
        </div>
      </body>
    )
  }
}
