import React, { useState, useEffect } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import history from './helpers/history';
import axiosInstance from './helpers/axios';
import { authenticate, isAuth } from './helpers/auth';

const Change = ({ match }) => {
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        let token = match.params.token
        if (token) {
            setToken(token)
        }
    }, [])

    const handleSubmit = () => {
        if (password1 && password2) {
            if (password1 === password2) {
                axiosInstance
                    .post("admin/reset", {
                        password: password1,
                        token: token
                    })
                    .then(res => {
                        console.log(res.data.message)
                        store.addNotification({
                            title: `${res.data.message}`,
                            message: 'Now you can login with your new password.',
                            type: "success",
                            container: 'top-right',
                            animationIn: ["animated", "fadeIn"],
                            animationOut: ["animated", "fadeOut"],
                            dismiss: {
                                duration: 3000,
                                showIcon: true
                            }
                        })
                        history.push('/login');
                        window.location.reload(false);
                    })
                    .catch(err => {
                        store.addNotification({
                            title: `${err.response.data.error}`,
                            message: 'Try again.',
                            type: "success",
                            container: 'top-right',
                            animationIn: ["animated", "fadeIn"],
                            animationOut: ["animated", "fadeOut"],
                            dismiss: {
                                duration: 3000,
                                showIcon: true
                            }
                        })
                        history.push('/login');
                        window.location.reload(false);
                    });
            } else {
                store.addNotification({
                    title: "passwords are not matching!",
                    message: 'Try again with ideantical passwords.',
                    type: "danger",
                    container: 'top-right',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000,
                        showIcon: true
                    }
                })
            }
        } else {
            store.addNotification({
                title: "Insufficient credentials are provided!",
                message: 'All fields are necessary',
                type: "warning",
                container: 'top-right',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    showIcon: true
                }
            })
            window.location.reload(false);
        }
    }

    return (
        <div id="single-wrapper">
            <LocalForm class="frm-single">
                <div class="inside">
                    <div class="title"><img src="assets/images/tac-logo.png" alt="" /></div>
                    {/* <!-- /.title --> */}
                    <div class="frm-title margin-top-20"><strong>Update Password.</strong></div>
                    {/* <!-- /.frm-title --> */}
                    {/* <div class="frm-input">
                        <input type="text"
                            placeholder="email"
                            class="frm-inp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i class="fa fa-user frm-ico"></i></div> */}
                    {/* <!-- /.frm-input --> */}
                    <div class="frm-input">
                        <input type="password"
                            placeholder="Enter new Password"
                            class="frm-inp"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                        />
                        <i class="fa fa-lock frm-ico"></i></div>
                    <div class="frm-input">
                        <input type="password"
                            placeholder="Confirm Password"
                            class="frm-inp"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                        <i class="fa fa-lock frm-ico"></i></div>
                   
                    {/* <!-- /.clearfix --> */}
                    <button type="submit" onClick={handleSubmit} class="frm-submit">Update<i class="fa fa-arrow-circle-right"></i></button>

                    {/* <!-- /.footer --> */}
                </div>
                {/* <!-- .inside --> */}
            </LocalForm>
            {/* <!-- /.frm-single --> */}
        </div>
    );
}

export default Change;