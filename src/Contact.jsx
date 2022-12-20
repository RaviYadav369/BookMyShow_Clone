import React from 'react'
import { css } from '@emotion/react';
import { useLoaderData } from 'react-router-dom'

export function Contact() {
    const contact = useLoaderData()
    const {cell:cell,email:email,name:{title,first,last},picture:{large}} =contact;
    console.log(contact);

    return (
        <div css={css`
            padding:40px;
            display:flex;
            justify-content:space-around;
            align-content:center;
            border:2px solid gray;
          `}>
            <div css={css`
                    height:200px;
                    width:30%;
                  

            `}>
                <img css={css`height:200px; width:90%;margin:auto; border-radius:5px;`} src={large} alt={first} />
            </div>
            <div css={css`
                    height:200px;
                    width:30%;
                    
                    
            `}>
                <p>Name - {title} {first} {last} </p>
                <p>Phone - {cell}</p>
                <p>Email - {email}</p>
            </div>

        </div>
    )
}

