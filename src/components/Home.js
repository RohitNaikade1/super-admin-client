import React from 'react';
import history from './helpers/history';
import {  isAuth,signout } from './helpers/auth';
import { Redirect } from 'react-router';

const Home = () => {
    return (
        isAuth() ? 
        <div>
            <div class="main-menu">
                <header class="header">
                    <a href="/" class="logo">
                        <img src="assets/images/tac-logo.png" alt="" />
                    </a>
                    <button type="button" class="button-close fa fa-times js__menu_close"></button>
                    <div class="user">
                        <a href="#" class="avatar"><img src="http://placehold.it/80x80" alt="" /><span class="status online"></span></a>
                        <h5 class="name"><a href="/profile">Emily Stanley</a></h5>
                        <h5 class="position">Administrator</h5>
                        {/* <!-- /.name --> */}
                        <div class="control-wrap js__drop_down">
                            <i class="fa fa-caret-down js__drop_down_button"></i>
                            <div class="control-list">
                                <div class="control-item"><a href="profile.html"><i class="fa fa-user"></i> Profile</a></div>
                                <div class="control-item"><a href="#"><i class="fa fa-gear"></i> Settings</a></div>
                                {isAuth()
                                    ? <div class="control-item"><a onClick={signout}><i class="fa fa-sign-out"></i> Log out</a></div>
                                    : <div class="control-item"><a href="/login"><i class="fa fa-sign-in"></i> Login</a></div>}
                            </div>
                            {/* <!-- /.control-list --> */}
                        </div>
                        {/* <!-- /.control-wrap --> */}
                    </div>
                    {/* <!-- /.user --> */}
                </header>
                {/* <!-- /.header --> */}
                <div class="content">

                    <div class="navigation">
                        <h5 class="title">Navigation</h5>
                        {/* <!-- /.title --> */}
                        <ul class="menu js__accordion">
                            <li class="current">
                                <a class="waves-effect" href="/"><i class="menu-icon fa fa-home"></i><span>Dashboard</span></a>
                            </li>
                            <li>
                                <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-flag"></i><span>User</span><span class="menu-arrow fa fa-angle-down"></span></a>
                                <ul class="sub-menu js__content">
                                    <li><a href="/newUser">New</a></li>
                                    <li><a href="/existingUser">Existing</a></li>

                                </ul>
                                {/* <!-- /.sub-menu js__content --> */}
                            </li>
                            <li>
                                <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-adjust"></i><span>Doctor</span>
                                    <span class="menu-arrow fa fa-angle-down"></span>
                                </a>
                                <ul class="sub-menu js__content">
                                    <li><a href="/newDoctor">New</a></li>
                                    <li><a href="/existingDoctor">Existing</a></li>
                                </ul>
                                {/* <!-- /.sub-menu js__content --> */}
                            </li>
                            <li>
                                <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Office Admin</span>
                                    {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                                </a>
                                {/* <!-- <ul class="sub-menu js__content"> */}
                                {/* <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                                {/* <!-- /.sub-menu js__content --> */}
                            </li>
                            <li>
                                <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Accountant</span>
                                    {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                                </a>
                                {/* <!-- <ul class="sub-menu js__content"> */}
                                {/* <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                                {/* <!-- /.sub-menu js__content --> */}
                            </li>
                            <li>
                                <a href="#"><i class="menu-icon fa fa-adjust"></i><span>CAD</span>
                                    {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                                </a>
                                {/* <!-- <ul class="sub-menu js__content"> */}
                                {/* <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                                {/* <!-- /.sub-menu js__content --> */}
                            </li>
                            <li>
                                <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Planner</span>
                                    {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                                </a>
                                {/* <!-- <ul class="sub-menu js__content"> */}
                                {/* <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                                {/* <!-- /.sub-menu js__content --> */}
                            </li>
                            <li>
                                <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Dentist</span>
                                    {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                                </a>
                                {/* <!-- <ul class="sub-menu js__content"> */}
                                {/* <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                                {/* <!-- /.sub-menu js__content --> */}
                            </li>
                        </ul>

                    </div>
                    {/* <!-- /.navigation --> */}
                </div>
                {/* <!-- /.content --> */}
            </div>
            {/* <!-- /.main-menu --> */}

            <div class="fixed-navbar">
                <div class="pull-left">
                    <button type="button" class="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"></button>
                    <h1 class="page-title">Home</h1>
                    {/* <!-- /.page-title --> */}
                </div>
                {/* <!-- /.pull-left --> */}
                <div class="pull-right">
                    <div class="ico-item">
                        <a href="#" class="ico-item fa fa-search js__toggle_open" data-target="#searchform-header"></a>
                        <form action="#" id="searchform-header" class="searchform js__toggle"><input type="search" placeholder="Search..." class="input-search" /><button class="fa fa-search button-search" type="submit"></button></form>
                        {/* <!-- /.searchform --> */}
                    </div>
                    {/* <!-- /.ico-item --> */}
                    <div class="ico-item fa fa-arrows-alt js__full_screen"></div>
                    {/* <!-- /.ico-item fa fa-fa-arrows-alt --> */}
                    <div class="ico-item toggle-hover js__drop_down ">
                        <span class="fa fa-th js__drop_down_button"></span>
                        <div class="toggle-content">
                            <ul>
                                <li><a href="#"><i class="fa fa-github"></i><span class="txt">Github</span></a></li>
                                <li><a href="#"><i class="fa fa-bitbucket"></i><span class="txt">Bitbucket</span></a></li>
                                <li><a href="#"><i class="fa fa-slack"></i><span class="txt">Slack</span></a></li>
                                <li><a href="#"><i class="fa fa-dribbble"></i><span class="txt">Dribbble</span></a></li>
                                <li><a href="#"><i class="fa fa-amazon"></i><span class="txt">Amazon</span></a></li>
                                <li><a href="#"><i class="fa fa-dropbox"></i><span class="txt">Dropbox</span></a></li>
                            </ul>
                            <a href="#" class="read-more">More</a>
                        </div>
                        {/* <!-- /.toggle-content --> */}
                    </div>
                    {/* <!-- /.ico-item --> */}
                    <a href="#" class="ico-item fa fa-envelope notice-alarm js__toggle_open" data-target="#message-popup"></a>
                    <a href="#" class="ico-item pulse"><span class="ico-item fa fa-bell notice-alarm js__toggle_open" data-target="#notification-popup"></span></a>
                    {/* <a href="#" onClick={signout} class="ico-item fa fa-power-off js__logout"></a> */}
                </div>
                {/* <!-- /.pull-right --> */}
            </div>
            {/* <!-- /.fixed-navbar --> */}

            <div id="notification-popup" class="notice-popup js__toggle" data-space="75">
                <h2 class="popup-title">Your Notifications</h2>
                {/* <!-- /.popup-title --> */}
                <div class="content">
                    <ul class="notice-list">
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                                <span class="name">John Doe</span>
                                <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                                <span class="time">10 min</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                                <span class="name">Anna William</span>
                                <span class="desc">Like your post: “Facebook Messenger”</span>
                                <span class="time">15 min</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar bg-warning"><i class="fa fa-warning"></i></span>
                                <span class="name">Update Status</span>
                                <span class="desc">Failed to get available update data. To ensure the please contact us.</span>
                                <span class="time">30 min</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                                <span class="name">Jennifer</span>
                                <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                                <span class="time">45 min</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                                <span class="name">Michael Zenaty</span>
                                <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                                <span class="time">50 min</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                                <span class="name">Simon</span>
                                <span class="desc">Like your post: “Facebook Messenger”</span>
                                <span class="time">1 hour</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar bg-violet"><i class="fa fa-flag"></i></span>
                                <span class="name">Account Contact Change</span>
                                <span class="desc">A contact detail associated with your account has been changed.</span>
                                <span class="time">2 hours</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                                <span class="name">Helen 987</span>
                                <span class="desc">Like your post: “Facebook Messenger”</span>
                                <span class="time">Yesterday</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                                <span class="name">Denise Jenny</span>
                                <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                                <span class="time">Oct, 28</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                                <span class="name">Thomas William</span>
                                <span class="desc">Like your post: “Facebook Messenger”</span>
                                <span class="time">Oct, 27</span>
                            </a>
                        </li>
                    </ul>
                    {/* <!-- /.notice-list --> */}
                    <a href="#" class="notice-read-more">See more messages <i class="fa fa-angle-down"></i></a>
                </div>
                {/* <!-- /.content --> */}
            </div>
            {/* <!-- /#notification-popup --> */}

            <div id="message-popup" class="notice-popup js__toggle" data-space="75">
                <h2 class="popup-title">Recent Messages<a href="#" class="pull-right text-danger">New message</a></h2>
                {/* <!-- /.popup-title --> */}
                <div class="content">
                    <ul class="notice-list">
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                                <span class="name">John Doe</span>
                                <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                                <span class="time">10 min</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                                <span class="name">Harry Halen</span>
                                <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                                <span class="time">15 min</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                                <span class="name">Thomas Taylor</span>
                                <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                                <span class="time">30 min</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                                <span class="name">Jennifer</span>
                                <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                                <span class="time">45 min</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                                <span class="name">Helen Candy</span>
                                <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                                <span class="time">45 min</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                                <span class="name">Anna Cavan</span>
                                <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                                <span class="time">1 hour ago</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar bg-success"><i class="fa fa-user"></i></span>
                                <span class="name">Jenny Betty</span>
                                <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                                <span class="time">1 day ago</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                                <span class="name">Denise Peterson</span>
                                <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                                <span class="time">1 year ago</span>
                            </a>
                        </li>
                    </ul>
                    {/* <!-- /.notice-list --> */}
                    <a href="#" class="notice-read-more">See more messages <i class="fa fa-angle-down"></i></a>
                </div>
                {/* <!-- /.content --> */}
            </div>
            {/* <!-- /#message-popup --> */}
            <div id="wrapper">
                <div class="main-content">
                    <div class="row small-spacing">
                        <div class="col-xs-12">
                            <div class="box-content">
                                <h4 class="box-title">Activity</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div id="smil-animation-index-chartist-chart" class="chartist-chart" style={{ height: "320px" }}></div>
                                {/* <!-- /#smil-animation-chartist-chart.chartist-chart --> */}
                            </div>
                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-xs-12 --> */}
                        <div class="col-lg-3 col-md-6 col-xs-12">
                            <div class="box-content">
                                <h4 class="box-title">Projects</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="content widget-stat">
                                    <div class="percent bg-warning"><i class="fa fa-line-chart"></i>53%</div>
                                    {/* <!-- /.percent --> */}
                                    <div class="right-content">
                                        <h2 class="counter">837</h2>
                                        {/* <!-- /.counter --> */}
                                        <p class="text">Projects</p>
                                        {/* <!-- /.text --> */}
                                    </div>
                                    {/* <!-- /.right-content --> */}
                                    <div class="clear"></div>
                                    {/* <!-- /.clear --> */}
                                    <div class="process-bar">
                                        <div class="bar-bg bg-warning"></div>
                                        <div class="bar js__width bg-warning" data-width="70%"></div>
                                        {/* <!-- /.bar js__width bg-success --> */}
                                    </div>
                                    {/* <!-- /.process-bar --> */}
                                </div>
                                {/* <!-- /.content widget-stat --> */}
                            </div>
                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                        <div class="col-lg-3 col-md-6 col-xs-12">
                            <div class="box-content">
                                <h4 class="box-title">Memory usage</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="content widget-stat-chart">
                                    <div class="c100 p76 small blue js__circle">
                                        <span>76%</span>
                                        <div class="slice">
                                            <div class="bar"></div>
                                            <div class="fill"></div>
                                        </div>
                                    </div>
                                    {/* <!-- /.c100 p58 --> */}
                                    <div class="right-content">
                                        <h2 class="counter">804</h2>
                                        {/* <!-- /.counter --> */}
                                        <p class="text">Disk usage</p>
                                        {/* <!-- /.text --> */}
                                    </div>
                                    {/* <!-- /.right-content --> */}
                                </div>
                                {/* <!-- /.content --> */}
                            </div>
                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                        <div class="col-lg-3 col-md-6 col-xs-12">
                            <div class="box-content">
                                <h4 class="box-title">Visitor Analytics</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="content widget-stat">
                                    <div class="percent bg-danger"><i class="fa fa-line-chart"></i>+40%</div>
                                    {/* <!-- /.percent --> */}
                                    <div class="right-content">
                                        <h2 class="counter">976</h2>
                                        {/* <!-- /.counter --> */}
                                        <p class="text">Visitors today</p>
                                        {/* <!-- /.text --> */}
                                    </div>
                                    {/* <!-- /.right-content --> */}
                                    <div class="clear"></div>
                                    {/* <!-- /.clear --> */}
                                    <div class="process-bar">
                                        <div class="bar-bg bg-danger"></div>
                                        <div class="bar js__width bg-danger" data-width="70%"></div>
                                        {/* <!-- /.bar js__width bg-success --> */}
                                    </div>
                                    {/* <!-- /.process-bar --> */}
                                </div>
                                {/* <!-- /.content widget-stat --> */}
                            </div>
                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                        <div class="col-lg-3 col-md-6 col-xs-12">
                            <div class="box-content">
                                <h4 class="box-title">Monthly Sales</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="content widget-stat-chart">
                                    <div class="c100 p94 small green js__circle">
                                        <span>94%</span>
                                        <div class="slice">
                                            <div class="bar"></div>
                                            <div class="fill"></div>
                                        </div>
                                    </div>
                                    {/* <!-- /.c100 p58 --> */}
                                    <div class="right-content">
                                        <h2 class="counter">3922</h2>
                                        {/* <!-- /.counter --> */}
                                        <p class="text">Sales</p>
                                        {/* <!-- /.text --> */}
                                    </div>
                                    {/* <!-- /.right-content --> */}
                                </div>
                                {/* <!-- /.content --> */}
                            </div>
                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}

                        <div class="col-lg-4 col-xs-12">
                            <div class="box-content">
                                <h4 class="box-title">Statistics</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="content">
                                    <div id="chart-2" class="js__chart" data-type="column" data-chart="'Year'/'Statistics' | '2010'/75 | '2011'/42 | '2012'/75 | '2013'/38 | '2014'/19 | '2015'/93 "></div>
                                </div>
                                {/* <!-- /.content --> */}
                            </div>
                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-lg-4 col-md-12 --> */}

                        <div class="col-lg-4 col-xs-12">
                            <div class="box-content">
                                <h4 class="box-title">Total Projects</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="content">
                                    <div id="chart-3" class="js__chart" data-type="curve" data-chart="'Year'/'Desktop'/'Mobile' | '2008'/53/0 | '2009'/35/73 | '2010'/89/14 | '2011'/50/50 | '2012'/86/37 | '2013'/47/89 | '2014'/75/50 | '2015'/100/70 "></div>
                                </div>
                                {/* <!-- /.content --> */}
                            </div>
                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-lg-4 col-md-12 --> */}

                        <div class="col-lg-4 col-xs-12">
                            <div class="box-content">
                                <h4 class="box-title">Daily Sales</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="content">
                                    <div id="chart-1" class="js__chart" data-type="donut" data-chart="'Type'/'Number' | 'Normal Sales'/50 | 'In-Site Sales'/20 | 'Mail-Order Sales'/20"></div>
                                </div>
                                {/* <!-- /.content --> */}
                            </div>
                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-lg-4 col-xs-12 --> */}

                        <div class="col-lg-3 col-md-6 col-xs-12">
                            <div class="box-content user-info">
                                <div class="avatar"><img src="http://placehold.it/128x128" alt="" /></div>
                                {/* <!-- /.avatar --> */}
                                <div class="right-content">
                                    <h4 class="name">Betty Simmons</h4>
                                    {/* <!-- /.name --> */}
                                    <p><a href="mailto:hello@ninjateam.org">hello@ninjateam.org</a></p>
                                    <div class="text-warning small">Manager</div>
                                    {/* <!-- /.text-warning --> */}
                                </div>
                                {/* <!-- /.right-content --> */}
                            </div>
                            {/* <!-- /.user-info --> */}
                        </div>
                        {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                        <div class="col-lg-3 col-md-6 col-xs-12">
                            <div class="box-content user-info">
                                <div class="avatar"><img src="http://placehold.it/128x128" alt="" /></div>
                                {/* <!-- /.avatar --> */}
                                <div class="right-content">
                                    <h4 class="name">Michael Zenaty</h4>
                                    {/* <!-- /.name --> */}
                                    <p><a href="mailto:hello@ninjateam.org">hello@ninjateam.org</a></p>
                                    <div class="text-custom small">Support</div>
                                    {/* <!-- /.text-custom --> */}
                                </div>
                                {/* <!-- /.right-content --> */}
                            </div>
                            {/* <!-- /.user-info --> */}
                        </div>
                        {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                        <div class="col-lg-3 col-md-6 col-xs-12">
                            <div class="box-content user-info">
                                <div class="avatar"><img src="http://placehold.it/128x128" alt="" /></div>
                                {/* <!-- /.avatar --> */}
                                <div class="right-content">
                                    <h4 class="name">Denise Peterson</h4>
                                    {/* <!-- /.name --> */}
                                    <p><a href="mailto:hello@ninjateam.org">hello@ninjateam.org</a></p>
                                    <div class="text-success small">Designer</div>
                                    {/* <!-- /.text-warning --> */}
                                </div>
                                {/* <!-- /.right-content --> */}
                            </div>
                            {/* <!-- /.user-info --> */}
                        </div>
                        {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                        <div class="col-lg-3 col-md-6 col-xs-12">
                            <div class="box-content user-info">
                                <div class="avatar"><img src="http://placehold.it/128x128" alt="" /></div>
                                {/* <!-- /.avatar --> */}
                                <div class="right-content">
                                    <h4 class="name">Pamela Wood</h4>
                                    {/* <!-- /.name --> */}
                                    <p><a href="mailto:hello@ninjateam.org">hello@ninjateam.org</a></p>
                                    <div class="text-danger small">Developer</div>
                                    {/* <!-- /.text-custom --> */}
                                </div>
                                {/* <!-- /.right-content --> */}
                            </div>
                            {/* <!-- /.user-info --> */}
                        </div>
                        {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                        <div class="col-lg-6 col-xs-12">
                            <div class="box-content">
                                <div id="calendar-widget"></div>
                            </div>
                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-lg-6 col-xs-12 --> */}
                        <div class="col-lg-6 col-xs-12">
                            <div class="box-content">
                                <h4 class="box-title">Purchases</h4>
                                {/* <!-- /.box-title --> */}
                                <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Product</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                    {/* <!-- /.sub-menu --> */}
                                </div>
                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="table-responsive table-purchases">
                                    <table class="table table-striped margin-bottom-10">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "40%" }}>Product</th>
                                                <th>Price</th>
                                                <th>Date</th>
                                                <th>State</th>
                                                <th style={{ width: "5%" }}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Amaza Themes</td>
                                                <td>$71</td>
                                                <td>Nov 12,2016</td>
                                                <td class="text-success">Completed</td>
                                                <td><a href="#"><i class="fa fa-plus-circle"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Macbook</td>
                                                <td>$142</td>
                                                <td>Nov 10,2016</td>
                                                <td class="text-danger">Cancelled</td>
                                                <td><a href="#"><i class="fa fa-plus-circle"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Samsung TV</td>
                                                <td>$200</td>
                                                <td>Nov 01,2016</td>
                                                <td class="text-warning">Pending</td>
                                                <td><a href="#"><i class="fa fa-plus-circle"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Ninja Admin</td>
                                                <td>$200</td>
                                                <td>Oct 28,2016</td>
                                                <td class="text-warning">Pending</td>
                                                <td><a href="#"><i class="fa fa-plus-circle"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Galaxy Note 5</td>
                                                <td>$200</td>
                                                <td>Oct 28,2016</td>
                                                <td class="text-success">Completed</td>
                                                <td><a href="#"><i class="fa fa-plus-circle"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>CleanUp Themes</td>
                                                <td>$71</td>
                                                <td>Oct 22,2016</td>
                                                <td class="text-success">Completed</td>
                                                <td><a href="#"><i class="fa fa-plus-circle"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Facebook WP Plugin</td>
                                                <td>$10</td>
                                                <td>Oct 15,2016</td>
                                                <td class="text-success">Completed</td>
                                                <td><a href="#"><i class="fa fa-plus-circle"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Iphone 7</td>
                                                <td>$100</td>
                                                <td>Oct 12,2016</td>
                                                <td class="text-warning">Pending</td>
                                                <td><a href="#"><i class="fa fa-plus-circle"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Nova House</td>
                                                <td>$100</td>
                                                <td>Oct 12,2016</td>
                                                <td class="text-warning">Pending</td>
                                                <td><a href="#"><i class="fa fa-plus-circle"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Repair Cars</td>
                                                <td>$35</td>
                                                <td>Oct 12,2016</td>
                                                <td class="text-warning">Pending</td>
                                                <td><a href="#"><i class="fa fa-plus-circle"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <!-- /.table --> */}
                                </div>
                                {/* <!-- /.table-responsive --> */}
                            </div>
                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-lg-6 col-xs-12 --> */}
                    </div>
                    {/* <!-- /.row --> */}
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
        : <Redirect to="/login" />
    )

}

export default Home;