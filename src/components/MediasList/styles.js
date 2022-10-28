import styled from 'styled-components';

export const Container = styled.section `
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    grid-gap: 20px;

    article {
        position: relative;
        cursor: pointer;
        border-radius: 10px;
        overflow: hidden;
    }

    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`
export const Poster = styled.div `
    overflow: hidden;
    height: 100%;

    img{
        width: 100%;
        height: 100%;
    }
`
export const Info = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .8);
    width: 100%;
    height: 0%;
    transition: all linear .4s;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;

        span {
            margin-left: 5px;
        }
    }

    span {
        font-size: 20px;
    }

    ${Poster}:hover ~ &, &:hover {
        height: 100%;
    }
`