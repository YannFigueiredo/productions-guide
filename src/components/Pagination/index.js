import { useContext } from "react";
import { MediasContext } from "../../contexts/MediasContext";
import { Container } from "./styles";

const MAX_ITEMS = 15;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export default function Pagination() {
    const { page, setPage } = useContext(MediasContext);
    const paginationItems = Array.from({ length: MAX_ITEMS });
    const first = Math.max(page - MAX_LEFT, 1);
    
    return(
        <Container>
            <ul>
                {paginationItems.map((_, index) => first + index)
                    .map((item, key) => (
                        <li key={key} onClick={() => {setPage(item);}} className={page === item ? 'active-page' : ''}>{item}</li>
                    ))
                }
            </ul>
        </Container>

    );
}