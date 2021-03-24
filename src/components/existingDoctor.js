import React, { useState, useEffect, useMemo } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Header from './DataTable/Header';
import Search from './DataTable/Search';
import Pagination from './DataTable/Pagination';
import axiosInstance from './helpers/axios';
import { Button, Container } from 'react-bootstrap';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { isAuth, signout } from './helpers/auth';
import { Redirect } from 'react-router';
import { useTable } from 'react-table';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
var jwt = require('jsonwebtoken');

const ExistingDoctor = () => {
   
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [roll, setRoll] = useState("");
    const [pname, setpName] = useState('');
    const [pnnumber, setpNumber] = useState('');
    const [email, setpEmail] = useState("");
    const [ppicture, setpPicture] = useState("");
    const [tpatients, settPatients] = useState("");
    const [opatients, setoPatients] = useState("");
    const [pcity, setpCity] = useState("");
    const [tpaddress, settAddress] = useState("");
    const [pclinic, setpClinic] = useState("");
    const [paligner, settAligner] = useState("");

    const ITEMS_PER_PAGE = 10;

    const toggleModal = (record) => {
        setpName(record.name);setpNumber(record.number);
        setpEmail(record.email);setpPicture(record.picture);
        // settPatients(tpatients);setoPatients(tpatients);
        setpCity(record.city);settAddress(record.address);
        settAligner(record.alignerPrice);
        setpClinic(record.clinicname);
        setIsModalOpen(!isModalOpen);
    }

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

    useEffect(() => {
        const getData = () => {
            axiosInstance.get("doctor/read")
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

    console.log(JSON.parse(localStorage.getItem('name')));
    const headers = [
        { name: "Name", field: "name" },
        { name: "Number", field: "number" },
        { name: "Email", field: "email" },
        { name: "Total Patients", field: "total" },
        { name: "Onboarded Patients", field: "onboarded" },
        { name: "Action", field: "_id" }
    ]


    const usersData = useMemo(() => {
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
            return computedUsers.slice((currentPage - 1) * ITEMS_PER_PAGE,
                (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
        }


    }, [data, search, currentPage])

    return (
        isAuth() ? roll === "super admin" ?
            <div>
                <Modal isOpen={isModalOpen} fade={false} centered
                    style={{ display: "block" }}>
                    <ModalHeader toggle={toggleModal}>{pname}</ModalHeader>
                    <ModalBody>
                        <Container fluid>
                        </Container>
                        <div className="row small-spacing">
                            <div className="col-md-3 col-xs-12">
                                <div className="box-content bordered primary margin-bottom-20">
                                    <div className="profile-avatar">
                                        <img src={ppicture} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-xs-12">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="box-content card">
                                            <h4 className="box-title"><i className="fa fa-user ico"></i>Details</h4>
                                            <div className="card-content">
                                                <div className="row">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>Name:</td>
                                                                <td>{pname}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Number:</td>
                                                                <td>{pnnumber}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Email:</td>
                                                                <td>{email}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>City:</td>
                                                                <td>{pcity}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Address:</td>
                                                                <td>{tpaddress}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Clinic Name:</td>
                                                                <td>{pclinic}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Aligner Price:</td>
                                                                <td>{paligner}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total Patients</td>
                                                                <td>{tpatients}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Onboarded Patients:</td>
                                                                <td>{opatients}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '} */}
                        <Button variant="danger" onClick={toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <div className="main-menu">
                    <header className="header">
                        <a href="/" className="logo">
                            <img src="assets/images/tac-logo.png" alt="" />
                        </a>
                        <button type="button" className="button-close fa fa-times js__menu_close"></button>
                        <div className="user">
                            <a href="#" className="avatar"><img src={picture} alt="" /><span className="status online"></span></a>
                            <h5 className="name text-white">{name}</h5>
                            <h5 className="position">Super Admin</h5>
                        </div>
                    </header>
                    <div className="content">

                        <div className="navigation">
                            <h5 className="title">Navigation</h5>
                            <ul className="menu js__accordion">
                                <li>
                                    <a className="waves-effect parent-item js__control" href="#"><i className="menu-icon fa fa-flag"></i><span>User</span><span className="menu-arrow fa fa-angle-down"></span></a>
                                    <ul className="sub-menu js__content">
                                        <li><a href="/newUser"><h5>New</h5></a></li>
                                        <li><a href="/"><h5>Existing</h5></a></li>

                                    </ul>
                                </li>
                                <li className="current">
                                    <a className="waves-effect parent-item js__control" href="#"><i className="menu-icon fa fa-adjust"></i><span>Doctor</span>
                                        <span className="menu-arrow fa fa-angle-down"></span>
                                    </a>
                                    <ul className="sub-menu js__content">
                                        <li><a href="/newDoctor"><h5>New</h5></a></li>
                                        <li><a href="/ExistingDoctor"><h5>Existing</h5></a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu js__content --> */}
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
                        {/* <!-- /.navigation --> */}
                    </div>
                </div>

                <div className="fixed-navbar">
                    <div className="pull-left">
                        <button type="button" className="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"></button>
                        <h1 className="page-title">Registered Doctors</h1>
                    </div>
                    <div className="pull-right">
                        <a onClick={popup} className="ico-item fa fa-power-off"></a>
                    </div>
                </div>
                <div id="wrapper">
                    <div class="main-content">

                        <div className="row w-100">
                            <div className="col mb-3 col-12">
                            <div className="row">
                                    <div className="col-xs-6">
                                        <Pagination
                                            total={totalItems}
                                            itemsPerPage={ITEMS_PER_PAGE}
                                            currentPage={currentPage}
                                            onPageChange={page => setCurrentPage(page)} />
                                    </div>
                                    <div className="col-xs-6 mb-3 d-flex flex-row-reverse">
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
                                            <td style={{ fontSize: "15px" }}></td>
                                            <td style={{ fontSize: "15px" }}></td>
                                            <td>
                                                <Button variant="danger" style={{height:"30px",width:"50px"}} onClick={(e) => { toggleModal(record) }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>
                                                </Button>

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

            </div>
            : "It seems like You don't have super admin rights!" : <Redirect to="/login" />
    )
}

export default ExistingDoctor;