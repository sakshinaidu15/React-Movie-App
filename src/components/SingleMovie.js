import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleMovie = () => {
    const { id } = useParams()

    const [movie, setMovie] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const getMovie = async () => {
        try {
            const data = await fetch(`http://www.omdbapi.com/?apikey=586254a5&i=${id}`)
            const res = await data.json()
            if (res.Response === "True") {
                setMovie(res)
                setIsLoading(false)
                // console.log(res)
            }


        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovie()
    }, [id])

    const navigate = useNavigate()
    const goback = () => {
        navigate('/')
    }
    if (isLoading) {
        return (
            <div className="data-loading">
                Loading...
            </div>
        )
    }

    return (
        <>
            <div className="flex-container">
                <div className="poster">
                    <img src={movie.Poster} alt="" height="300px" width="300px"></img>

                </div>
                <div className="details">
                    <p className="text-bold"><i>Title: </i>{movie.Title}</p>
                    <p className="text-bold"><i>Released: </i>{movie.Released}</p>
                    <p className="text-bold"><i>Genre: </i>{movie.Genre}</p>
                    <p className="text-bold"><i>Country: </i>{movie.Country}</p>
                    <p className="text-bold"><i>Rating: </i>{movie.imdbRating}</p>
                    <button className="btn" onClick={goback}>Go Back</button>

                </div>

            </div>


        </>
    )
}
export default SingleMovie;