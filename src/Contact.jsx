import React from 'react'
import { css } from '@emotion/react';
import { useLoaderData } from 'react-router-dom'

export function Contact() {
    const contact = useLoaderData()
    const {cell:cell,email:email,name:{title,first,last},picture:{large}} =contact;
    console.log(contact);

    return (
        <div css={css`
            padding:20px;
            display:flex;
            justify-content:space-around;
            align-content:center;
            border:2px solid gray;
            border-radius:10px;
          `}>
            <div css={css`
                    height:80%;
                    width:40%;
            `}>
                <img css={css` width:90%;margin:auto; border-radius:5px; object-fit:cover;`} src={large} alt={first} />
            </div>
            <div css={css`
                    height:80%;
                    width:40%;
                    margin-top:100px;
                    
            `}>
                <p>Name - {title} {first} {last} </p>
                <p>Phone - {cell}</p>
                <p>Email - {email}</p>
            </div>

        </div>
    )
}

