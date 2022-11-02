import tmdbApi from '../services/themoviedb-api.js';

export async function getMedias(url, params) {
    let list = {};

    //console.log(url);
    //console.log(params);

    await tmdbApi.get(url, {
        params: {
            api_key: '6d7eca4cdb083ab58f531783d27d25fc',
            language: 'pt-br',
            page: params.page,
            with_genres: params.with_genres,
            sort_by: params.sort_by,
            year: params.year
        }
    }).then(response => {
        list = response.data;
    }).catch((error) => {console.log("Erro: " + error)});

    return list;
}

export async function getGenres(url) {
    let list = {};
    
    await tmdbApi.get(url, {
        params: {
            api_key: '6d7eca4cdb083ab58f531783d27d25fc',
            language: 'pt-br'
        }
    }).then(response => {
        list = response.data;
    }).catch((error) => {console.log("Erro: " + error)});

    return list;
}