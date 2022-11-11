import { getGenres, getMedias } from "../../utils/requests";
import { useEffect, useState, useContext } from "react";
import { MediasContext } from "../../contexts/MediasContext";
import { useNavigate } from "react-router-dom";
import Select from '../Select';

export default function Filters({ type, show }) {
    const { setGenre, setYear, setSort } = useContext(MediasContext);
    const [ genres, setGenres ] = useState([]);
    const years = Array.from(Array(300).keys()).map((year, index) => 1800 + index);
    const navigate = useNavigate();
    
    useEffect(() => {
        let result = getGenres(`/genre/${type}/list`);

        result.then(result => {
            setGenres(result.genres);
        });
    }, []);
    
    return(
        <div>
            <div>
                {show && <Select>
                    <label htmlFor="genres">Gênero</label>
                    <select name="genres" id="genres" onChange={(e) => {setGenre(e.target.value)}}>
                        <option value='' disabled selected>Escolha um gênero</option>
                        {genres.map(genre => (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                </Select>}
                {show && <Select>
                    <label htmlFor="sort">Ordenar por: </label>
                    <select name="sort" id="sort" onChange={(e) => {setSort(e.target.value)}}>
                        <option value='' disabled selected>Escolha uma opção</option>
                        <option value="release_date.asc">Lançamento &uarr;</option>
                        <option value="release_date.desc">Lançamento &darr;</option>
                        <option value="popularity.asc">Popularidade &uarr;</option>
                        <option value="popularity.desc">Popularidade &darr;</option>
                        <option value="original_title.asc">Título &uarr;</option>
                        <option value="original_title.desc">Título &darr;</option>
                        <option value="vote_average.asc">Avaliação &uarr;</option>
                        <option value="vote_average.desc">Avaliação &darr;</option>
                    </select>
                </Select>}
                <Select>
                    <label htmlFor="years">Ano</label>
                    <select name="years" id="years" onChange={(e) => {setYear(e.target.value)}}>
                        <option value='' disabled selected>Escolha um ano</option>
                        {years.map((year, key) => (
                            <option key={key} value={year}>{year}</option>
                        ))}
                    </select>
                </Select>
            </div>
            <div>
                <input type="search" placeholder="Pesquise por nome" id="search"/>
                <button onClick={() => {navigate(`/search/${type}/${document.getElementById("search").value}`)}}>Pesquisar</button>
            </div>
        </div>
    );
}