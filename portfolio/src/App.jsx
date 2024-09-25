import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
const App=()=>{
    return(
        <>
            <Navbar/>
            <div>
                <Profile/>
            </div>
            <div>
                <Projects/>
            </div>

        </>
    )
}

export default App