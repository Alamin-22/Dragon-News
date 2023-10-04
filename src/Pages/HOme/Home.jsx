import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNEws from "./BreakingNEws";
import NewsCard from "./NewsCard";

const Home = () => {
    const News = useLoaderData();
    console.log(News.length)
    return (
        <div>
            <Header></Header>
            <BreakingNEws></BreakingNEws>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 ">
                    {
                        News.map(ANews => <NewsCard key={ANews.id} ANews={ANews}></NewsCard>)
                    }
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;