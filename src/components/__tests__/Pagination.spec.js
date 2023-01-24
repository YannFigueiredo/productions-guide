import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { AppProviders } from "../../providers/AppProviders";
import Pagination from "../Pagination";
import { MediasContext } from "../../contexts/MediasContext";
import MediasProvider from "../../contexts/MediasContext";

describe('Pagination tests', () => {
    test('should render correctly', () => {
        const lengthMedias = 2;

        render(
            <Pagination lengthMedias={lengthMedias}/>,
            {wrapper: AppProviders}
        );

        const firstPage = screen.getByTestId('button-1');

        expect(firstPage).toBeInTheDocument();
        expect(firstPage).toHaveClass('active-page');
    });

    test('should active page class when clicking in page option', () => {
        const lengthMedias = 2;

        render(
            <Pagination lengthMedias={lengthMedias}/>,
            {wrapper: AppProviders}
        );

        const optionPage = screen.getByTestId('button-2');

        userEvent.click(optionPage);

        expect(optionPage).toHaveClass('active-page');
    });

    test('should have quantity of options page equal to length property', () => {
        const lengthMedias = 3;

        render(
            <Pagination lengthMedias={lengthMedias}/>,
            {wrapper: AppProviders}
        );

        const optionsPage = screen.getAllByRole('option');

        expect(optionsPage).toHaveLength(3);
    });

    test('should have quantity of options page equal to max items when length property is larger', () => {
        const MAX_ITEMS = 15;
        const lengthMedias = 20;

        render(
            <Pagination lengthMedias={lengthMedias}/>,
            {wrapper: AppProviders}
        );

        const optionsPage = screen.getAllByRole('option');

        expect(optionsPage).toHaveLength(MAX_ITEMS);
    });
    
    /*test('should update page context when clicking in page option', () => {
        const lengthMedias = 2;
        const contextValues = {
            page: 1,
            updatePage: jest.fn().mockImplementation((newPage) => {
                contextValues.page = newPage;
            })
        };

        const wrapper = ({children}) => (
            <MediasContext.Provider value={contextValues}>
                <AppProviders>
                    {children}
                </AppProviders>
            </MediasContext.Provider>
        );

        render(
            <Pagination lengthMedias={lengthMedias} />,
            { wrapper }
        );
        
        const optionPage = screen.getByTestId('button-2');

        userEvent.click(optionPage);

        expect(contextValues.updatePage).toHaveBeenCalledTimes(1);
    });*/
});