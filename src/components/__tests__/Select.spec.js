import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AppProviders } from "../../providers/AppProviders";
import Select from "../Select";
import genres from "../../mocks/genres";
import userEvent from "@testing-library/user-event";
import { MediasContext } from "../../contexts/MediasContext";


describe('Select tests', () => {
    test('should render correctly', () => {
        const options = genres;
        const defaultSelected = 'Escolha um gênero';
        const action = 'genres';
        const label = 'genres';
        const textLabel = 'Gênero: ';

        render(
            <Select 
                options = {options}
                defaultSelected = {defaultSelected}
                action = {action}
                label = {label}
                textLabel = {textLabel}
            />,
            {wrapper: AppProviders}  
        );

        expect(screen.getByTestId('select-label')).toBeInTheDocument();
        expect(screen.getByText('Faroeste')).toBeInTheDocument();
    });

    test('should call setGenre function when selected a option in genres select', () => {
        const options = genres;
        const defaultSelected = 'Escolha um gênero';
        const action = 'genres';
        const label = 'genres';
        const textLabel = 'Gênero: ';
        const setGenre = jest.fn();

        render(
            <MediasContext.Provider value={{setGenre}}>
                <Select 
                    options = {options}
                    defaultSelected = {defaultSelected}
                    action = {action}
                    label = {label}
                    textLabel = {textLabel}
                />
            </MediasContext.Provider>,
            {wrapper: AppProviders}  
        );

        userEvent.selectOptions(screen.getByRole('combobox'), ['37']);

        expect(screen.getByRole('option', {name: 'Faroeste'}).selected).toBe(true);
        expect(setGenre).toHaveBeenCalledTimes(1);
    });

    test('should call setYear function when selected a option in years select', () => {
        const options = Array.from(Array(300).keys()).map((year, index) => year = {value: 1800 + index, name: 1800 + index});
        const defaultSelected = 'Escolha um ano';
        const action = 'years';
        const label = 'years';
        const textLabel = 'Ano: ';
        const setYear = jest.fn();

        render(
            <MediasContext.Provider value={{setYear}}>
                <Select 
                    options = {options}
                    defaultSelected = {defaultSelected}
                    action = {action}
                    label = {label}
                    textLabel = {textLabel}
                />
            </MediasContext.Provider>,
            {wrapper: AppProviders}  
        );

        userEvent.selectOptions(screen.getByRole('combobox'), ['2000']);

        expect(screen.getByRole('option', {name: '2000'}).selected).toBe(true);
        expect(setYear).toHaveBeenCalledTimes(1);
    });

    test('should call setSort function when selected a option in sort select', () => {
        const options = [
            {value: "release_date.asc", name: "Lançamento (ASC)"},
            {value: "release_date.desc",  name: "Lançamento (DESC)"},
            {value: "popularity.asc", name: "Popularidade (ASC)"},
            {value: "popularity.desc", name: "Popularidade (DESC)"},
            {value: "original_title.asc", name: "Título (ASC)"},
            {value: "original_title.desc", name: "Título (DESC)"},
            {value: "vote_average.asc", name: "Avaliação (ASC)"},
            {value: "vote_average.desc", name: "Avaliação (DESC)"}
        ]
        const defaultSelected = 'Escolha uma opção';
        const action = 'sort';
        const label = 'sort';
        const textLabel = 'Ordenar por: ';
        const setSort = jest.fn();

        render(
            <MediasContext.Provider value={{setSort}}>
                <Select 
                    options = {options}
                    defaultSelected = {defaultSelected}
                    action = {action}
                    label = {label}
                    textLabel = {textLabel}
                />
            </MediasContext.Provider>,
            {wrapper: AppProviders}  
        );

        userEvent.selectOptions(screen.getByRole('combobox'), ['popularity.asc']);

        expect(screen.getByRole('option', {name: 'Popularidade (ASC)'}).selected).toBe(true);
        expect(setSort).toHaveBeenCalledTimes(1);
    });
});