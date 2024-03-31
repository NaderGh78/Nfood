import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { deleteProfile, getAllUsersProfile } from "../../redux/apiCalls/profileApiCall";
import { FaTrash } from "react-icons/fa6";
import { LiaEye } from "react-icons/lia";
import imgSrc from "../../utils/constants";
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css 

/*===========================================*/
/*===========================================*/
/*===========================================*/

const AdminCutomersTable = () => {

    // const dispatch = useDispatch();

    // const { profiles } = useSelector((state) => state.profile);

    /*===========================================*/

    // useEffect(() => {
    //     dispatch(getAllUsersProfile());
    // }, [profiles]);

    // delete user from table depend on it id
    // const Delete = async (id) => {
    //     dispatch(deleteProfile(id));
    // };

    /*===========================================*/

    // show confirm msg,when need to delete some user
    // const handleDelete = async (id) => {
    //     const singleUser = profiles.find(el => el._id === id);
    //     const txt = <>Are you sure you want to delete <span className='text-danger text-nowrap'>{`[${singleUser.username}]`}</span> ?</>
    //     confirmAlert({
    //         message: txt,
    //         buttons: [{
    //             label: 'Yes',
    //             onClick: () => Delete(id)
    //         },
    //         { label: 'No' }
    //         ]
    //     });
    // }

    /*===========================================*/
    const profiles = [
        { id: 1, username: "salim salim", userImage: "/assets/images/review.png", email: "hello@gmail.com" },
        { id: 2, username: "dani dani", userImage: "/assets/images/review.png", email: "dani@gmail.com" },
        { id: 3, username: "mike mike", userImage: "/assets/images/review.png", email: "mike@gmail.com" },
        { id: 4, username: "maged maged", userImage: "/assets/images/review.png", email: "maged@gmail.com" },
        { id: 5, username: "wael wael", userImage: "/assets/images/review.png", email: "wael@gmail.com" },
        { id: 6, username: "sami sami", userImage: "/assets/images/review.png", email: "sami@gmail.com" },
        { id: 7, username: "fawzet fawzet", userImage: "/assets/images/review.png", email: "fawzet@gmail.com" },
        { id: 8, username: "adnan adnan", userImage: "/assets/images/review.png", email: "adnan@gmail.com" }
    ];
    /*===========================================*/

    return (
        <div className='table-box'>
            <h2 style={{ color: "var(--dark)" }}>All Cutomers</h2>
            <table className="table table-hover table-bordered table-transparent">
                <thead>
                    <tr>
                        <th scope="col" className='text-center'>#</th>
                        <th scope="col" className='text-center'>Name</th>
                        <th scope="col" className='text-center'>Email</th>
                        <th scope="col" className='text-center'>Photo</th>
                        <th scope="col" className='text-center'>Create At</th>
                        <th scope="col" className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        profiles.length > 0
                            ?
                            profiles.map((el, i) => (
                                <tr key={i}>
                                    <th scope="row" className='text-center'>{i + 1}</th>
                                    <td
                                        className='text-center text-capitalize'
                                        style={{ color: "red" }}
                                    >{el.username}</td>
                                    <td className='text-center'>
                                        <a href={`mailto:${el.email}`} target="_blank">{el.email}</a>
                                    </td>
                                    <td className='text-center'>
                                        <img src={process.env.PUBLIC_URL + el.userImage} alt="user image" />
                                    </td>
                                    <td className='text-center'>25/2/2024</td>
                                    <td className='text-center text-nowrap'>
                                        <Link
                                            to="/"
                                            className='btn btn-small bg-success rounded-0 text-white me-1'
                                        >
                                            <LiaEye />
                                        </Link>


                                        {/* 
                                        
                                        // if the user is admin , hide the delete btn
                                        
                                        {!el.isAdmin
                                            &&
                                            <>
                                                <button
                                                    className='btn btn-small bg-danger rounded-0 text-white'
                                                    onClick={() => handleDelete(el._id)}
                                                    disabled={el.isAdmin}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </>
                                        } */}

                                        <button
                                            className='btn btn-small bg-danger rounded-0 text-white'
                                        // onClick={() => handleDelete(el._id)}
                                        // disabled={el.isAdmin}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                            :
                            <tr className='text-center'>
                                <td colSpan="6"><h2>No Cutomers Yet!</h2></td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminCutomersTable;