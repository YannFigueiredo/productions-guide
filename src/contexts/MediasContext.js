import { createContext, useState } from "react";

export const MediasContext = createContext();

export default function MediasProvider({children}) {
    const [ moviesList, setMoviesList ] = useState({});
    const [ seriesList, setSeriesList ] = useState({});
    const [ page, setPage ] = useState(1);
    const [ sort, setSort ] = useState(null);
    const [ genre, setGenre ] = useState(null);
    const [ year, setYear ] = useState(null);

    return(
        <MediasContext.Provider value={{ 
                moviesList, setMoviesList, 
                seriesList, setSeriesList, 
                page, setPage,
                sort, setSort,
                genre, setGenre,
                year, setYear
             }}>
            {children}
        </MediasContext.Provider>
    )
}