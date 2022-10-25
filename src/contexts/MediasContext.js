import { createContext, useState, useEffect } from "react";
import { getMedias } from '../utils/requests';

export const MediasContext = createContext();

export default function MediasProvider({children}) {
    const [ medias, setMedias ] = useState({});
    //const [ url, setUrl ] = useState('');
    //const [ page, setPage ] = useState(1);

    /*useEffect(() => {
        console.log('url: ' + url);
        console.log('page: ' + page);
        setMedias(getMedias(url, page));
  
    }, [page, url]);

    useEffect(() => {
        console.log(medias.length);
    }, [medias]);*/

    return(
        <MediasContext.Provider value={{ medias, setMedias }}>
            {children}
        </MediasContext.Provider>
    )
}