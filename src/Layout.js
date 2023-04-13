import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <header style={{background: "lightgray", padding: 16, fontSize: 24}}>
                <h2>Header</h2>
            </header>
            
            <main>
                <Outlet/>
            </main>
            
        </div>
    )
}

export default Layout;