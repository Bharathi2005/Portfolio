import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WebLayout from "./Layouts/WebLayout";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
    
    return (
        <>
    
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route element={<WebLayout />}>
                    <Route path="/" element={<Profile />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
        </>
    );
}

export default App;
