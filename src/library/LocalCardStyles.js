import styled from "styled-components/macro";


export const CardWrapper = styled.div`
    max-height: 500px;
    width: 25%;
    position: absolute;
    top: 36%;
    left: 40px;
    padding: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2999;
    background-color: #FDF6E9;
    border-radius: 20px;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

    @media screen and (max-width: 699px) {
      width: 90%;
      position: static;
      box-shadow: none;      
    }

    @media screen and (min-width: 700px) and (max-width: 1189px) {
        width: 30%
    }
`

export const CardHeader = styled.h2`
    width: 100%;
    margin-top: 12px;
    font-size: 28px;
`

export const AddressStyle = styled.div`
    width: 100%;
    font-size: 21px;

`
export const AddressText = styled.p`
`