import { Container } from './styles';
import MediaList from '../../components/MediasList';
import { useContext, useEffect, useState } from "react";
import { MediasContext } from "../../contexts/MediasContext";
import { getMedias } from '../../utils/requests';

export default function Home() {
    const { medias, setMedias, url, setUrl, page } = useContext(MediasContext);
    const [ list, setList ] = useState({});
    
    const loadList = () => {
        let result = getMedias('/discover/movie', page);

        result.then(result => {
            setList(result);
        });
    };

    useEffect(() => {
        loadList();
    }, []);

    useEffect(() => {
        loadList();
    }, [page]);

    return(
        <Container>
            <MediaList medias={list} />
        </Container>
    );
}