import styled from 'styled-components';

export const Container = styled.div `
    padding-top: 100px;
    padding-bottom: var(--vertical-default-spacing);
    padding-left: 135px;
    padding-right: var(--horizontal-default-spacing);

    position: relative;

    .background {
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.2;
        width: 100%;
        height: auto;
        z-index: 2;
    }

    @media screen and (max-width: 768px) {
        padding-left: var(--horizontal-default-spacing);
    }

    @media screen and (max-width: 1200px) {
        .background {
            object-fit: cover;
            object-position: center;
            height: 100%;
        }
    }
`

export const Details = styled.div `
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    position: relative;
    z-index: 90;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Banner = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
        width: 70%;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 15px;
    }
`

export const ContainerInfos = styled.div `
    
`

export const Header = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        position: relative;
    }

    div span {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        color: black;
        margin-left: 8px;
        margin-top: 14px;
        font-size: 20px;
        font-weight: 700;
    }

    h2 {
        margin-left: 10px;
    }
`

export const Infos = styled.span `
    display: inline-block;
    margin-top: 20px; 

    span {
        display: inline-block;
        margin: 10px 0;
    }

    hr {
        color: rgba(255, 255, 255, .1);
    }

    p {
        display: inline-block;
        margin-top: 15px;
        margin-bottom: 15px;
    }
`

export const ContainerCreators = styled.div `
    h3 {
        display: inline-block;
        font-size: 20px;
        margin-bottom: 15px;
    }
`

export const Creators = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Creator = styled.div `
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 5px;
    }

    div img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`