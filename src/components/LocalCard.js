import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { locals } from "../reducers/locals";
import { CardWrapper, CardHeader, AddressStyle, AddressText } from "../library/LocalCardStyles"
import  { CallButton } from "../library/CallButton"
import { EmailButton } from "../library/EmailButton"
import { HomePageButton } from "../library/HomePageButton"
export const LocalCard = ({ name, street_address, zip_code, phone_number, email, menu, web_shop, booking, url }) => {

    return (
        <CardWrapper>
            <CardHeader>Välkommen till {name}</CardHeader>
            <AddressStyle>
                <AddressText>Öppettider</AddressText>
                <AddressText>Mån - fre:    11 - 17</AddressText>
                <AddressText>Lör - sön:    10 - 14</AddressText>
            </AddressStyle>
            <CallButton phone_number={phone_number} />
            <EmailButton email={email} />
            <p>{menu} {web_shop} {booking}</p>
            <HomePageButton url={url} />
        </CardWrapper>
    )
}