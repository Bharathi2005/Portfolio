import Profilex from '../assets/img/20220907_154445.jpg';
import Navbar from "../components/Navbar";

const Profile = () => {
    return (
        <>
            <div className="flex flex-row justify-center items-center  bg-neutral-200 p-10 mt-0">
                <div className="w-1/3 p-20">
                    <img src={Profilex} alt="PROFILE" className="rounded-3xl shadow-lg" />
                </div>
                <div className="text-lg font-normal max-w-xl p-3">
                    <p className="font-bold text-2xl mb-4"> 
                        ABOUT ME
                    </p>
                    <p>
                        I'm a software developer with a strong focus on cybersecurity and digital forensics. My expertise includes network security, penetration testing, and vulnerability assessments, with hands-on experience in Python programming and forensic analysis tools. I’m passionate about uncovering hidden threats and using forensic techniques to analyze and secure systems. 
                    </p>
                    <p className="mt-4">
                        Currently, I’m working on projects like malicious file identification and AI-driven solutions. I enjoy solving complex problems through efficient, secure code and continuously seek to enhance both security and user experience in my work.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Profile;
