import React, { Fragment } from 'react'
import './2dot4col.css'
import DATA from './Product.json'
export default function ProductList() {





    const RenderProduct = () => {
        return DATA.map((product,index)=>{
            return <div style={{border:'none'}} className="card col-sm-2dot4 px-2 "key={index} >
            <img className="card-img-top" src={product.img} alt="Card image cap" />
            <div className="card-body">
            <b className="card-text"> [what happen] How to create </b>
                    <div  className="row mt-3">
                        
                        <b className="GO col-7   ">2,500 won</b>
                        
                        <b className="GO col-5   "><i style={{color:'red'}} class="fas fa-heart"> </i>236</b>
                    </div>
                </div>
        </div>
        })
        

    }

    return (
        <Fragment>
        <div className="container mt-5 text-center">
            <div className="row">
                {RenderProduct()}
                
            </div>

            <button style={{border:'solid 5px black', padding:'15px',fontSize:'1.5rem',background:'white'}} className="mt-4">SEE MORE</button>

        </div>
        </Fragment>
    )
}
