import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";



const BreakingNEws = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary rounded-r-none"> Breaking News</button>
            <Marquee pauseOnHover={true} className="cursor-pointer bg-red-200 text-gray-800 rounded-r-lg">
                <Link to={"/"} className="mr-12 ">I can be a React component, multiple React components, or just some text.......</Link>
                <Link to={"/"} className="mr-12 ">I can be a React component, multiple React components, or just some text.......</Link>
                <Link to={"/"} className="mr-12 ">I can be a React component, multiple React components, or just some text.......</Link>
                <Link to={"/"} className="mr-12 ">I can be a React component, multiple React components, or just some text.......</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNEws;