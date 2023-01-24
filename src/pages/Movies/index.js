import MediasList from '../../components/MediasList';
import { useContext, useEffect } from 'react';
import { MediasContext } from '../../contexts/MediasContext';
import { getMedias } from '../../utils/requests';
import Pagination from '../../components/Pagination';
import Filters from '../../components/Filters';
import { Container } from './styles';

export default function Movies() {
    const { moviesList, setMoviesList, page, setPage, sort, genre, year, setPath } = useContext(MediasContext);
    
    useEffect(() => {
        setPath(1);
        setPage(1);
        let result = getMedias('/discover/movie', {page: page, sort_by: sort, with_genres: genre, year: year});

        result.then(result => {
            setMoviesList(result);
        });
    }, []);

    useEffect(() => {
        setPath(1);
       
        let result = getMedias('/discover/movie', {page: page, sort_by: sort, with_genres: genre, year: year});

        //console.log(result);
        //console.log(result.);

        result.then(result => {
            setMoviesList(result);
        });
    }, [ page, sort, genre, year ]);

    return(
        <Container>
            <Filters type={"movie"} show={true}/>
            <MediasList type={"movie"} medias={moviesList} />
            <Pagination lengthMedias={moviesList.total_pages}/>
        </Container>
    );
}