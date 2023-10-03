import moment from "moment/moment";

const Header = () => {
    return (
        <div  className="text-center">
            <img src={"/src/assets/logo.png"} alt="logo" className="mx-auto" />
            <p className="mx-auto text-lg ">Journalism Without Fear or Favour</p>
            <p className="text-xl ">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;