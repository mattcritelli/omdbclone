class MovieList extends React.Component {

  render() {
    return (
      <div>
        <h3> Your search results: </h3>
        <ul>
          {
            this.props.data.map((movie, i) => {
              return <Movie data={movie} key={i} />
            })
          }
        </ul>
      </div>
    )
  }
}
