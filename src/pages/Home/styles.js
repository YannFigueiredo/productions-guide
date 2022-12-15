import styled from 'styled-components';

export const Container = styled.div `
    padding-top: 100px;
    padding-bottom: ${({ theme }) => theme.spacing.vertical_default}px;
    padding-left: 135px;
    padding-right: ${({ theme }) => theme.spacing.horizontal_default}px;

    @media screen and (max-width: 768px) {
        padding-left: ${({ theme }) => theme.spacing.horizontal_default}px;
    }
`