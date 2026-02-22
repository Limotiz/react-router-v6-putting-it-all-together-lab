import { Link } from "react-router-dom"

function Home() {
  return (
    <main>
      <h1>🎬 Welcome to the Movie Directory 🎥</h1>
      <p>
        Explore a collection of famous directors and their iconic movies. Click
        below to start exploring!
      </p>
      <nav>
        {/* Links to Directors and About pages */}
        <Link to="/directors">View Directors</Link> |{" "}
        <Link to="/about">Learn More About This App</Link>
      </nav>
    </main>
  )
}

export default Home