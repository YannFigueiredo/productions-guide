import { useEffect, useState } from "react";
import { getMedia } from "../../utils/requests";
import { useParams } from "react-router-dom";
import { formatDateByYear } from "../../utils/formatters";
import excellent from '../../assets/exc_average.png';
import regular from '../../assets/reg_average.png';
import bad from '../../assets/bad_average.png';
import profile_creator from '../../assets/perfil_creator.jpg';
import { Container, ContainerInfos, Details, Banner, Infos, Header, ContainerCreators, Creators, Creator } from "./styles";

export default function Production() {
    const { type, id } = useParams();
    const [ media, setMedia ] = useState({});
    const [ average, setAverage ] = useState();

    useEffect(() => {
        let result = getMedia(`/${type}/${id}`);

        result.then(result => {
            console.log(result);
            setMedia(result);
        });
    }, []);

    useEffect(() => {
        if(media.vote_average >= 8){
            setAverage(excellent);
        }else if(media.vote_average >= 5 && media.vote_average < 8){
            setAverage(regular);
        }else{
            setAverage(bad);
        }
    }, [media]);
    
    return(
        <Container>
            <img className="background" src={`http://image.tmdb.org/t/p/original${media.backdrop_path}`} alt="Background"/>
            <Details>
                <Banner>
                    <img src={`http://image.tmdb.org/t/p/w400${media.poster_path}`} alt={media.title || media.name}/>
                </Banner>
                <ContainerInfos>
                    <Header>
                        <div>
                            <img src={average} alt="Avaliação"/>
                            <span>{media.vote_average && media.vote_average.toFixed(2)}</span>
                        </div>
                        <h2>{media.name || media.title}</h2>
                    </Header>
                    {media.genres &&
                    <Infos>
                        <hr/>
                        <span>
                            Lançamento: {formatDateByYear(media.release_date || media.first_air_date)} | Gênero: {media.genres.map((genre, index) => genre.name + (index < media.genres.length - 1 ? ', ' : ''))} | País: {media.origin_country}{type === 'tv' ? ` | Temporadas: ${media.number_of_seasons} | Episódios: ${media.number_of_episodes} | Status: ${media.status}` : ''}
                        </span>
                        <hr/>
                        <p>
                            {media.overview}
                        </p>
                    </Infos>}
                    <ContainerCreators>
                        {media.created_by && <h3>Criadores:</h3>}
                        <Creators>
                            {media.created_by && media.created_by.map((creator, key) => (
                                <Creator key={key}>
                                    <div>
                                        <img src={creator.profile_path === null ? profile_creator : `http://image.tmdb.org/t/p/w400${creator.profile_path}`} alt={creator.name}/>
                                    </div>
                                    <span>{creator.name}</span>
                                </Creator>
                            ))}
                        </Creators>
                    </ContainerCreators>
                </ContainerInfos>
            </Details>
        </Container>
    );
}
