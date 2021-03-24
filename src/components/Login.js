import React, { useState } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import history from './helpers/history';
import axiosInstance from './helpers/axios';
import { authenticate, isAuth } from './helpers/auth';
import { Redirect } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    console.log(process.env.REACT_APP_SERVER_API)
    const handleSubmit = () => {
        if (email && password) {
            axiosInstance.post("admin/login", {
                email, password
            })
                .then(res => {
                    console.log(res.data)
                    authenticate(res, () => {
                        store.addNotification({
                            title: `${email},welcome back!`,
                            message: 'Now you have privileges to explore!',
                            type: "success",
                            container: 'top-right',
                            animationIn: ["animated", "fadeIn"],
                            animationOut: ["animated", "fadeOut"],
                            dismiss: {
                                duration: 3000,
                                showIcon: true
                            }
                        })
                        history.push('/');
                        window.location.reload(false);

                    });
                })
                .catch(err => {
                    console.log(err)
                    store.addNotification({
                        title: `${err.response.data.error}`,
                        message: 'Please Register yourself!',
                        type: "danger",
                        container: 'top-right',
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 3000,
                            showIcon: true
                        }
                    })
                    console.log(err.response);
                    window.location.reload(false);
                });
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
        isAuth() ?<Redirect to="/" />:
        <div id="single-wrapper">
            <LocalForm class="frm-single">
                <div class="inside">
                    <div class="title"><img src="assets/images/tac-logo.png" alt="" /></div>
                    {/* <!-- /.title --> */}
                    <div class="frm-title margin-top-20"><strong>Super Admin Login</strong></div>
                    {/* <!-- /.frm-title --> */}
                    <div class="frm-input">
                        <input type="text"
                            placeholder="email"
                            class="frm-inp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i class="fa fa-user frm-ico"></i></div>
                    {/* <!-- /.frm-input --> */}
                    <div class="frm-input">
                        <input type="password"
                            placeholder="Password"
                            class="frm-inp"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i class="fa fa-lock frm-ico"></i></div>
                    {/* <!-- /.frm-input --> */}
                    <div class="clearfix margin-bottom-20">
                        <div class="pull-right"><a href="/reset" class="a-link"><i class="fa fa-unlock-alt"></i>Forgot password?</a></div>
                        {/* <!-- /.pull-right --> */}
                    </div>
                    {/* <!-- /.clearfix --> */}
                    <button type="submit" onClick={handleSubmit} class="frm-submit">Login<i class="fa fa-arrow-circle-right"></i></button>

                    {/* <!-- /.footer --> */}
                </div>
                {/* <!-- .inside --> */}
            </LocalForm>
            {/* <!-- /.frm-single --> */}
        </div>
    );
}

export default Login;