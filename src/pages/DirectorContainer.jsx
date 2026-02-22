import { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom"

const DirectorContainer = () => {
  const [directors, setDirectors] = useState([])

  // Fetch directors from backend
  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(r => {
        if (!r.ok) throw new Error("failed to fetch directors")
        return r.json()
      })
      .then(setDirectors)
      .catch(console.log)
  }, [])

  // Add new director to state
  const addDirector = (newDirector) => {
    setDirectors(prev => [...prev, newDirector])
  }

  // Update director in state
  const updateDirectors = (updatedDirector) => {
    setDirectors(prev => prev.map(d => 
      d.id === updatedDirector.id ? updatedDirector : d
    ))
  }

  return (
    <main>
      <h1>Welcome to the Director's Directory!</h1>

      {/* Link to create new director */}
      <Link to="new">Add a new Director</Link>

      {/* Nested routes will render here */}
      <Outlet context={{ directors, addDirector, updateDirectors }} />
    </main>
  )
}

export default DirectorContainer;