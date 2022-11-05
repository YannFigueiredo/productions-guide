import MediasList from '../../components/MediasList';
import { useContext, useEffect } from 'react';
import { MediasContext } from '../../contexts/MediasContext';
import { getMedias } from '../../utils/requests';

export default function Movies() {
    const { moviesList, setMoviesList, page, sort, genre, year, setPath } = useContext(MediasContext);
    
    useEffect(() => {
        setPath(1);
        let result = getMedias('/discover/movie', {page: page, sort_by: sort, with_genres: genre, year: year});

        result.then(result => {
            setMoviesList(result);
        });
    }, []);

    return(
        <div>
            <MediasList medias={moviesList} />
        </div>
    );
}