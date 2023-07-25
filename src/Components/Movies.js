import React, { useEffect,useState } from 'react'
import MovieList from './MovieList'

const Movies =(props)=> {

    const [title,setTitle] = useState()
    const [release,setRelease] = useState()
    const [runtime,setruntime] = useState()
    const [genre,setGenre] = useState()
    const [director,setDirector] = useState()
    const [actors,setActors] = useState()
    const [plot,setPlot] = useState()
    const [language,setLanguage] = useState()
    const [poster,setPoster] = useState()
    const [imdbRating,setImdbRating] = useState()
    const [rated,setRated] = useState()
    const [boxoffice,setBoxoffice] = useState()


    useEffect(()=>{
        props.setProgress(10);
        fetch(`http://www.omdbapi.com/?t=${props.movi}&apikey=358a768b`)
        .then((response) => response.json())
        .then((data) => {
            setTitle(data.Title)
            setRelease(data.Released)
            setruntime(data.Runtime)
            setGenre(data.Genre)
            setDirector(data.Director)
            setActors(data.Actors)
            setPlot(data.Plot)
            setLanguage(data.Language)
            setPoster(data.Poster)
            setImdbRating(data.imdbRating)
            setRated(data.Rated)
            setBoxoffice(data.BoxOffice)
            console.log(data.Year)
        });
        props.setProgress(100);
    })
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin: '20px 0px', marginTop: '59px'}}></h2>
        <MovieList title={title} release={release} runtime={runtime} genre={genre} director={director} actors={actors} plot={plot} language={language} poster={poster} imdbRating={imdbRating} rated={rated} boxoffice={boxoffice}/>
      </div>
    )
}

export default Movies
