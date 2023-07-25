import React, { useState } from 'react'

const Navbar=(props)=>{

    const [name,setName] = useState()

    function handleSubmit(e){
        e.preventDefault()
        props.setMovi(name)
    }
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">MovieFinder - Find Your Comfort!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="search" onChange={e =>setName(e.target.value)} placeholder="Enter the Movie Name" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar