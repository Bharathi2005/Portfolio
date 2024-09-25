import Navbar from "../components/Navbar"
import projec from "../assets/img/Malicious.jpg"
import pro from "../assets/img/Scraping.jpg"
import proj from "../assets/img/secure.jpg"
const Projects=()=>{
    return(
        <>
        <div className="flex flex-row justify-center items-center gap-20  bg-neutral-200">
            <div class="card">
            <div class="card-details">
                <img src={projec} className="w-90 h-40"/>
                <p class="text-title" className="text-center text-lg font-extrabold">MALICIOUS FILE IDENTIFICATION</p>
            </div>
            <button class="card-button">More info</button>
            </div>
            <div class="card">
            <div class="card-details">
                <img src={pro} className="w-90 h-40"/>
                <p class="text-title" className="text-center text-lg font-extrabold">WEB SCRAPING</p>
            </div>
            <button class="card-button">More info</button>
            </div>
            <div class="card">
            <div class="card-details">
                <img src={proj} className="w-95 h-40"/>
                <p class="text-title" className="text-center text-lg font-extrabold">SECURE WALLET SOLUTIONS</p>
            </div>
            <button class="card-button">More info</button>
            </div>
        </div>
        </>
    )
}

export default Projects