import styled from 'styled-components';

export const Container = styled.section `
    position: relative;
    overflow: hidden;
    height: 400px;

    @media screen and (max-width: 768px) {
        height: 250px;
    }

    @media screen and (max-width: 480px) {
        height: 200px;
    }
`

export const ContainerSlide = styled.div `
    display: flex;
    height: 400px;
    width: 100%;
    transition: all linear .5s;
`

export const ContainerImg = styled.div `
    width: 100%;
    min-width: 100%;
    height: 400px;
    position: relative;

    h2 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        display: inline-block;
        margin-top: 10px;
        margin-left: 10px;
        font-size: 30px;
    }

    img {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        h2 {
            font-size: 20px;
        }
    }
`

export const Dots = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 15px;

    div {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border-radius: 50%;
        background: var(--color-box); 
        cursor: pointer;
    }

    div:nth-child(${(props) => props.active + 1}) {
        background: var(--color-emphasis);
    }

    div:hover {
        background: var(--color-emphasis);
    }

    @media screen and (max-width: 768px) {
        div {
            width: 18px;
            height: 18px;
        }
    }

    @media screen and (max-width: 480px) {
        div {
            width: 15px;
            height: 15px;
        }
    }
`