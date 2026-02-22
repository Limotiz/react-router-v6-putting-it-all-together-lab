import { Link, Outlet, useOutletContext, useParams } from "react-router-dom"

function DirectorCard() {
  // Get directors and update function from context
  const { directors, updateDirectors } = useOutletContext()

  // Get director id from URL
  const { id } = useParams()

  // Find director by id (convert id to number)
 const director = directors.find(d => d.id === id)

  if (!director) return <h2>Director not found.</h2>

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>

      <h3>Movies:</h3>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>

      <Link to="movies/new">Add New Movie</Link>

      {/* Nested movie components */}
      <Outlet context={{ directors, updateDirectors }} />
    </div>
  )
}

export default DirectorCard