import { Container } from './styles';
import MediasSlide from '../../components/MediasSlide';
import MediasMainSlide from '../../components/MediasMainSlide';
import { useEffect, useState, useContext } from "react";
import { getMedias } from '../../utils/requests';
import { MediasContext } from '../../contexts/MediasContext';

export default function Home() {
    const [ tops, setTops ] = useState({});
    const [ popularMovies, setPopularMovies ] = useState({});
    const [ popularSeries, setPopularSeries ] = useState({});
    const { setPath } = useContext(MediasContext);
    let type = null;
    
    const loadList = () => {
        let randomType = Math.floor(Math.random() * 2);

        let result = getMedias(randomType === 0 ? '/movie/popular' : '/tv/popular', {});
        type = randomType === 0 ? 'movie' : 'tv'
      
        result.then(result => {
            setTops(result);
        });

        result = getMedias('/movie/top_rated', {});
      
        result.then(result => {
            setPopularMovies(result);
        });

        result = getMedias('/tv/top_rated', {});
      
        result.then(result => {
            setPopularSeries(result);
        });
    };

    useEffect(() => {
        setPath(0);
        loadList();
    }, []);

    return(
        <Container>
            <MediasMainSlide medias={tops.results} type={type}/>
            <MediasSlide medias={popularMovies.results} title='Filmes bem avaliados' type="movie"/>
            <MediasSlide medias={popularSeries.results} title='Séries bem avaliadas' type="tv"/>
        </Container>
    );
}