import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {


    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState({show: false, msg: ""})
    const [search, setSearch] = useState("titanic")

    const getMovies = async() => {
        try {
            const data = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`)
            const res = await data.json()                                                                                        
            console.log(res) 
            if(res.Response === "True") {
                setMovie(res.Search)
                setIsLoading(false)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                setIsError({
                    show: false,
                    msg: ""
                })
            }
            else {
                setIsError({
                    show: true,
                    msg: res.Error
                })
            }
            setMovie(res.Search)

        }
        catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        const timerOut = setTimeout(() => {
            getMovies()
        }, 1000)

        return () => clearTimeout(timerOut)
        
    }, [search])
    
    return <AppContext.Provider value={{isLoading, isError, movie, search, setSearch}}>
        {children}

    </AppContext.Provider>

}
export {AppContext, AppProvider}

