import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { AppProviders } from "../../providers/AppProviders";
import { BrowserRouter } from "react-router-dom";
import MediasList from "../MediasList";
import medias from "../../mocks/medias";

describe('Medias List tests', () => {
    test('should render correctly', () => {
        const type = 'movies';

        render(
            <BrowserRouter>
                <MediasList medias={medias} type={type}/>
            </BrowserRouter>,
            {wrapper: AppProviders}
        );

        expect(screen.getByAltText('Halloween Ends')).toBeInTheDocument();
    });

    test('should redirect to media page when clicking in media card', () => {
        const type = 'movies';

        render(
            <BrowserRouter>
                <MediasList medias={medias} type={type}/>
            </BrowserRouter>,
            {wrapper: AppProviders}
        );

        const mediaCard = screen.getByAltText('Halloween Ends');

        user.click(mediaCard);

        expect(global.window.location.pathname).toEqual('/movies/616820');
    });
});