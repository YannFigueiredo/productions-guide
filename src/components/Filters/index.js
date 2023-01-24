import { getGenres } from "../../utils/requests";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from '../Select';
import { Container, ContainerSelect, ContainerSearch } from "./styles";

export default function Filters({ type, show }) {
    const [ genres, setGenres ] = useState([]);
    const years = Array.from(Array(300).keys()).map((year, index) => year = {value: 1800 + index, name: 1800 + index});
    const navigate = useNavigate();
    const sortOptions = [
        {value: "release_date.asc", name: "Lançamento"},
        {value: "release_date.desc",  name: "Lançamento &darr"},
        {value: "popularity.asc", name: "Popularidade &uarr;"},
        {value: "popularity.desc", name: "Popularidade &darr;"},
        {value: "original_title.asc", name: "Título &uarr;"},
        {value: "original_title.desc", name: "Título &darr;"},
        {value: "vote_average.asc", name: "Avaliação &uarr;"},
        {value: "vote_average.desc", name: "Avaliação &darr;"}
    ]
    
    useEffect(() => {
        let result = getGenres(`/genre/${type}/list`);

        result.then(result => {
            setGenres(result.genres);
        });
    }, []);
    
    return(
        <Container>
            <ContainerSelect>
                {show && genres && <Select data-testid="genres" options={genres} defaultSelected="Escolha um gênero" action="genres" label="genres" textLabel="Gênero: "/>}
                {show && <Select options={sortOptions} defaultSelected="Escolha uma opção" action="sort" label="sort" role="sort" textLabel="Ordenar por: "/>}
                {show && <Select role="years" options={years} defaultSelected="Escolha uma ano" action="years" label="years" textLabel="Ano: "/>}
            </ContainerSelect>
            <ContainerSearch>
                <input type="search" placeholder="Pesquise por nome" id="search"/>
                <button onClick={() => {navigate(`/search/${type}/${document.getElementById("search").value}`)}}>Pesquisar</button>
            </ContainerSearch>
        </Container>
    );
}