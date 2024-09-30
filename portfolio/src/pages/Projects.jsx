import Navbar from "../components/Navbar";
import projec from "../assets/img/Malicious.jpg";
import pro from "../assets/img/Scraping.jpg";
import proj from "../assets/img/secure.jpg";
import proje from "../assets/img/honeypot.jpg";

const Projects = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center gap-10 p-10 bg-stone-800 h-screen">
                <div className="card transform transition duration-300 hover:-translate-y-3 w-72">
                    <div className="card-details">
                        <img src={projec} className="w-full h-40 object-cover rounded-md" alt="Malicious File Identification" />
                        <p className="text-center text-lg font-extrabold mt-4 name">MALICIOUS FILE IDENTIFICATION</p>
                    </div>
                    <button className="card-button rounded-md mt-4 transition duration-300 w-full">More info</button>
                </div>

                <div className="card transform transition duration-300 hover:-translate-y-3 w-72">
                    <div className="card-details">
                        <img src={pro} className="w-full h-40 object-cover rounded-md" alt="Web Scraping" />
                        <p className="text-center text-lg font-extrabold mt-4 name">WEB SCRAPING</p>
                    </div>
                    <button className="card-button rounded-md mt-4 transition duration-300 w-full">More info</button>
                </div>

                <div className="card transform transition duration-300 hover:-translate-y-3 w-72">
                    <div className="card-details">
                        <img src={proj} className="w-full h-40 object-cover rounded-md" alt="Secure Wallet Solutions" />
                        <p className="text-center text-lg font-extrabold mt-4 name">SECURE WALLET SOLUTIONS</p>
                    </div>
                    <button className="card-button rounded-md mt-4 transition duration-300 w-full">More info</button>
                </div>

                <div className="card rounded-lg p-5  transform transition duration-300 hover:-translate-y-3 w-72">
                    <div className="card-details">
                        <img src={proje} className="w-full h-40 object-cover rounded-md" alt="Honeypot Sentinel" />
                        <p className="text-center text-lg font-extrabold mt-4 name">HONEYPOT SENTINEL</p>
                    </div>
                    <button className="card-button rounded-md mt-4 transition duration-300 w-full">More info</button>
                </div>
            </div>
        </>
    );
};

export default Projects;
