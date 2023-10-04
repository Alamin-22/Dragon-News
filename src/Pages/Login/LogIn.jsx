import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const LogIn = () => {
    const { LogInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate= useNavigate();
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")
        console.log(email, password);

        LogInUser(email, password)
            .then(result => {
                console.log(result.user)
                // navigate after login
              navigate(location?.state? location.state : "/")


            })
            .catch(error => {
                console.log(error)
            })

    }




    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl font-semibold text-center">Please LogIn</h1>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center">Do not have an account? <Link to={"/register"} className=" text-blue-600 font-semibold hover:text-purple-500">Register</Link></p>

        </div>



    );
};

export default LogIn;