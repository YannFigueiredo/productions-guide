import { Container } from './styles';
import MediaList from '../../components/MediasList';
import { useContext, useEffect, useState } from "react";
import { MediasContext } from "../../contexts/MediasContext";
import { getMedias } from '../../utils/requests';

export default function Home() {
    const { medias, setMedias, url, setUrl, page } = useContext(MediasContext);
    const [ list, setList ] = useState({});

    useEffect(() => {
        //setUrl('/discover/movie');
        let result = getMedias('/discover/movie', 1);

        result.then(result => {
            setList(result);
        });
    }, []);

    return(
        <Container>
            <MediaList medias={list} />
        </Container>
    );
}