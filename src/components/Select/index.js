import { useContext } from "react";
import { MediasContext } from "../../contexts/MediasContext";
import { Container } from "./styles";

export default function Select({ options, defaultSelected, action, label, textLabel }) {
    const { setGenre, setYear, setSort } = useContext(MediasContext);
    
    return(
        <Container>
            <label htmlFor={label}>{textLabel}</label>
            <select defaultValue={defaultSelected} name={label} id={label} onChange={(e) => {
                switch(action){
                    case "genres":
                        setGenre(e.target.value);
                        break;
                    case "years":
                        setYear(e.target.value);
                        break;
                    case "sort":
                        setSort(e.target.value);
                        break;
                    default:
                        break;
                }
            }}>
                <option value={defaultSelected} disabled>{defaultSelected}</option>
                {options && options.map((option, key) => (
                    <option key={key} value={option.value || option.id}>{option.name}</option>
                ))}
            </select>
        </Container>
    );
}