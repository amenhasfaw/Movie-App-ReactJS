import {useState} from 'react'
import getMovies from "./utils";

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
let moviesList = await getMovies(APIURL)

export default function Cards() {
    
    
    const ALT_POSTER = "https://ih1.redbubble.net/image.1027712254.9762/fposter,small,wall_texture,product,750x1000.u2.jpg";
    let IMGPATH = "https://image.tmdb.org/t/p/w1280"

    const [movies, setMovies] = useState(moviesList)


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
                    </div>  )     




    })
  )
}
