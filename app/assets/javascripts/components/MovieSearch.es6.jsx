class MovieSearch extends React.Component {

  handleSubmit(event){
    event.preventDefault();
    let title = this.refs.movie_search.value
    $.ajax({
      url: "http://www.omdbapi.com/?s=" + title,
      method: 'get'
    })
    .done(function(response){
      this.props.onSearch(response.Search)
    }.bind(this))
  }


  render () {
    return (
      <div>
      <form id="movie-search-form" onSubmit={this.handleSubmit.bind(this)} >
        <input ref="movie_search" type="text" name="query" placeholder="Search for movie..." />
        <select name="type">
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </form>
      </div>
    )
  }
}
