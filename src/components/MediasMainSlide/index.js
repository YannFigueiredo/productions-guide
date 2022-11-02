import { Container, ContainerImg, ContainerSlide, Dots } from "./styles";
import { useState, useEffect, useRef } from 'react';

export default function MediasMainSlide({ medias }) {
    const slide = useRef(null);
    const [ position, setPosition ] = useState(0);

    const increment = () => {
        setPosition((prevPosition) => prevPosition < 9 ? prevPosition + 1 : 0);
    };

    const nextSlide = () => {
        slide.current.style.marginLeft = `${(position)*(-100)}%`;
    };

    useEffect(() => {
        const interval = setInterval(increment, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        nextSlide();
    }, [position]);
    
    return(
        <Container>
            <ContainerSlide ref={slide}>
                {medias && medias.slice(0, 10).map(media => (
                    <ContainerImg key={media.id}>
                        <h2>{media.title || media.name}</h2>
                        <img src={`http://image.tmdb.org/t/p/original${media.backdrop_path}`} alt={media.title}></img>
                    </ContainerImg>
                ))}
            </ContainerSlide>
            <Dots active={position}>
                {medias && medias.slice(0, 10).map(media => (
                    <div key={media.id} onClick={() => {
                        setPosition(medias.findIndex(i => i.id === media.id));
                    }}></div>
                ))}
            </Dots>
        </Container>
    );
}