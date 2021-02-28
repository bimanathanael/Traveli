import benefit1ID from '../../assets/images/benefit1ID.png';
import benefit2ID from '../../assets/images/benefit2ID.png';
import benefit3ID from '../../assets/images/benefit3ID.png';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


export const Benefits = () => {
    const [mobileView, setMobileView] = useState(window.innerWidth)
     
    useEffect(()=> {
        function handleResize() {
            setMobileView(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    },[])


    return (
        <>
            <div className="container-benefits">
                <div className="row mb-5">
                    <div className="col text-center">
                        <p className="headingBenefit">
                            MENGAPA TRAVELI?
                        </p>
                    </div>
                    <div className="col-md-3 offset-md-5">
                        <button className="btnArrow prev"> <ArrowBackIcon/> </button>
                        <button className="btnArrow next ml-4"> <ArrowForwardIcon/>  </button>
                    </div>
                </div>
                <div className="row cardSlider">
                    <div className="col-md-12 cardSliderRoom">
                        <div className="grid-container">
                            <main className="grid-item main">
                                <div className="items">
                                    <div className="item item0">
                                    </div>
                                    <div className="item item1">
                                        <img className="img-fluid" src={benefit1ID} alt="Carousel 1"/>
                                    </div>
                                    <div className="item item2">
                                        <img className="img-fluid" src={benefit2ID} alt="Carousel 1"/>
                                    </div>
                                    <div className="item item3">
                                        <img className="img-fluid" src={benefit3ID} alt="Carousel 1"/>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-3 offset-md-1">
                        <button type="button" className="btn btn-traveli btn-v2">
                            <div className="row">
                            <div className="col-3 ml-0">
                                <a className="arrow"> <ArrowForwardIosOutlinedIcon/> </a> 
                            </div>
                            <div className="col btn-font">
                                See How it Works
                            </div>
                            </div>
                        </button>
                    </div>
                    <div className="col-md-3 offset-md-1 pt-3 pl-7">
                       <img className="radioEmpty rad1"/>
                       <img className="radioEmpty rad2"/>
                       <img className="radioEmpty rad3"/>
                       <img className="radioEmpty rad4"/>
                    </div>
                </div> */}

                {/* <section className="container p-t-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 >Key Benefits</h3>
                        </div>
                    </div>
                </section>
                <section className="carousel slide m-auto" data-ride="carousel" id="postsCarousel">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 text-md-right lead">
                                <a className="btn btn-outline-secondary prev" href="" title="go back"><i className="fa fa-lg fa-chevron-left"></i></a>
                                <a className="btn btn-outline-secondary next" href="" title="more"><i className="fa fa-lg fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    {
                        mobileView <= 560 ? 
                        
                    <div className="container p-t-0 m-t-2 carousel-inner carousel-mobile">
                        <div className="row row-equal carousel-item active m-t-0">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-img-top card-img-top-250">
                                        <img className="img-fluid" src={contoh} alt="Carousel 1"/>
                                    </div>
                                    <div className="card-block p-t-2">
                                        <h6 className="small text-wide p-b-2">Insight</h6>
                                        <h5>
                                            <a href="">Why Stuff Happens Every Year.</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-equal carousel-item m-t-0">
                            <div className="col-md-12 fadeIn wow">
                                <div className="card">
                                    <div className="card-img-top card-img-top-250">
                                        <img className="img-fluid" src={contoh}/>
                                    </div>
                                    <div className="card-block p-t-2">
                                        <h6 className="small text-wide p-b-2">Category 3</h6>
                                        <h5>
                                            <a href="">Catchy Title of a Blog Post.</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-equal carousel-item m-t-0">
                            <div className="col-md-12 fadeIn wow">
                                <div className="card">
                                    <div className="card-img-top card-img-top-250">
                                        <img className="img-fluid" src={contoh}/>
                                    </div>
                                    <div className="card-block p-t-2">
                                        <h6 className="small text-wide p-b-2">Category 3</h6>
                                        <h5>
                                            <a href="">Lorem ipsum dolor sit amet, </a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    <div className="container p-t-0 m-t-2 carousel-inner carousel-web">

                        <div className="row row-equal carousel-item active m-t-0">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-img-top card-img-top-250">
                                        <img className="img-fluid" src={contoh} alt="Carousel 1"/>
                                    </div>
                                    <div className="card-block p-t-2">
                                        <h6 className="small text-wide p-b-2">Insight</h6>
                                        <h5>
                                            <a href="">Why Stuff Happens Every Year.</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-img-top card-img-top-250">
                                        <img className="img-fluid" src={contoh} alt="Carousel 2"/>
                                    </div>
                                    <div className="card-block p-t-2">
                                        <h6 className="small text-wide p-b-2">Development</h6>
                                        <h5>
                                            <a href="">How to Make Every Line Count.</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-equal carousel-item m-t-0">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-img-top card-img-top-250">
                                        <img className="img-fluid" src={contoh}/>
                                    </div>
                                    <div className="card-block p-t-2">
                                        <h6 className="small text-wide p-b-2"><span className="pull-xs-right">12.04</span> Category 1</h6>
                                        <h5>
                                            <a href="">This is a Blog Title.</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 fadeIn wow">
                                <div className="card">
                                    <div className="card-img-top card-img-top-250">
                                        <img className="img-fluid" src={contoh}/>
                                    </div>
                                    <div className="card-block p-t-2">
                                        <h6 className="small text-wide p-b-2">Category 3</h6>
                                        <h5>
                                            <a href="">Catchy Title of a Blog Post.</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    }


                </section> */}
        </div>
    </>
  )
}

