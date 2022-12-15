/*import MockAdapter from 'axios-mock-adapter';
import { waitFor, act } from "@testing-library/react";
import tmdbApi from '../../services/themoviedb-api';
import medias from '../../mocks/medias';

const apiMock = new MockAdapter(tmdbApi);

describe('getMedias tests', () => {
    test('should return medias list', async () => {
        let result = null;

        act(() => {
            result = apiMock.onGet('/discover/movie?api_key=6d7eca4cdb083ab58f531783d27d25fc&language=pt-br&$page=1').reply(200, [{...medias}]).results;
        });

        await waitFor(() => {
            expect(result).not.toBeNull();
        });
    });
});*/