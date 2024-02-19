import React from 'react'
import { Link } from 'react-router-dom';
import '../MajorComponents/HomePage/Home.css';
import CarouselComponent from '../MajorComponents/carousel/Carousel';;

const AdminDashboard = () => {
    return (
        <>

            <div className="HomeContainer">

                <div className="HomeCard">
                    <img src="https://icon-library.com/images/to-do-list-icon/to-do-list-icon-15.jpg" alt="Service 3" />
                    <h5>REGISTER OWNER</h5>
                    <p>register the owner</p>
                    <Link to="/OwnerRegistration" className="btn btn-primary" style={{ width: '100%', maxWidth: '100%' }}>APPLY</Link>
                </div>

                <div className="HomeCard">
                    <img src="https://cdn-icons-png.flaticon.com/512/2554/2554896.png" alt="Service 4" />
                    <h5>LEARNER APPLICATION LIST</h5>
                    <p>get all learner applications list</p>
                    <Link to="/LearnerApplicationsList" className="btn btn-primary" style={{ width: '100%', maxWidth: '100%' }}>APPLY</Link>
                </div>

                <div className="HomeCard">
                    <img src="https://cdn-icons-png.flaticon.com/512/3456/3456426.png" alt="Service 4" />
                    <h5>GET All Users</h5>
                    <p>get list of all active users</p>
                    <Link to="/UserList" className="btn btn-primary" style={{ width: '100%', maxWidth: '70%' }}>APPLY</Link>
                </div>

                <div className="HomeCard">
                    <img src="https://cdn-icons-png.flaticon.com/512/3456/3456426.png" alt="Service 4" />
                    <h5>GET All Owners</h5>
                    <p>get info of your vehicle</p>
                    <Link to="/GetListOfOwners" className="btn btn-primary" style={{ width: '100%', maxWidth: '70%' }}>APPLY</Link>
                </div>

            </div>
            <div className='HomeContainer' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CarouselComponent />
            </div>
        </>
    );
};

export default AdminDashboard



