import styled from 'styled-components';

export const Container = styled.header `
    padding: ${({ theme }) => theme.spacing.vertical_default}px ${({ theme }) => theme.spacing.horizontal_default}px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(48, 50, 62);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    a {
        text-decoration: none;
    }

    h2 {
        font-size: 36px;
    }

    .btn-close-menu {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 999;
        margin: ${({ theme }) => theme.spacing.vertical_default}px;
        cursor: pointer;
    }

    .btn-open-menu {
        display: none;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        justify-content: space-between;

        h2 {
            font-size: 25px;
        }

        .btn-open-menu {
            display: block;
        }

        .menu-open {
            display: inline-block;
        }
    }
`

export const Menu = styled.nav `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    margin-top: 80px;
    width: 110px;
    height: 100%;
    background: ${({ theme }) => theme.colors.box};

    ul li {
        list-style-type: none;
    }

    ul li a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        transition: all linear .5s;
        color: ${({ theme }) => theme.colors.main_font};
    }

    ul li a:hover, ul li:nth-child(${props => props.activePage + 1}) a {
        background: ${({ theme }) => theme.colors.emphasis};
        color: ${({ theme }) => theme.colors.dark};
    }

    ul li a:hover span, ul li:nth-child(${props => props.activePage + 1}) a span  {
        color: ${({ theme }) => theme.colors.dark};
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        right: 0;
        margin-top: 0;
        padding-top: 60px;
        display: none;

        ul li a {
            flex-direction: row;
        }

        ul li a span {
            display: inline-block;
            margin-left: 10px;
            font-size: 25px;
        }

        .menu-open {
            display: flex;
        }
    }
`