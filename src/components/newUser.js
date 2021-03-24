import React, { useState, useEffect } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axiosInstance from './helpers/axios';
import { isAuth, signout } from './helpers/auth';
import { Redirect } from 'react-router';
var jwt = require('jsonwebtoken');

const NewUser = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("Office Admin");
    const [picture, setPicture] = useState();
    const [pname, setpName] = useState("");
    const [ppicture, setpPicture] = useState("");
    const [roll, setRoll] = useState("");

    useEffect(() => {
        if (isAuth) {
            var d = JSON.parse(localStorage.getItem('token'));
            var admin = jwt.decode(d);
            setpPicture(admin.admin.picture);
            setpName(admin.admin.name);
            setRoll(admin.admin.role);
        }
    }, [])

    const popup = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, sign out!'
        }).then((result) => {
            if (result.isConfirmed) {
                signout();
                Swal.fire(
                    'Signed Out!',
                    'Your have been successfully signed out.',
                    'success'
                )
            }
        })
    }

    const handleSubmit = () => {

        let formData = new FormData();

        formData.append('name', name);
        formData.append('number', number);
        formData.append('picture', picture);
        formData.append('email', email);
        formData.append('city', city);
        formData.append('address', address);
        formData.append('role', role);
        // window.alert(formData)
        axiosInstance.post('user/add', formData)
            .then(res => {
                store.addNotification({
                    title: `${res.data.message}`,
                    message: 'User created Successfully!',
                    type: "success",
                    container: 'top-right',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000,
                        showIcon: true
                    }
                })
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err.response)
                store.addNotification({
                    title: `${err.response.data.error}`,
                    message: 'Try again with valid credentials!',
                    type: "warning",
                    container: 'top-right',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000,
                        showIcon: true
                    }
                })
                window.location.reload(false);
            })
    }

    return (
        isAuth() ? roll === "super admin" ?
            <div>
                <div className="main-menu">
                    <header className="header">
                        <a href="index.html" className="logo">
                            <img src="assets/images/tac-logo.png" alt="" />
                        </a>
                        <button type="button" className="button-close fa fa-times js__menu_close"></button>
                        <div className="user">
                            <a href="#" className="avatar"><img src={ppicture} alt="" /><span className="status online"></span></a>
                            <h5 className="name text-white">{pname}</h5>
                            <h5 className="position">Super Admin</h5>
                        </div>
                    </header>
                    <div className="content">

                        <div className="navigation">
                            <h5 className="title">Navigation</h5>
                            <ul className="menu js__accordion">
                                <li className="current">
                                    <a className="waves-effect parent-item js__control" href="/newUser"><i className="menu-icon fa fa-flag"></i><span>User</span><span className="menu-arrow fa fa-angle-down"></span></a>
                                    <ul className="sub-menu js__content">
                                        <li><a href="/newUser"><h5>New</h5></a></li>
                                        <li><a href="/"><h5>Existing</h5></a></li>

                                    </ul>
                                </li>
                                <li>
                                    <a className="waves-effect parent-item js__control" href="/newDoctor"><i className="menu-icon fa fa-adjust"></i><span>Doctor</span>
                                        <span className="menu-arrow fa fa-angle-down"></span>
                                    </a>
                                    <ul className="sub-menu js__content">
                                        <li><a href="/newDoctor"><h5>New</h5></a></li>
                                        <li><a href="/existingDoctor"><h5>Existing</h5></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="menu-icon fa fa-adjust"></i><span>Office Admin</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i className="menu-icon fa fa-adjust"></i><span>Accountant</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i className="menu-icon fa fa-adjust"></i><span>CAD</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i className="menu-icon fa fa-adjust"></i><span>Planner</span>

                                    </a>

                                </li>
                                <li>
                                    <a href="#"><i className="menu-icon fa fa-adjust"></i><span>Dentist</span>

                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="fixed-navbar">
                    <div className="pull-left">
                        <button type="button" className="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"></button>
                        <h1 className="page-title">New User</h1>
                    </div>
                    <div className="pull-right">
                        <a onClick={popup} className="ico-item fa fa-power-off"></a>
                    </div>
                </div>
                <div id="wrapper">
                    <div className="main-content">

                        {/* <div className="row small-spacing d-flex align-items-center"> */}
                        <div className="row ml-30">
                            <form className="offset-md-4 col-md-4 col-sm-4 col-xs-4">
                                <div className="text-center">
                                    <div className="box-content card white">
                                        <h4 className="box-title">Add New User</h4>
                                        <div className="card-content">
                                            <form>
                                                <div className="form-group">
                                                    <label for="input-file-now">User's Photo</label>
                                                    <input
                                                        type="file"
                                                        id="input-file-now"
                                                        accept="image/x-png,image/gif,image/jpeg,image/jpg"
                                                        onChange={(e) => setPicture(e.target.files[0])} />
                                                </div>

                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Name</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="exampleInputName1"
                                                        placeholder="Enter Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Number</label>
                                                    <input type="tel"
                                                        className="form-control"
                                                        id="exampleInputName1"
                                                        placeholder="Enter Phone Number"
                                                        value={number}
                                                        onChange={(e) => setNumber(e.target.value)}
                                                        required />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Email</label>
                                                    <input type="email"
                                                        className="form-control"
                                                        id="exampleInputName1"
                                                        placeholder="Enter Email Id"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">City</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        id="exampleInputName1"
                                                        placeholder="Enter City"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                        required />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Address</label>
                                                    <textarea type="text"
                                                        className="form-control"
                                                        id="exampleInputName1"
                                                        placeholder="Enter Address"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        required></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Role</label>
                                                    <select
                                                        className="form-control select2_1 select2-hidden-accessible"
                                                        value={role}
                                                        defaultValue="Office Admin"
                                                        onChange={(e) => setRole(e.target.value)}
                                                    >
                                                        <option value="Office Admin">Office Admin</option>
                                                        <option value="Accountant">Accountant</option>
                                                        <option value="CAD">CAD</option>
                                                        <option value="Planner">Planner</option>
                                                        <option value="Dentist">Dentist</option>
                                                    </select>
                                                </div>
                                            </form>

                                            <button onClick={handleSubmit} className="btn btn-success btn-sm waves-effect waves-light">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* </div> */}

                        <footer className="footer text-center">
                            <ul className="list-inline">
                                <li>
                                    <script>
                                        document.write(new Date().getFullYear())
                        </script> © The Aligner Company.
                    </li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </footer>
                    </div>
                </div>
            </div>
            : "It seems like You don't have super admin rights!" : <Redirect to="/login" />
    )

}

export default NewUser;