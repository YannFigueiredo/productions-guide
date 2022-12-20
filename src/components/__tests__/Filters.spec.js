import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AppProviders } from "../../providers/AppProviders";
import { BrowserRouter } from "react-router-dom";
import Filters from "../Filters";


/*describe('Filters tests', () => {
    test('should render correctly', () => {
        const type = "tv";
        const show = true;
        
        render(
            <BrowserRouter>
                <Filters type={type} show={show}/>
            </BrowserRouter>
            ,
            {wrapper: AppProviders}
        );

        expect(screen.getByTestId("genres")).toBeVisible();
        expect(screen.getByLabelText("sort")).toBeInTheDocument();
        expect(screen.getByLabelText("years")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Pesquise por nome")).toBeInTheDocument();
        expect(screen.getByRole("search_button")).toBeInTheDocument();
    });
});*/