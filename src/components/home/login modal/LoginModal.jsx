import "./loginModal.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHideRgisterModal } from "../../../redux/slices/modalSlice";
import Modal from 'react-bootstrap/Modal';
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa6";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const LoginModal = () => {

    const dispatch = useDispatch();

    const { showModal } = useSelector((state) => state.modal);

    return (
        <div className="login-modal">

            <Modal show={showModal} onHide={() => dispatch(setHideRgisterModal())} animation={false} className="my-modal mt-5">
                <Modal.Header closeButton>
                    <Modal.Title>Please Login!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="my-form">
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
                            <button type="submit">Submit</button>
                        </form>
                        <p className="text-center">
                            Don't have an account?{" "}
                            {/* prevent to show the modal when back */}
                            <Link
                                to="/register"
                                style={{ color: "#ff6868" }}
                                onClick={() => dispatch(setHideRgisterModal())}
                            >Signup Now</Link>
                        </p>
                        <ul>
                            <li><Link><FaGoogle /></Link></li>
                            <li><Link><FaFacebookF /></Link></li>
                            <li><Link><FaTwitter /></Link></li>
                        </ul>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default LoginModal;