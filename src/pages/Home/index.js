import { Container } from './styles';
import MediaList from '../../components/MediasList';
import { useContext, useEffect, useState } from "react";
import { MediasContext } from "../../contexts/MediasContext";
import { getMedias } from '../../utils/requests';

export default function Home() {
    const { page, genre, year, sort, moviesList, setMoviesList, seriesList, setSeriesList } = useContext(MediasContext);
    const [ list, setList ] = useState({});
    
    const loadSeparateLists = () => {
        let result = getMedias('/discover/movie', { page: page, with_genres: genre, sort_by: sort, year: year });

        result.then(result => {
            setMoviesList(result);
        });

        result = getMedias('/discover/tv', { page: page, with_genres: genre, sort_by: sort, year: year });

        result.then(result => {
            setSeriesList(result);
        });
    };

    const loadList = () => {
        setList(
            {
                page: page,
                results: [...moviesList.results, ...seriesList.results],
                total_pages: Math.round((moviesList.total_results + seriesList.total_results)/40),
                total_results: moviesList.total_results + seriesList.total_results
            }
        );
    };

    useEffect(() => {
        loadSeparateLists();
        if(seriesList.results && moviesList.results){
            loadList();
        }
        
        console.log(list);
    }, []);

    useEffect(() => {
        loadSeparateLists();
        if(seriesList.results && moviesList.results){
            loadList();
        }
    }, [page]);

    return(
        <Container>
            <MediaList medias={list} />
        </Container>
    );
}