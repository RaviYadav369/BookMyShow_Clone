import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

import { css } from "@emotion/react"

export  function ContactList({ searchText }) {
    console.log(searchText);
    const contacts = useLoaderData() ?? [];
    const filteredContacts = contacts.filter((contact) => {
        const { first, last } = contact.name;
        return (first.toLowerCase().includes(searchText.toLowerCase()) || last.toLowerCase().includes(searchText.toLowerCase()))
    })
    return ( <ul css={css`
             list-style:none;
             padding:0;
    `}>
        {filteredContacts?.length ? filteredContacts.map(contact => {
            let { id: { value }, name: { first, last,title },picture:{thumbnail} } = contact;
            return (<li key={value} className="aside-element">
                <NavLink to={`/contacts/${value}`} css={css({
                    display: "block",
                    padding: "4px 8px",
                    textDecoration: "none",
                    color: "royalblue",
                    "&.active": {
                        background: "royalblue",
                        color: "white",
                        borderRadius: "8px",
                    },
                })}>
                    <img src={thumbnail} alt={first} />
                   <span className="name-section"> {`${title} ${first} ${last}`}</span>
                </NavLink>

            </li>)
        })
            : null}
    </ul>)
}