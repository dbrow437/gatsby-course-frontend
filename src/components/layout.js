import React from "react"
import MainMenu from "./MainMenu"

import Header from "./header"

const Layout = ({ children }) => (
  <div>
    <MainMenu />
    {children}
  </div>
)

export default Layout
