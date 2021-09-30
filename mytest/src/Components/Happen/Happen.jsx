import React from 'react'

export default function Happen() {
    return (
        <div>
            <div className="container text-center">
                <h2 className="pt-5" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>what happened </h2>
                <b>How to create mobile-optimized videos in minutes. Not a designer, <br />
                    every team makes a lot of videos Can be trimmed. Take the first </b><br />
                    <button style={{ border: 'solid 5px black', padding: '15px', fontSize: '1.5rem', background: 'white' }} className="mt-5">SEE MORE</button>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <img style={{width:'100%',objectFit:'cover'}} src="./img/video-object-04.png" alt="" />
                </div>
                <div className="col-md-6 col-sm-12 pt-3">
                    <img style={{width:'100%',objectFit:'cover'}} src="./img/video.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-12 mt-auto">
                    <img  style={{width:'100%',objectFit:'cover'}} src="./img/video-object-08.png" alt="" />
                </div>
            </div>
        </div>
    )
}
