import { createContext, useState, useEffect } from "react";
import { getMedias } from '../utils/requests';

export const MediasContext = createContext();

export default function MediasProvider({children}) {
    const [ moviesList, setMoviesList ] = useState({});
    const [ seriesList, setSeriesList ] = useState({});
    const [ page, setPage ] = useState(1);
    const [ sort, setSort ] = useState();
    const [ genre, setGenre ] = useState();
    const [ year, setYear ] = useState();

    /*useEffect(() => {
        console.log('url: ' + url);
        console.log('page: ' + page);
        setMedias(getMedias(url, page));
  
    }, [page, url]);

    useEffect(() => {
        console.log(medias.length);
    }, [medias]);*/

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