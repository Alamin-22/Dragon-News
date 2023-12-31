import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZoon1 from "../../assets/qZone1.png";
import qZoon2 from "../../assets/qZone2.png";
import qZoon3 from "../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="border rounded-lg p-4 space-y-3 mb-6">
                <h1 className="text-3xl">LogIn With</h1>
                <button className="btn btn-outline w-full">
                    <FcGoogle className='text-3xl'/>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className='text-3xl'/>
                    GitHub
                </button>
            </div>
            <div className="border rounded-lg p-4 mb-6">
                <h1 className="text-3xl">Find Us On</h1>
                <a href="" className='flex  p-3 text-lg items-center border rounded-t-lg '>
                    <FaFacebook className='mr-3 text-2xl '/>
                    <span>FaceBook</span>
                </a>
                <a href="" className='flex  p-3 text-lg items-center border-x '>
                    <FaTwitter className='mr-3 text-2xl '/>
                    <span>Twitter</span>
                </a>
                <a href="" className='flex  p-3 text-lg items-center border rounded-b-lg '>
                    <FaInstagram className='mr-3 text-2xl '/>
                    <span>Instagram</span>
                </a>
            </div>
            {/* baccha zoon */}
            <div className="border rounded-lg p-4 space-y-3 mb-6">
                <h1 className="text-3xl">Q Zoon</h1>
                <img src={qZoon1} alt="picchi1" />
                <img src={qZoon2} alt="picchi2" />
                <img src={qZoon3} alt="picchi3" />
            </div>
        </div>
    );
};

export default RightSideNav;