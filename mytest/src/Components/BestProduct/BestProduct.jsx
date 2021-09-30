import React from 'react'
import './BestProduct.scss'
export default function BestProduct() {


        var arrimg=[
            {id:0,img:"./img/best-image-01_2021-09-30/best-image-01.png",icon:"./img/producticon-01_2021-09-30/producticon-01.png"},
            {id:1,img:"./img/best-image-02_2021-09-30/best-image-02.png",icon:"./img/producticon-02_2021-09-30/producticon-02.png"},
            {id:2,img:"./img/best-image-03_2021-09-30/best-image-03.png",icon:"./img/producticon-03_2021-09-30/producticon-03.png"}
        ]
    


    const renderProduct = () => {
        return arrimg.map((product,index)=>{
            return <div className="product-card col-md-4 col-12" key={index}>
                <img className="card-img" src={product.img} alt="Card image cap" />
                <span className="icon-img"> <img src={product.icon} alt="" /></span>
                <div className="card-body">
                    <div style={{textAlign:'center'}} className="row">
                        <p className="card-text col-9">How to create
                            mobile-optimized {product.id}</p>
                        <p className="GO col-3 text-center pt-3 ">GO</p>
                    </div>
                </div>

            

        </div>

        })
        
    }

    return (
        <div>
            <div className="bestProduct">
                <div className="container text-center pt-3">
                    <h2 className="pt-5">BEST PRODUCT</h2>
                    <p className="mt-3"> How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first </p>
                    <div className="product-area">
                        <div className="row">
                        {renderProduct()}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
