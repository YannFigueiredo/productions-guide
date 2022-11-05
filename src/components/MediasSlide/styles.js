import styled from 'styled-components';

export const Container = styled.section `
    margin-top: 25px;

    h2 {
        display: inline-block;
        margin-bottom: 10px;
    }
`
export const ContainerSlide = styled.div `
    position: relative;
    overflow: hidden;
`
export const ContainerAuxiliar = styled.div `
    display: grid;
    grid-template-columns: repeat(20, 200px);
    grid-template-rows: auto;
    grid-gap: 8px;
    overflow: hidden;
    scroll-behavior: smooth;

    article {
        cursor: pointer;
        transition: all linear .4s;
    }

    article img {
        width: 100%;
        height: 100%;
        transform: scale(.92);
        transition: all linear .2s;
    }

    article img:hover {
        transform: scale(1);
    }

    article:hover {
        border: 2px solid var(--color-emphasis);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(20, 140px);
        grid-gap: 15px;

        article img {
            transform: scale(1);
        }
    }
`

export const ButtonBack = styled.div `
    height: 100%;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 998;
    background: rgba(0, 0, 0, .7);
    font-size: 2.5em;
    font-weight: 700;
    opacity: 0;
    cursor: pointer;
    transition: all linear .32s;

    ${ContainerAuxiliar}:hover & {
        opacity: 1;
    }

    @media screen and (max-width: 480px) {
        width: 60px;
    }

    @media screen and (max-width: 992px) {
        opacity: 1;
    }
`

export const ButtonForward = styled.div `
    height: 100%;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 998;
    background: rgba(0, 0, 0, .7);
    font-size: 2.5em;
    font-weight: 700;
    opacity: 0;
    cursor: pointer;
    transition: all linear .3s;

    ${ContainerAuxiliar}:hover & {
        opacity: 1;
    }

    @media screen and (max-width: 480px) {
        width: 60px;
    }

    @media screen and (max-width: 992px) {
        opacity: 1;
    }
`

