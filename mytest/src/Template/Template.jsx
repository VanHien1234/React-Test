import React from 'react'
import { Route } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './Header/Header'
import Footer  from './Footer/Footer';


export const Template =(props) =>{
    const {Component,...restProps} =props;

    return <Route {...restProps} render={(propsRoute)=>{

        return <Fragment>
            
            <Header/>

            <Component {...propsRoute}/>

            <Footer/>
            

        </Fragment>

    }}/>
}

