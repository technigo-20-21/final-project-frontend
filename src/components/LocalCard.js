import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { locals } from "../reducers/locals";

export const LocalCard = ({ loc }) => {

    return (
        <>
        <h1>{loc.name}</h1>
        <p>{loc.street_address}, {loc.zip_code}</p>
        <p>{loc.phone_number} {loc.email}</p>
        <p>{loc.menu} {loc.web_shop} {loc.booking}</p>
        <p>{loc.url}</p>
        </>
    )
}