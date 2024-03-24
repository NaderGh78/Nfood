import './topMenu.css';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from '../../../redux/slices/themeSlice';
import { setShowModal } from '../../../redux/slices/cartModalSlice';
import { setShowRgisterModal } from '../../../redux/slices/modalSlice';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFilePerson, BsBoxArrowInLeft } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa6";
import { LiaSearchSolid, LiaShoppingCartSolid, LiaSun } from "react-icons/lia";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const TopMenu = () => {

  const dispatch = useDispatch();

  // for testing
  const currentUser = false;

  const { isDarkMode } = useSelector((state) => state.theme);

  const { cartItems } = useSelector((state) => state.cart);

  /*===========================================*/

  // in order to make active class when navigate pages
  const [url, setUrl] = useState(null);

  // in order to close the menu and go smoothly when click on link inside it
  const [expanded, setExpanded] = useState(false);

  const location = useLocation("/");

  // give active class for link depend on location,and change the overflow of body depend is cart modal show or not
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  /*===========================================*/

  return (
    <div className='topmenu'>
      {/* make at the top of page with fixed-top*/}
      <Navbar expand="lg" className="bg-body-tertiary fixed-top" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            <h5 className='my-logo'><span>N</span>Food</h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* make the ul in center of navbar with mx-auto*/}
            <Nav className="mx-auto">
              <Nav.Link
                as={Link}
                to={"/"}
                className={url === "/" ? "active" : ""}
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/menu"}
                className={url === "/menu" ? "active" : ""}
                onClick={() => setExpanded(false)}
              >
                Menu
              </Nav.Link>

              <Nav.Link
                as={Link}
                to={"/about"}
                className={url === "/about" ? "active" : ""}
                onClick={() => setExpanded(false)}
              >
                About
              </Nav.Link>

              <Nav.Link
                as={Link}
                to={"/contact"}
                className={url === "/contact" ? "active" : ""}
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav>
            {/* end first nav */}

            {/* ====================== */}

            <>
              {/* toggle dark mode */}
              {
                isDarkMode
                  ?
                  <FaRegMoon
                    className='toggle-icon'
                    onClick={() => {
                      dispatch(toggleTheme())
                      setExpanded(false)
                    }}
                  />
                  :
                  <LiaSun
                    className='toggle-icon'
                    onClick={() => {
                      dispatch(toggleTheme())
                      setExpanded(false)
                    }}
                  />
              }
              <Nav className='second-nav'>
                <Nav.Link
                  as={Link}
                  to={"/search"}
                  className="LinkIcon"
                  onClick={() => setExpanded(false)}
                >
                  <LiaSearchSolid />
                </Nav.Link>

                {/* cart basket with badge */}
                <Nav.Link
                  className="LinkIcon"
                  onClick={() => {
                    setExpanded(false)
                    dispatch(setShowModal())
                  }}
                >
                  <span>{cartItems.length}</span>
                  <LiaShoppingCartSolid />
                </Nav.Link>

                {/* +++++++++++++++++++ User Part ++++++++++++++++++++++ */}

                {
                  currentUser ?
                    <>
                      <div className="user-account">
                        <div className="dropdown">
                          <button
                            className="btn btn-white dropdown-toggle d-flex align-items-center"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className='text-capitalize fs-6'>samir</span>
                            <img src={process.env.PUBLIC_URL + `/assets/images/user-avatar.png`} alt="user" />
                          </button>
                          <ul className="dropdown-menu">
                            <li className='border-bottom pb-1'>
                              <span
                                className='d-block text-center text-capitalize'
                                style={{ fontSize: "13px" }}
                              >samir</span>
                              <span className='d-block text-center' style={{ fontSize: "13px" }}>email@gmail.com</span>
                            </li>

                            <li className='border-bottom'>
                              <Link
                                // to={`/profile/${user?._id}`} 
                                className="dropdown-item"
                              ><BsFilePerson /> Profile</Link>
                            </li>
                            <li
                              onClick={
                                () => {
                                  // dispatch(logoutUser());
                                  // in small screen , close the navbar when logout user
                                  setExpanded(false)
                                }}
                            ><Link className="dropdown-item"><BsBoxArrowInLeft /> Logout</Link></li>
                          </ul>
                        </div>
                      </div>
                    </>
                    :
                    <h6 className="no-user"
                      onClick={() => dispatch(setShowRgisterModal())}
                    >Login</h6>
                }
              </Nav>
            </>
            {/* end second nav */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopMenu;