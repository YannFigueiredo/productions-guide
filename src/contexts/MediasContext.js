import { createContext, useState, useEffect } from "react";

export const MediasContext = createContext();

export default function MediasProvider({children}) {
    const [ moviesList, setMoviesList ] = useState({});
    const [ seriesList, setSeriesList ] = useState({});
    const [ path, setPath ] = useState();
    const [ page, setPage ] = useState(5);
    const [ sort, setSort ] = useState(null);
    const [ genre, setGenre ] = useState(null);
    const [ year, setYear ] = useState(null);

    useEffect(() => {
        switch(window.location.pathname){
            case '/':
                setPath(0);
                break;
            case '/movies':
                setPath(1);
                break;
            case '/series':
                setPath(2);
                break;
            default:
                setPath(null);
        }
    }, []);

    return(
        <MediasContext.Provider value={{ 
                moviesList, setMoviesList, 
                seriesList, setSeriesList, 
                page, setPage,
                sort, setSort,
                genre, setGenre,
                year, setYear,
                path, setPath
             }}>
            {children}
        </MediasContext.Provider>
    )
}