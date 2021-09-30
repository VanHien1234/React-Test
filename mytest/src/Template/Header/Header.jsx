import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

export default function Header(props) {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-md  sticky-top">
                <div className="container-fluid">
                    <a className="navbar-branch" href="#">
                        <h2>What Happened</h2>
                    </a>
                    <button style={{background:'white'}} className="navbar-toggler navbar-light "  type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span   className=" navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className="nav-item">
                                <a className="nav-link mr-4 active" href="#">Introduction</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-4" href="#">solution</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-4" href="#">Rate plan</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-4" href="#">login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mr-4" href="#">Apply for free use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </Fragment>
    )
}
