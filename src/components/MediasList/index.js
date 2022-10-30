import { FaStar } from 'react-icons/fa';
import { formatDateByYear } from '../../utils/formatters';
import { Container, Info, Poster } from './styles';
import Loading from '../Loading';

export default function MediasList({ medias }) {
    return(
        <Container>
            {medias.results === false && <Loading />}
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
                        <span>{formatDateByYear(media.release_date || media.first_air_date)}</span>
                    </Info>
                </article>
            ))}
        </Container>
    );
}