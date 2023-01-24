import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AppProviders } from "../../providers/AppProviders";
import { BrowserRouter } from "react-router-dom";
import Filters from "../Filters";


describe('Filters tests', () => {
    test.only('should render correctly', () => {
        const type = "tv";
        const show = true;
        
        render(
            <BrowserRouter>
                <Filters type={type} show={show}/>
            </BrowserRouter>
            ,
            {wrapper: AppProviders}
        );
        
        expect(screen.getByText(/Gênero/)).toBeInTheDocument();
        expect(screen.getByText(/Ordenar por/)).toBeInTheDocument();
        expect(screen.getByText(/Ano/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Pesquise por nome")).toBeInTheDocument();
        expect(screen.getByText("Pesquisar")).toBeInTheDocument();
    });
});