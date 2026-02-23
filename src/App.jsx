import{BrowserRouter,Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"
import NavBar from "./components/NavBar" 
import DirectorContainer from"./pages/DirectorContainer"
import DirectorList from "./pages/DirectorList"
import DirectorCard from "./pages/DirectorCard"
import DirectorForm from "./pages/DirectorForm"
import MovieForm from "./pages/MovieForm"
import MovieCard from "./pages/MovieCard"

 
const App = () => {
    return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        {/* Home & About */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Directors Parent Route */}
        <Route path="/directors" element={<DirectorContainer />}>

          {/* Nested routes under DirectorContainer */}
          <Route index element={<DirectorList />} />         {/* /directors */}
          <Route path="new" element={<DirectorForm />} />    {/* /directors/new */}
          <Route path=":id" element={<DirectorCard />} >     {/* /directors/:id */}

            {/* Nested routes under DirectorCard */}
            <Route path="movies/new" element={<MovieForm />} />      {/* /directors/:id/movies/new */}
            <Route path="movies/:movieId" element={<MovieCard />} /> {/* /directors/:id/movies/:movieId */}

          </Route>

        </Route>

        {/* Catch-all 404 */}
        <Route path="*" element={<ErrorPage />} />

      </Routes>

    </BrowserRouter>
    )
}

export default App
