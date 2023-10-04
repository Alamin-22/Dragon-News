import moment from "moment/moment";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className="text-center">
            <img src={logo} alt="logo" className="mx-auto" />
            <p className="mx-auto text-lg ">Journalism Without Fear or Favour</p>
            <p className="text-xl ">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;