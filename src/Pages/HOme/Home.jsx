import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNEws from "./BreakingNEws";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNEws></BreakingNEws>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h1 className="text-2xl">  Center Content </h1>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;