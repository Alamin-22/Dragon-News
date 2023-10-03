import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Register = () => {
    const {createUser,}= useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("Password")
        const name = form.get("name")
        const PhotoUrl = form.get("PhotoURl")
        console.log(email, password, name, PhotoUrl);



        createUser(email, password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl font-semibold text-center">Register For Daily Update And Exciting News</h1>
            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURl</span>
                    </label>
                    <input type="text" placeholder="PhotoURl" name="PhotoURl" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="Password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center"> Already Have an account? <Link to={"/login"} className=" text-blue-600 font-semibold hover:text-purple-500">LogIn</Link></p>

        </div>
    );
};

export default Register;