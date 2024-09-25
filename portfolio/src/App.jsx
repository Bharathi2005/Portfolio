import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from "./pages/Projects"

import WebLayout from "./Layouts/WebLayout"
const App = () => {
    return (
        <>
        <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path="/" element={<Profile />} />
                        <Route path="/projects" element={<Projects />} />
                        
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App