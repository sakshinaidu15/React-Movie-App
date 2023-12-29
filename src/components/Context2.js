import React, { createContext} from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [movie, setMovie] = useState([])

    const getMovies = async() => {
        try {
            const data = await fetch(`http://www.omdbapi.com/?apikey= &s=titanic`)
            const res = await data.json()
            console.log(res) 
            setMovie(res)
          

        }
        catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getMovies()
    }, [])
    
    return <AppContext.Provider value={{movie}}>
        {children}

    </AppContext.Provider>

}
export {AppContext, AppProvider}

