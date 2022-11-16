import MediasList from '../../components/MediasList';
import { useContext, useEffect } from 'react';
import { MediasContext } from '../../contexts/MediasContext';
import { getMedias } from '../../utils/requests';
import Pagination from '../../components/Pagination';
import Filters from '../../components/Filters';

export default function Series() {
    const { seriesList, setSeriesList, page, setPage, sort, genre, year, setPath } = useContext(MediasContext);
    
    useEffect(() => {
        setPath(2);
        setPage(1);
        let result = getMedias('/discover/tv', {page: page, sort_by: sort, with_genres: genre, year: year});

        result.then(result => {
            setSeriesList(result);
        });
    }, []);

    useEffect(() => {
        setPath(2);

        let result = getMedias('/discover/tv', {page: page, sort_by: sort, with_genres: genre, year: year});

        result.then(result => {
            setSeriesList(result);
        });
    }, [page, sort, genre, year]);

    return(
        <div>
            <Filters type={"tv"} show={true}/>
            <MediasList type={"tv"} medias={seriesList} />
            <Pagination lengthMedias={seriesList.total_pages}/>
        </div>
    );
}