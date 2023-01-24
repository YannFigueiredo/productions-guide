import { useContext } from "react";
import { MediasContext } from "../../contexts/MediasContext";
import { Container } from "./styles";

const MAX_ITEMS = 15;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export default function Pagination({ lengthMedias }) {
    const { page, setPage, updatePage } = useContext(MediasContext);
    const paginationItems = Array.from({ length: parseInt(lengthMedias) >= MAX_ITEMS ? MAX_ITEMS : parseInt(lengthMedias)});
    const first = Math.max(page - MAX_LEFT, 1);
    
    return(
        <Container>
            <ul>
                {paginationItems.map((_, index) => first + index)
                    .map((item, key) => (
                        <li role='option' data-testid={'button-' + item} key={key} onClick={() => {updatePage(item);}} className={page === item ? 'active-page' : ''}>{item}</li>
                    ))
                }
            </ul>
        </Container>

    );
}