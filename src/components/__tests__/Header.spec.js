import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { AppProviders } from "../../providers/AppProviders";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

describe('Header tests', () => {
    test('should render correctly', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            {wrapper: AppProviders}
        )

        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId("menu")).toBeInTheDocument(); expect(screen.getByTestId("btn-open-menu")).toBeInTheDocument();
        expect(screen.getByTestId("btn-close-menu")).not.toHaveClass('menu-open');
    });

    test('should show menu when clicking in open menu button', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            {wrapper: AppProviders}
        )

        const openMenuButton = screen.getByTestId("btn-open-menu");
        const closeMenuButton = screen.getByTestId("btn-close-menu");

        user.click(openMenuButton);

        expect(closeMenuButton).toHaveClass('menu-open');
        expect(screen.getByTestId('menu')).toHaveClass('menu-open');
    });

    test('should hide menu when clicking in close menu button', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            {wrapper: AppProviders}
        )

        const closeMenuButton = screen.getByTestId("btn-close-menu");

        user.click(closeMenuButton);

        expect(closeMenuButton).not.toHaveClass('menu-open');
        expect(screen.getByTestId('menu')).not.toHaveClass('menu-open');
    });

    test('should redirect to home when clicking in title', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            {wrapper: AppProviders}
        )

        const titleLinkOption = screen.getByTestId("title");
    
        user.click(titleLinkOption);

        expect(global.window.location.pathname).toEqual("/");
    });    

    test('should redirect to url when clicking in menu option', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            {wrapper: AppProviders}
        )

        const homeOption = screen.getByText("Início");
        const moviesOption = screen.getByText("Filmes");
        const seriesOption = screen.getByText("Séries");

        user.click(homeOption);
        
        expect(global.window.location.pathname).toEqual("/");

        user.click(moviesOption);
        
        expect(global.window.location.pathname).toEqual("/movies");

        user.click(seriesOption);
        
        expect(global.window.location.pathname).toEqual("/series");
    });
});