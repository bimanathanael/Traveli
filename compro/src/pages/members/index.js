import React from 'react'
import './members.css'
import traveliLogo from '../../assets/images/members/Traveli-png.png'
import processTraveli from '../../assets/images/members/THE PROCESS-2.png'

const Members = () => {
    return (
        <div className='container-lg'>
            <div className='hero-members'>
                <div className="content-header-members">
                    <div className='row'>
                        <div className='col-12'>
                            <div className='content-members spacing-content'>
                                <h1>{'COPY HEADING FOR SUPPLIER'}</h1>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='content-members narrow-line-height'>
                                <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='button-content'>
                                <button type="button" class="btn button-try">
                                    <i class="bi bi-chevron-right icon-button icon-btn-try"></i>
                                    <a href="#">
                                        Try it for Free
                                    </a>
                                </button>
                                <button type="button" class="btn button-watch">
                                <i class="bi bi-play-circle icon-button icon-btn-watch"></i>
                                    <span>
                                        Watch Video
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-content-footer">
                    <h6>{'ARE YOU PRODUCT OWNERS LOOKING FOR EXPAND SELLING CHANNEL?'}</h6>
                </div>
            </div>
            <div className="benefit-members">
                <div className="row">
                    <div className="col-12">
                        <img src={traveliLogo} alt="traveli" className='img-fluid' />
                    </div>
                    <div className="col-12">
                        <h2>{'FOR SUPPLIER'}</h2>
                    </div>
                    <div className="col-12">
                        <h6>{'WHAT WE OFFER'}</h6>
                    </div>
                    <div className="col-12">
                        <div className="content-benefit">
                            <div className="row">
                                <div className="col-6">
                                    <h1>INI CARD</h1>
                                </div>
                                <div className="col-6">
                                    <h1>INI CARD</h1>
                                </div>
                                <div className="col-6">
                                    <h1>INI CARD</h1>
                                </div>
                                <div className="col-6">
                                    <h1>INI CARD</h1>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="suppliers-members">
                <div className="row">
                    <div className="col-12">
                        <h2>{'HOW SUPPLIER WORKS'}</h2>
                    </div>
                    <div className="col-12">
                        <h4>{'UPLOAD YOUR TOURISM PRODUCTS TO TRAVELI STORE'}</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="col-12">
                        <h4>{'EXPAND YOUR NETWORK AND DISTRIBUTION CHANNEL'}</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="col-12">
                        <h4>{'RECEIVE MORE ORDERS AND GET PAID QUICKLY'}</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </div>
            <div className="process-members">
                <img src={processTraveli} alt="proccess traveli" className='img-fluid'/>
            </div>
            <div className="condition-members">
                <div className="condition-content">
                    <div className="row">
                        <div className="col-12">
                            <h2>CONDITIONS</h2>
                        </div>
                        <div className="col-12">
                            <div>
                                <h5>CREDENTIALS</h5>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div>
                                <h5>{'CREDENTIALS'}</h5>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div>
                                <h5>{"AGREE WITH TRAVELI'S FEE"}</h5>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div>
                                <h5>{"MANAGE WEB ACTIVITIES INDEPENDENTLY"}</h5>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="button" class="btn button-try">
                                <i class="bi bi-chevron-right icon-button icon-btn-try"></i>
                                <a href="#">
                                    Try it for Free
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="key-feature-members">
                <div className="row">
                    <div className="col-12">
                        <h2>{"KEY FEATURES FOR SUPPLIER"}</h2>
                    </div>
                    <div className="col-12">
                        <h1>INI CARD</h1>
                    </div>
                    <div className="col-12">
                        <h1>INI CARD</h1>
                    </div>
                    <div className="col-12">
                        <h1>INI CARD</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Members
