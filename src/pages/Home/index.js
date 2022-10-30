import { Container } from './styles';
import MediasSlide from '../../components/MediasSlide';
import { useContext, useEffect, useState } from "react";
import { MediasContext } from "../../contexts/MediasContext";
import { getMedias } from '../../utils/requests';

export default function Home() {
    const { page, setPage, genre, setGenre,  year, setYear, sort, setSort, moviesList, setMoviesList, seriesList, setSeriesList } = useContext(MediasContext);
    
    const loadLists = () => {
        let result = getMedias('/discover/movie', { page: page, with_genres: genre, sort_by: sort, year: year });

        result.then(result => {
            setMoviesList(result);
        });
 
        result = getMedias('/discover/tv', { page: page, with_genres: genre, sort_by: sort, year: year });

        result.then(result => {
            setSeriesList(result);
        });
    };

    const resetParams = () => {
        setPage(1);
        setGenre(null);
        setYear(null);
        setSort(null)
    };

    useEffect(() => {
        resetParams();
        loadLists();
    }, []);

    useEffect(() => {
        loadLists();
    }, [page, genre, year, sort]);

    return(
        <Container>
            <MediasSlide medias={seriesList.results} title='Séries'/>
        </Container>
    );
}