import React from "react"
import Navbar from "./Navbar"
import Oslo from "./sider/Oslo"
import Hovedside from "./sider/Hovedside"
import Trondheim from "./sider/Trondheim"
import { Route, Routes } from "react-router-dom"
// Her har jeg importer alt jeg trenger som for eksemple alle de forskjelige tabsbs.


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/hovedside" element={<Hovedside />} />
          <Route path="/Oslo" element={<Oslo />} />
          <Route path="/Trondheim" element={<Trondheim />} />
        </Routes>
      </div>
    </>
  )
}
{/* Her har jeg laget 3 elementer som er koblet til navigasjonsbar slik at de vises der */}



export default App
