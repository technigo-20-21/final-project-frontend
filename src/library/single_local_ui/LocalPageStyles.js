import styled from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px;
    position: relative;
    @media (max-width: 699px) {
        padding: 12px;
        justify-content: center;
    }
`
export const SectionHeader = styled.h1`
    width: 100%;
    // padding-bottom: 20px;
    font-size: 36px;
    text-align: center;
`

export const SectionTagline = styled.h3`
    margin-top: 0;
    padding-bottom: 20px;
    width: 100%;
    font-size: 28px;
    text-align: center;
`

