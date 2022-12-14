import MediasList from '../../components/MediasList';
import { useContext, useEffect, useState } from 'react';
import { MediasContext } from '../../contexts/MediasContext';
import { getMedias } from '../../utils/requests';
import Pagination from '../../components/Pagination';
import Filters from '../../components/Filters';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

export default function Search() {
    const { page, setPage, genre, year, sort, setPath } = useContext(MediasContext);
    const [ medias, setMedias ] = useState({});
    const { type, query } = useParams();

    useEffect(() => {
        setPage(1);
        setPath(-1); 

        let result = getMedias(`/search/${type}?query=${encodeURI(query)}`, {page: page, sort_by: sort, with_genres: genre, year: year});

        result.then(result => {
            setMedias(result);
        });
    }, []);

    useEffect(() => {
        setPath(-1);

        let result = getMedias(`/search/${type}?query=${encodeURI(query)}`, {page: page, sort_by: sort, with_genres: genre, year: year});

        result.then(result => {
            setMedias(result);
        });
    }, [page, genre, year, sort, query]);


    return(
        <Container>
            <Filters type={type} show={false}/>
            <MediasList type={type} medias={medias}/>
            <Pagination lengthMedias={medias.total_pages}/>
        </Container>
    );
}