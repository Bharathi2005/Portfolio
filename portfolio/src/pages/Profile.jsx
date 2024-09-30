import Profilex from '../assets/img/20220907_154445.jpg';
import Navbar from "../components/Navbar";

const Profile = () => {
    return (
        <>
            <div className="flex flex-row justify-center bg-stone-800 items-center p-10 mt-0">
                <div className="w-1/3 p-20">
                    <img src={Profilex} alt="PROFILE" className="rounded-3xl shadow-lg" />
                </div>
                <div className="text-white font-normal max-w-xl p-3">
                    <p className=" font-extrabold text-3xl mb-4"> 
                        ABOUT ME
                    </p>
                    <p className='font-medium text-xl text-pretty'>
                    I'm a college student deeply interested in cyber forensics. I love uncovering digital evidence, analyzing cyber threats, and understanding how incidents happen. My focus is on network security, malware analysis, and forensic tools like Wireshark and Autopsy. I aim to use my skills to make the digital world safer and contribute to solving real cybersecurity challenges.                       
                        </p>
                </div>
            </div>
        </>
    );
}

export default Profile;
