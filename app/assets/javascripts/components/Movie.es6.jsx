class Movie extends React.Component {

  render() {
    return (
      <li>
        <h2>{this.props.data["Title"]} ({this.props.data["Year"]})</h2>
        <a href={"http://www.imdb.com/title/" + this.props.data.imdbID}><img src={this.props.data["Poster"]} /></a>
        <hr />
      </li>
    )
  }
}
