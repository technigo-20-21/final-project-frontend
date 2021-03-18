import React from "react";
import { CardWrapper, CardHeader, AddressStyle, AddressText } from "../../library/single_local_ui/LocalCardStyles"
import  { CallButton } from "../../library/single_local_ui/CallButton"
import { EmailButton } from "../../library/single_local_ui/EmailButton"
import { HomePageButton } from "../../library/single_local_ui/HomePageButton"

export const LocalCard = (local) => {
    return (
        <CardWrapper>
            <CardHeader>Välkommen till {local.name}</CardHeader>
            <AddressStyle>
                <AddressText>Öppettider</AddressText>
                <AddressText>Mån - fre:    11 - 17</AddressText>
                <AddressText>Lör - sön:    10 - 14</AddressText>
            </AddressStyle>
            {local.phone_number
              ? ( <CallButton phone_number={local.phone_number} /> )
              : null}
            {local.email 
              ? ( <EmailButton email={local.email} /> )
              : null}
           
            {/* FOR LATER IMPLEMENTATION */}
            {/* <p>{menu} {web_shop} {booking}</p> */}
            <HomePageButton url={local.url} />
        </CardWrapper>
    )
}