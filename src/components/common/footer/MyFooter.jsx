import "./myFooter.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa6";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const MyFooter = () => {
    return (
        <div className="footer">
            {/* top start */}
            <div className="top">
                <div className="myContainer">
                    <div className="footer-sections">
                        <div>
                            <Link to="/" className="text-decoration-none">
                                <h5 className='my-logo'>
                                    <span>N</span>Food
                                </h5>
                            </Link>

                            <p>Savor the artistry where every dish is a culinary masterpiece</p>
                        </div>
                        {/* ================ */}
                        <div>
                            <h6>USEFUL LINKS</h6>
                            <ul>
                                <li><Link to="">About us</Link></li>
                                <li><Link to="">Events</Link></li>
                                <li><Link to="">Blogs</Link></li>
                                <li><Link to="">FAQ</Link></li>
                            </ul>
                        </div>
                        {/* ================ */}
                        <div>
                            <h6>MAIN MENU</h6>
                            <ul>
                                <li><Link to="">Home</Link></li>
                                <li><Link to="">Offers</Link></li>
                                <li><Link to="">Menus</Link></li>
                                <li><Link to="">Reservation</Link></li>
                            </ul>
                        </div>
                        {/* ================ */}
                        <div>
                            <h6>CONTACT US</h6>
                            <ul>
                                <li><Link to="">example@email.com</Link></li>
                                <li><Link to="">+123456789</Link></li>
                                <li><Link to="">Social media</Link></li>
                            </ul>
                        </div>
                        {/* ================ */}
                    </div>
                    {/* footer-sections end */}
                </div>
            </div>
            {/* top end */}

            {/* bottom start */}
            <div className="bottom">
                <div className="myContainer">
                    <div className="copyRight">
                        <p className="mb-0">Copyright &copy; 2024 - All right reserved</p>
                        <ul>
                            <li><Link to=""><FaFacebookF /></Link></li>
                            <li><Link to=""><FaYoutube /></Link></li>
                            <li><Link to=""><FaTwitter /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* bottom end */}
        </div>
    )
}

export default MyFooter;