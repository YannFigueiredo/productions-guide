import styled from "styled-components";

export const Container = styled.div `
    color: ${({ theme }) => theme.colors.main_font};
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        display: inline-block;
        margin-right: 5px;
    }

    select {
        background: ${({ theme }) => theme.colors.box};
        color: ${({ theme }) => theme.colors.main_font};
        padding: 5px;
        max-width: 150px;
        border-radius: 8px;
    }

    select:focus {
        color: black;
    }
`