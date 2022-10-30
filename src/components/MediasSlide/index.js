import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ButtonBack, ButtonForward, Container, ContainerSlide, ContainerAuxiliar } from './styles';
import { useRef } from 'react';

export default function MediasSlide({ medias, title }) {
    const containerAux = useRef(null);

    const backSlide = (e) => {
        e.preventDefault();
        
        containerAux.current.scrollLeft -= containerAux.current.offsetWidth/2;
    };

    const forwardSlide = (e) => {
        e.preventDefault();
        
        containerAux.current.scrollLeft += containerAux.current.offsetWidth/2;
    };

    return(
        <Container>
            <h2>{title}</h2>
            <ContainerSlide>
                <ContainerAuxiliar ref={containerAux}>
                    <ButtonBack onClick={backSlide}><IoIosArrowBack color='white'/></ButtonBack>
                    <ButtonForward onClick={forwardSlide}><IoIosArrowForward color='white'/></ButtonForward>
                    {medias && medias.map(media => (
                        <article key={media.id}>
                            <img src={`http://image.tmdb.org/t/p/w400${media.poster_path}`} alt={media.title}/>
                        </article>
                    ))}
                </ContainerAuxiliar>
            </ContainerSlide>
        </Container>
    );
}