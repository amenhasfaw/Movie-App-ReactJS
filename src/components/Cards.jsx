import {useState, useEffect} from 'react'
import getMovies from "./utils";


const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function Cards({search}) {
    
    let IMGPATH = "https://image.tmdb.org/t/p/w1280"

    const [movies, setMovies] = useState([])

    async function fetchMovies(link) {
        const moviesList = await getMovies(link);
        setMovies(moviesList);
      }
    
    useEffect(() => {
        fetchMovies(APIURL);
      }, []);

    let searchTerm = ''
    if(search !== '' && searchTerm !== search){
        const link = SEARCHAPI + search
        fetchMovies(link)
        searchTerm = search
    }


  return (
    movies.map(movie => {
       const {id, title, vote_average, overview, release_date } = movie
       let {poster_path} = movie

        return ( 
            <div className='main' key = {id}>
                <img id={id} src={IMGPATH + poster_path}/>
                <div id="movie-info">
                    <h2>{title}</h2>
                    <span>{vote_average.toFixed(1)}</span>
                </div>
                <div id='overview'>
                <h4>Overview</h4>
                    {overview}
                <h4>Released: {release_date}</h4>
                </div> 
            </div>  
        )     

    })
  )
}
