import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './App'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { loadContacts, loadContact } from "./loader"
import { Contact } from "./Contact"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} loader={loadContacts} >
      <Route path='/contacts/:contactId' loader={({params})=> loadContact(params.contactId)} element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
