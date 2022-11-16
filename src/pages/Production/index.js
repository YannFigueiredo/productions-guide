import { useEffect, useState } from "react";
import { getMedia } from "../../utils/requests";
import { useParams } from "react-router-dom";

export default function Production() {
    const { type, id } = useParams();
    const [ media, setMedia ] = useState({});

    useEffect(() => {
        let result = getMedia(`/${type}/${id}`);

        result.then(result => {
            setMedia(result);
        });
    }, []);
    
    return(
        <div>
            <h1>{media.name || media.title}</h1>
        </div>
    );
}
