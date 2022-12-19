import { useRef, useState } from 'react'
import './App.css'

import { css } from "@emotion/react"
import { Outlet } from 'react-router-dom'
import { ContactList } from "./ContactList"

function Header({ onSearch }) {

  // const [searchText, setsearchText] = useState([])
  // function handlechange(e) {
  //   const { value } = e.target;
  //   setsearchText(value);
  // }

  const searchElementRef = useRef(null)

  return (
    <header css={css`
          border-bottom: 1px solid;
          padding:8px;  

        `}>
      <form css={css`
          display:flex;
          justify-content:space-between;      
        
        `}>
        <input  ref={searchElementRef}
         css={css`
            padding:8px;
        `} type="text" value={searchText} onChange={handlechange} />
        <button onClick={() => onSearch(searchElementRef.current.value)}>Search</button>
      </form>
    </header>
  )
}

function SideNav() {


  return (
    <aside css={css`
              padding:16px;
              border:1px solid;
              display:grid;
              grid-template-rows:auto 1fr auto;
     `}>
      <Header />
      <section css={css`
               padding:16px;
               max-height:450px;
               overflow:auto;
      `}>
        list of contacts
        <ContactList />


      </section>
      <footer css={css`
             padding:16px;
             border-top:1px solid;
      `}> this is footer</footer>
    </aside>
  )
}

function Contents() {
  return (
    <section>
      <Outlet />
    </section>
  )
}

export function Layout() {
  return (
    <>
      <main css={css`
            display:grid;
            grid-template-columns: minmax(250px,25%) 1fr;
            height:100%;
    `}
      >
        <SideNav />
        <Contents />

      </main>
    </>
  )
}