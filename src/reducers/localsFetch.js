import { useEffect } from "react";
import { locals } from "./locals";
import { LOCALS_URL, CATEGORIES_URL } from "../urls";

export const categoriesFetch = locals => {
    return (dispatch) => {
        const handleFetchSuccess = () => {
            
        }
        fetch(LOCALS_URL)
            .then(res => {
                if (!res.ok) {
                    throw "No locals to display";
                }
                return res.json();
            })
            .then(localsList => {
                console.log(localsList.res);
            })
    }
}