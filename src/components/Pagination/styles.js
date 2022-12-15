import styled from 'styled-components';

export const Container = styled.div `
    margin-top: 15px;
    
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul li {
        list-style-type: none;
        background: ${({ theme }) => theme.colors.box};
        color: ${({ theme }) => theme.colors.main_font};
        border-radius: 8px;
        padding: 8px 12px;
        cursor: pointer;
        transition: all linear .5s;
    }

    ul li + li {
        margin-left: 8px;
    }

    ul li:hover {
        background: ${({ theme }) => theme.colors.emphasis};
        color: ${({ theme }) => theme.colors.dark};
    }

    .active-page {
        background: ${({ theme }) => theme.colors.emphasis};
        color: ${({ theme }) => theme.colors.dark};
    }
`