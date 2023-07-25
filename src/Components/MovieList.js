import React from 'react'

const MovieList =(props)=>{
    let {title,release,runtime,genre,director,actors,plot,language,poster,imdbRating,rated,boxoffice} = props;

    return (
      <div className="my-3" style={{ display:'flex', justifyContent:'center' }}>
        <div className="card" style={{width: '50%', height: '50%'}}>
          <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute', right:'0'}}>
          <span className="badge rounded-pill bg-danger">
            {rated}
          </span>
          </div>
          <img src={poster?poster:"https://www.rd.com/wp-content/uploads/2021/11/family-movies-opener-F.jpg"} className="card-img-top" alt="..." style={{height: '5%',margin: '0px 0px'}}/>
          <div className="card-body">
              <h1 className="card-title" style={{textAlign: 'center', fontFamily: 'fantasy', letterSpacing: '1px'}}><u>{title}</u></h1>
              <p></p>
              <p className="card-text"><b>Release Date: </b>{release}</p>
              <p className="card-text"><b>Laguange: </b>{language}</p>
              <p className="card-text"><b>Runtime: </b>{runtime}</p>
              <p className="card-text"><b>Plot: </b>{plot}</p>
              <p className="card-text"><b>Genre: </b>{genre}</p>
              <p className="card-text"><b>Actor(s): </b>{actors}</p>
              <p className="card-text"><b>Director(s): </b>{director}</p>
              <p className="card-text"><b>IMDB Rating: </b>{imdbRating}</p>
              <p className="card-text"><b>BoxOffice Collection: </b>{boxoffice?boxoffice:"N/A"}</p>
              
              {/* <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a> */}
          </div>
        </div>
      </div>
    )
}

export default MovieList