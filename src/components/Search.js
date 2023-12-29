import React, { useContext } from 'react'
import { AppContext } from './context'

const Search = () => {

    const { search, setSearch, isError } = useContext(AppContext)
    return (
        <>
            <div className='search-section'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type='text' value={search} placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                </form>
                <div className='error'>
                    <p>{isError.show && isError.msg}</p>
                </div>
            </div>

        </>
    )
}

export default Search
