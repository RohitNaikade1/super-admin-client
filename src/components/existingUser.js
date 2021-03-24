import React, { useState, useEffect, useMemo } from 'react';
import Header from './DataTable/Header';
import Search from './DataTable/Search';
import Pagination from './DataTable/Pagination';
import axiosInstance from './helpers/axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { Row, Col } from 'reactstrap';
import { isAuth, signout } from './helpers/auth';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
var jwt = require('jsonwebtoken');

const ExistingUser = () => {

    const [data, setData] = useState();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [roll, setRoll] = useState("");

    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        const getData = () => {
            axiosInstance.get("user/read")
                .then(res => {
                    setData(res.data.data);

                    var d=JSON.parse(localStorage.getItem('token'));
                    var admin=jwt.decode(d);
                    setPicture(admin.admin.picture);
                    setName(admin.admin.name);
                    setRoll(admin.admin.role);
                })
        }
        getData();
    }, [])

    
    const headers = [
        { name: "Name", field: "name" },
        { name: "Number", field: "number" },
        { name: "Email", field: "email" },
        { name: "Role", field: "role" },
        { name: "City", field: "city" },
        { name: "Action", field: "_id" }
    ]

    const usersData = useMemo(() => {
        // console.log(data)
        if (data != undefined) {
            setTotalItems(data.length)
            let computedUsers = data;
            // console.log(data,search)
            if (search != '') {
                computedUsers = computedUsers.filter(user => {
                    return user.name.toLowerCase().includes(search.toLowerCase()) ||
                        user.email.toLowerCase().includes(search.toLowerCase())
                })
            }
            // console.log(computedUsers)
            return computedUsers.slice((currentPage - 1) * ITEMS_PER_PAGE,
                (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
        }


    }, [data, search, currentPage])

    const popup=()=>{
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

    const block = (email) => {
        console.log(email);
        const body = {
            email
        }
        axiosInstance.post('user/block', body)
            .then(res => {
                store.addNotification({
                    title: "Action Completed Successfully!",
                    message: 'Status Updated!',
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
                    title: "Oops,something went wrong!",
                    message: 'Try again!',
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
                <div class="main-menu">
                    <header class="header">
                        <a href="/" class="logo">
                            <img src="assets/images/tac-logo.png" alt="" />
                        </a>
                        <button type="button" class="button-close fa fa-times js__menu_close"></button>
                        <div className="user">
                            <a href="#" className="avatar"><img src={picture} alt="" /><span className="status online"></span></a>
                            <h5 className="name text-white">{name}</h5>
                            <h5 className="position">Super Admin</h5>
                        </div>
                    </header>
                    <div class="content">

                        <div class="navigation">
                            <h5 class="title">Navigation</h5>
                            <ul class="menu js__accordion">
                                <li class="current">
                                    <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-flag"></i><span>User</span><span class="menu-arrow fa fa-angle-down"></span></a>
                                    <ul class="sub-menu js__content">
                                        <li><a href="/newUser"><h5>New</h5></a></li>
                                        <li><a href="/"><h5>Existing</h5></a></li>

                                    </ul>
                                </li>
                                <li>
                                    <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-adjust"></i><span>Doctor</span>
                                        <span class="menu-arrow fa fa-angle-down"></span>
                                    </a>
                                    <ul class="sub-menu js__content">
                                        <li><a href="/newDoctor"><h5>New</h5></a></li>
                                        <li><a href="/existingDoctor"><h5>Existing</h5></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Office Admin</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Accountant</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i class="menu-icon fa fa-adjust"></i><span>CAD</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Planner</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Dentist</span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="fixed-navbar">
                    <div class="pull-left">
                        <button type="button" class="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"></button>
                        <h1 class="page-title">Registered Users</h1>
                    </div>
                    <div class="pull-right">
                        <a onClick={popup} className="ico-item fa fa-power-off"></a>
                    </div>

                </div>
                <div id="wrapper">
                    <div class="main-content">

                        <div className="row w-100">
                            <div className="col mb-3 col-12 text-center">
                            <div className="row">
                                        <div className="col-xs-6">
                                            <Pagination
                                                total={totalItems}
                                                itemsPerPage={ITEMS_PER_PAGE}
                                                currentPage={currentPage}
                                                onPageChange={page => setCurrentPage(page)} />
                                        </div>
                                        <div className="col-xs-6 float-right d-flex flex-row-reverse">
                                            <Search onSearch={(value) => {
                                                setSearch(value);
                                                setCurrentPage(1);
                                            }} />
                                        </div>
                                    </div>

                                <div className="row">
                                    
                                    <table className="table table-striped" style={{ width: "100%" }} >

                                        <Header headers={headers} />
                                        <tbody>

                                            {usersData != undefined ? usersData.map(record => (<tr>
                                                <td style={{ fontSize: "15px" }}>{record.name}</td>
                                                <td style={{ fontSize: "15px" }}>{record.number}</td>
                                                <td style={{ fontSize: "15px" }}>{record.email}</td>
                                                <td style={{ fontSize: "15px" }}>{record.role}</td>
                                                <td style={{ fontSize: "15px" }}>{record.city}</td>
                                                <td>
                                                    {record.isBlocked ? <button class="btn btn-success"  style={{height:"30px",width:"90px"}} onClick={(e) => block(record.email)}>
                                                        <p style={{ fontSize: "12px" }}>Unblock</p>
                                                    </button> : <button class="btn btn-danger"  style={{height:"30px",width:"90px"}} onClick={(e) => block(record.email)}>
                                                        <p style={{ fontSize: "12px" }}>Block</p>
                                                    </button>}
                                                </td>
                                            </tr>)
                                            ) : ""}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <footer class="footer">
                            <ul class="list-inline">
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
                    {/* <!-- /.main-content --> */}
                </div>

                <div class="modal fade" id="boostrapModal-1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                            </div>
                            <div class="modal-body">
                                <div class="row small-spacing">
                                    <div class="col-md-3 col-xs-12">
                                        <div class="box-content bordered primary margin-bottom-20">
                                            <div class="profile-avatar">
                                                <img src="http://placehold.it/450x450" alt="" />
                                            </div>

                                        </div>
                                        {/* <!-- /.box-content bordered --> */}


                                        {/* <!-- /.box-content --> */}
                                    </div>
                                    {/* <!-- /.col-md-3 col-xs-12 --> */}
                                    <div class="col-md-9 col-xs-12">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="box-content card">
                                                    <h4 class="box-title"><i class="fa fa-user ico"></i>Details</h4>
                                                    {/* <!-- /.box-title --> */}

                                                    {/* <!-- /.dropdown js__dropdown --> */}
                                                    <div class="card-content">
                                                        <div class="row">
                                                            <table class="table">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Name:</td>
                                                                        <td>Tiger Nixon</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Number:</td>
                                                                        <td>0123456789</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Email:</td>
                                                                        <td>doctor@mail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>City:</td>
                                                                        <td>Lorem</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Address:</td>
                                                                        <td>Lorem, Ipsum</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Clinic Name:</td>
                                                                        <td>Lorem</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Total Patients</td>
                                                                        <td>20</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Onboarded Patients:</td>
                                                                        <td>10</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                            {/* <!-- /.col-md-6 --> */}
                                                        </div>
                                                        {/* <!-- /.row --> */}
                                                    </div>
                                                    {/* <!-- /.card-content --> */}

                                                </div>
                                                {/* <!-- /.box-content card --> */}
                                            </div>
                                        </div>
                                        {/* <!-- /.col-md-12 --> */}

                                    </div>
                                    {/* <!-- /.col-md-9 col-xs-12 --> */}
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default btn-sm waves-effect waves-light" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : "It seems like You don't have super admin rights!" : <Redirect to="/login" />
    )

}

export default ExistingUser;