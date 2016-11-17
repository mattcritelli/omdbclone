class MovieSearch extends React.Component {

  handleSubmit(event){
    event.preventDefault();
    let title = this.refs.movie_search.value
    let type = this.refs.type_search.value
    // debugger
    $.ajax({
      url: "http://www.omdbapi.com/?s=" + title + "&type=" + type,
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
        <select ref="type_search" name="type">
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </form>
      </div>
    )
  }
}
