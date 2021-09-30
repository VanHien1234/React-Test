import React, { Fragment } from 'react'
import BestProduct from '../Components/BestProduct/BestProduct'
import BrandStory from '../Components/BrandStory/BrandStory'
import Happen from '../Components/Happen/Happen'
import MainBanner from '../Components/Main-Banner/MainBanner'
import ProductList from '../Components/ProductList/ProductList'

export default function Home() {
    return (
        <Fragment>
            <MainBanner/>
            <BestProduct/>
            <ProductList/>
            <BrandStory/>
            <Happen/>
        </Fragment>
    )
}
