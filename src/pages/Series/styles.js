import styled from 'styled-components';

export const Container = styled.div `
    padding-top: 100px;
    padding-bottom: var(--vertical-default-spacing);
    padding-left: 135px;
    padding-right: var(--horizontal-default-spacing);

    @media screen and (max-width: 768px) {
        padding-left: var(--horizontal-default-spacing);
    }
`