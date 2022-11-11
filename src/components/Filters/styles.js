import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const ContainerSelect = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 5px;

    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;

        div {
            margin-bottom: 15px;
        }
    }

    @media screen and (max-width: 1200px) {
        margin-bottom: 15px;
    }
`

export const ContainerSearch = styled.div `
    button {
        margin-left: 5px;
    }

    @media screen and (max-width: 1200px) {
        input {
            width: 150px;
        }
    }
`