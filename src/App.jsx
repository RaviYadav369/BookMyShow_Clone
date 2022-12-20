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

  function onSubmit(e) {
    e.preventDefault()
    onSearch(searchElementRef.current.value)
  }

  return (
    <header css={css`
          border-bottom: 1px solid;
          padding:8px;  

        `}>
      <form css={css`
          display:flex;
          justify-content:space-between;      
        
        `}
        onSubmit={onSubmit}   >
        <input ref={searchElementRef}
          css={css`
            padding:8px;
        `} type="text" />
        <button >Search</button>
      </form>
    </header>
  )
}

function SideNav() {
  const [searchText, setSearchText] = useState("");
  function onSearch(text) {
    setSearchText(text);
  }

  return (
    <aside css={css`
              padding:16px;
              border:1px solid;
              display:grid;
              grid-template-rows:auto 1fr auto;
     `}>
      <Header onSearch={onSearch} />
      <section css={css`
               padding:16px;
               max-height:600px;
               overflow:auto;
      `}>
        list of contacts
        <ContactList searchText={searchText} />


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
    <section css={css`width:90%; margin:auto;`}>
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