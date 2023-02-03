import MockAdapter from 'axios-mock-adapter';
import { waitFor, act } from "@testing-library/react";
import tmdbApi from '../../services/themoviedb-api';
import medias from '../../mocks/medias';
import { getMedias } from "../requests";

//const apiMock = new MockAdapter(tmdbApi);

/*describe('getMedias tests', () => {
    test('should return medias list', async () => {
        let result = null;

        act(() => {
            apiMock.onGet('/discover/movie?api_key=6d7eca4cdb083ab58f531783d27d25fc&language=pt-br&$page=1').reply(200, [{...medias}]);
        });

        await waitFor(() => {
            expect(result).not.toBeNull();
        });
    });
});*/

describe('getMedias tests', () => {
    test('should return medias list', async () => {
        let url = '/discover/movie?api_key=6d7eca4cdb083ab58f531783d27d25fc&language=pt-br&$page=1';
        let params = {page: 1, sort_by: 'vote_average.asc', with_genres: '28', year: 2011};

        let result = getMedias(url, params);

        await result.then(result => {
            expect(result).not.toBeNull();
            expect(result.total_pages).toEqual(64);
        });
    });
});