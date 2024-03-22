import "./login.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa6";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const Login = () => {
    return (
        <div className="login">
            <div className="my-form">
                <h2 className="form-title">Create An Account <Link to="/">Back Home</Link></h2>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="mb-1">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="mb-1">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="password" />
                    </div>

                    <Link to="">Forgot password?</Link>
                    <button type="submit">Login</button>
                </form>
                <p className="text-center" style={{ color: "var(--light-white)" }}>
                    Don't have an account?{" "}
                    {/* prevent to show the modal when back */}
                    <Link
                        to="/register"
                        style={{ color: "#ff6868" }}
                    >Signup Now</Link>
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

export default Login;