import { useEffect } from "react";

export default function MediaList({ medias }) {
    useEffect(() => {console.log(medias)}, []);

    return(
        <div>
            {medias.results === 0 && <h1>Carregando...</h1>}
            {medias.results && medias.results.map(media => (
                <h1 key={media.id}>{media.title}</h1>
            ))}
        </div>
    );
}