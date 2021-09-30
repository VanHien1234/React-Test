import React, { Fragment } from 'react'

export default function BrandStory() {
    return (
        <Fragment>
            <div style={{ background: '#0565bb' }}>
                <div className="container pb-5">
                    <h2 style={{ color: '#fcd32a' }} className="mt-5 pt-5 text-center">Brand Story</h2>
                    <p style={{ color: '#fcd32a' }} className="mt-3 text-center">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>

                    <div style={{ paddingRight: 0, paddingLeft: 0 }} className="row pt-3 pb-5">
                        <div className="col-md-6 col-sm-12 ">
                            <img style={{ objectFit: 'fill', width: "100%" }} src="./img/img_2021-09-30/img.png" alt="" />
                        </div>
                        <div style={{ border: 'solid 4px black', background: 'white' }} className="col-md-6 col-sm-12 ">
                            <h3 className="pt-5">What Happened’s Brand story</h3>
                            <p className="mt-4">청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                                봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                                긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                                인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                                아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. </p>

                            <button style={{ border: 'solid 5px black', padding: '15px', fontSize: '1.5rem', background: 'white' }} className="mt-1">SEE MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="issue text-center pb-5" style={{ background: '#fccb05' }}>
                <h2 className=" pt-5 "> Happened’s issue</h2>
                <p className="mt-4 ">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 <br />
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                    <button style={{ border: 'solid 5px black', padding: '15px', fontSize: '1.5rem',background:'#fccb05' }} className="mt-3 pd-5">SEE MORE</button>
            </div>
            <div style={{width:'100%'}} className="whpnissue">
                <div  className="row">
                    <div style={{paddingLeft:0 ,paddingRight:0 ,background:'#ff5500'}} className="col-12 col-md text-center ">
                        <h2 style={{fontWeight:'bold'}} className="pt-5 pb-3">whpnissue</h2>
                        <img src="./img/news-img-01.png" alt="" />
                        </div>
                    <div style={{paddingLeft:0 ,paddingRight:0}} className="col-12 col-md">
                        <div className="head text-center"><h2 style={{background:'black',color:'white'}}>Brand</h2></div>
                        <img style={{objectFit:'cover',width:'100%',height:'322px'}} src="./img/video-object-08.png" alt="" />    
                    </div>  
                    <div style={{paddingLeft:0 ,paddingRight:0}} className="col-12 col-md">
                        <div className="head text-center"><h2 style={{background:'black',color:'white'}}>Brand</h2></div>
                        <img style={{objectFit:'cover',width:'100%'}} src="./img/news-img-03.png" alt="" />    
                    </div>  
                    <div style={{paddingLeft:0 ,paddingRight:0}} className="col-12 col-md">
                        <div className="head text-center"><h2 style={{background:'#ff5500',color:'white'}}>E Brand</h2></div>
                        <img style={{objectFit:'cover',width:'100%'}} src="./img/news-img-04.png" alt="" />    
                    </div>  
                    <div style={{paddingLeft:0 ,paddingRight:0}} className="col-12 col-md">
                        <div className="head text-center"><h2 style={{background:'black',color:'white'}}>D Brand</h2></div>
                        <img style={{objectFit:'cover',width:'100%'}} src="./img/news-img-05.png" alt="" />    
                    </div>  
                </div>
            </div>
        </Fragment>
    )
}
