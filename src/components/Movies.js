import React, { useContext } from 'react'
import { AppContext } from './context'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../App.css'
import { NavLink } from 'react-router-dom'

const Movies = () => {

    const { movie, isLoading } = useContext(AppContext)
    if (isLoading) {
        return <div className='data-loading'>
            Loading...
        </div>
    }
    

    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    {movie
                        ? movie.map((value) => {
                            return (
                                <div className='col-md-3 col-sm-6 mt-5' key={value.imdbID}>
                                    <NavLink to={`/movie/${value.imdbID}`}>
                                        <div className='card movie-card'>
                                            <div className='card-header'>
                                                <img src={value.Poster} alt='' height="auto" width="100%" />

                                            </div>
                                            <div className='card-body'>
                                                <h6 className='text-center'>{value.Title}</h6>

                                            </div>

                                        </div>
                                    </NavLink>

                                </div>
                            )
                        })
                        : ""}
                </div>
            </div>

        </>
    )
}

export default Movies
