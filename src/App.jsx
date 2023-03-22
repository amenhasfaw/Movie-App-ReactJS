import Header from './components/Header'
import getMovies from './components/utils'
import Cards from './components/Cards';

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
console.log(getMovies(APIURL))
function App() {
  return (
    <>
      <Header/>
      <div id="movies">
        <Cards/>
      </div>
    </>
  )
}

export default App
