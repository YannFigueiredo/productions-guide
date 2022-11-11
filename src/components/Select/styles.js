import styled from "styled-components";

export const Container = styled.div `
    color: var(--color-main-font);
    display: flex;
    justify-content: center;
    align-items: center;

    label {
        display: inline-block;
        margin-right: 5px;
    }

    select {
        background: var(--color-box);
        color: var(--color-main-font);
        padding: 5px;
        max-width: 150px;
        border-radius: 8px;
    }

    select:focus {
        color: black;
    }
`