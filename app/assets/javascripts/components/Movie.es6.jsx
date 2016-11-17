class Movie extends React.Component {

  render() {
    return (
      <li>
        <h2>{this.props.data["Title"]} ({this.props.data["Year"]})</h2>
        <img src={this.props.data["Poster"]} />
        <hr />
      </li>
    )
  }
}
