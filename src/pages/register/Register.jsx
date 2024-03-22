import "./register.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const Register = () => {
    return (
        <div className="register">
            <div className="my-form">
                <h2 className="form-title">Create An Account <Link to="/">Back Home</Link></h2>
                <form>

                    <div className="form-group mb-3">
                        <label htmlFor="name" className="mb-1">Email</label>
                        <input type="text" className="form-control" id="name" placeholder="name" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="email" className="mb-1">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="mb-1">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="password" />
                    </div>

                    <Link to="">Forgot password?</Link>

                    <button type="submit">Sign up</button>

                </form>
                <p className="text-center" style={{ color: "var(--light-white)" }}>
                    Have an account?{" "}
                    {/* prevent to show the modal when back */}
                    <Link
                        to="/login"
                        style={{ color: "#ff6868" }}
                    >Login here</Link>
                </p>
                <ul>
                    <li><Link><FaGoogle /></Link></li>
                    <li><Link><FaFacebookF /></Link></li>
                    <li><Link><FaTwitter /></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Register;