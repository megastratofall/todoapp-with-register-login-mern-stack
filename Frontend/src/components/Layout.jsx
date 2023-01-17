import "../css/layoutCss.css";
import React from 'react'

const Layout = ({children}) => {
return (
<main className="container">{children}</main>
)
}

export default Layout
