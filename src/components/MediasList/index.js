import { FaStar } from 'react-icons/fa';
import { formatDateByYear } from '../../utils/formatters';
import { Container, Info, Poster } from './styles';

export default function MediaList({ medias }) {
    return(
        <Container>
            {medias.results === 0 && <h1>Carregando...</h1>}
            {medias.results && medias.results.map(media => (
                <article key={media.id}>
                    <Poster>
                        <img src={`http://image.tmdb.org/t/p/w400${media.poster_path}`} alt={media.title}/>
                    </Poster>
                    <Info>
                        <div>
                            <FaStar color="yellow" />
                            <span>{media.vote_average}</span>
                        </div>
                        <span>{formatDateByYear(media.release_date)}</span>
                    </Info>
                </article>
            ))}
        </Container>
    );
}