import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

import { css } from "@emotion/react"

export function ContactList() {
    const contacts = useLoaderData();
    console.log(contacts);
    return <ul>
        {contacts?.length ? contacts.map(contact => {
            let { id: { value }, name: { first, last } } = contact;
            return (<li key={value}>
                <NavLink to={`/contacts/${value}`} css={css({
                    display:"block",
                    padding:"4px 8px",
                    textDecoration:"none",
                    color:"royalblue",
                    "&.active":{
                        background:"royalblue",
                        color:"white",
                        borderRadius:"8px",
                    },
                })}>
                    {`${first} ${last}`}
                </NavLink>

            </li>)
        })
            : null}
    </ul>
}