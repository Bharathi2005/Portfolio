import Navbar from "../components/Navbar";
import projec from "../assets/img/Malicious.jpg";
import pro from "../assets/img/Scraping.jpg";
import proj from "../assets/img/secure.jpg";
import proje from "../assets/img/honeypot.jpg"

const Projects = () => {
    return (
        <>
            <div className="flex flex-row justify-center items-center gap-20 bg-neutral-200 p-10">
               
                <div className="card bg-white shadow-lg rounded-lg p-5">
                    <div className="card-details">
                        <img src={projec} className="w-full h-40 object-cover rounded-md" alt="Malicious File Identification" />
                        <p className="text-center text-lg font-extrabold mt-4">MALICIOUS FILE IDENTIFICATION</p>
                    </div>
                    <button className="card-button text-white py-2 px-4 rounded-md mt-4">More info</button>
                </div>

               
                <div className="card bg-white shadow-lg rounded-lg p-5">
                    <div className="card-details">
                        <img src={pro} className="w-lvw h-40  rounded-md" alt="Web Scraping" />
                        <p className="text-center text-lg font-extrabold mt-4">WEB SCRAPING</p>
                    </div>
                    <button className="card-button text-white py-2 px-4 rounded-md mt-4">More info</button>
                </div>

                
                <div className="card bg-white shadow-lg rounded-lg p-5">
                    <div className="card-details">
                        <img src={proj} className="w-full h-40 object-cover rounded-md" alt="Secure Wallet Solutions" />
                        <p className="text-center text-lg font-extrabold mt-4">SECURE WALLET SOLUTIONS</p>
                    </div>
                    <button className="card-button text-white py-2 px-4 rounded-md mt-4">More info</button>
                </div>

                <div className="card bg-white shadow-lg rounded-lg p-5">
                    <div className="card-details">
                        <img src={proje} className="w-full h-40  rounded-md" alt="Secure Wallet Solutions" />
                        <p className="text-center text-lg font-extrabold mt-4">HONEYPOT SENTINEL</p>
                    </div>
                    <button className="card-button text-white py-2 px-4 rounded-md mt-4">More info</button>
                </div>

            </div>
        </>
    );
}

export default Projects;
