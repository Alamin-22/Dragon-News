import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";



const NewsDetails = () => {
    const {id}= useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 mt-10">
                <div className="col-span-3">
                    <h1 className=" text-5xl font-semibold">Dragon News</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;