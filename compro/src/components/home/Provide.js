import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ScrollAnimation from 'react-animate-on-scroll';

import plane from '../../assets/images/plane.png';
import planeActive from '../../assets/images/planeActive.png';
import planeThumbnail from '../../assets/images/planeThumbnail.png';
import acc from '../../assets/images/acc.png';
import accActive from '../../assets/images/accActive.png';
import accThumbnail from '../../assets/images/accThumbnail.png';
import train from '../../assets/images/train.png';
import trainActive from '../../assets/images/trainActive.png';
import trainThumbnail from '../../assets/images/trainThumbnail.png';
import car from '../../assets/images/car.png';
import carActive from '../../assets/images/carActive.png';
import carThumbnail from '../../assets/images/carThumbnail.png';
import ship from '../../assets/images/ship.png';
import shipActive from '../../assets/images/shipActive.png';
import shipThumbnail from '../../assets/images/shipThumbnail.png';
import passport from '../../assets/images/passport.png';
import passportActive from '../../assets/images/passportActive.png';
import passportThumbnail from '../../assets/images/passportThumbnail.png';
import maps from '../../assets/images/maps.png';
import mapsActive from '../../assets/images/mapsActive.png';
import mapsThumbnail from '../../assets/images/mapsThumbnail.png';
import beach from '../../assets/images/beach.png';
import beachActive from '../../assets/images/beachActive.png';
import beachThumbnail from '../../assets/images/beachThumbnail.png';
import umroh from '../../assets/images/umroh.png';
import umrohActive from '../../assets/images/umrohActive.png';
import umrohThumbnail from '../../assets/images/umrohThumbnail.png';
import profile from '../../assets/images/profile.png';
import profileActive from '../../assets/images/profileActive.png';
import profileThumbnail from '../../assets/images/profileThumbnail.png';
import card from '../../assets/images/card.png';
import cardActive from '../../assets/images/cardActive.png';
import cardThumbnail from '../../assets/images/cardThumbnail.png';
import prev from '../../assets/images/prev.png';
import next from '../../assets/images/next.png';
import arrowTraveli from '../../assets/images/arrowTraveli.png';
import radio from '../../assets/images/radio.png';
import radioSelected from '../../assets/images/radioSelected.png';

import petraStepImg from '../../assets/images/petraStepImg.png';
import corporateStepImg from '../../assets/images/corporateStepImg.png';
import agencyStepImg from '../../assets/images/agencyStepImg.png';
import wholesalerStepImg from '../../assets/images/wholesalerStepImg.png';
import supplierStepImg from '../../assets/images/supplierStepImg.png';
import supplierImg from '../../assets/images/supplierImg.png';
import wholesalerImg from '../../assets/images/wholesalerImg.png';
import petraImg from '../../assets/images/petraImg.png';
import agencyImg from '../../assets/images/agencyImg.png';
import corporateImg from '../../assets/images/corporateImg.png';
import checklist from '../../assets/images/checklist.png';

// import { MembershipMobile } from './MembershipMobile.js'

import { useState } from 'react';
// import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


export const Provide = ({
  dataProvideTitle, 
  dataProvideDesc,
  supplier,
  wholesaler,
  agency,
  corporate,
  petra
}) => {
    // const [mobileView, setMobileView] = useState(window.innerWidth)
    let [trigger, setTrigger] = useState(1)
    
    const [currProvide, setCurrProvide] = useState({
      index: 0,
      isActive: true,
      section: "FLIGHTS",
      heading: dataProvideTitle.Flights,
      desc: dataProvideDesc.Flights,
      icon: plane,    
      iconActive: planeActive, 
      thumbnail: planeThumbnail,
    })

    const [currMembership, setCurrMembership] = useState({
      isActive: true,
      section: "Supplier",
      availMenu: [
        {
          isActive: true,
          section: "Supplier",
          heading: supplier.header.Title,
          img: supplierImg,
          stepImg: supplierStepImg,
          desc: supplier.header.Description,
          benefits: [
            supplier.benefits.Benefit1,
            supplier.benefits.Benefit2,
            supplier.benefits.Benefit3,
            supplier.benefits.Benefit4,
            supplier.benefits.Benefit5,
            supplier.benefits.Benefit6,
          ],
          conditions: [
            supplier.conditions.Condition1,
            supplier.conditions.Condition2,
            supplier.conditions.Condition3,
          ]
        }
      ],
    })

    const [membershipSectionData, setMembershipSectionData] = useState([
      {
        isActive: true,
        section: "Supplier",
        availMenu: [
          {
            isActive: true,
            section: "Supplier",
            heading: supplier.header.Title,
            img: supplierImg,
            stepImg: supplierStepImg,
            desc: supplier.header.Description,
            benefits: [
              supplier.benefits.Benefit1,
              supplier.benefits.Benefit2,
              supplier.benefits.Benefit3,
              supplier.benefits.Benefit4,
              supplier.benefits.Benefit5,
              supplier.benefits.Benefit6,
            ],
            conditions: [
              supplier.conditions.Condition1,
              supplier.conditions.Condition2,
              supplier.conditions.Condition3,
            ]
          }
        ],
      },{
        isActive: false,
        section: "Wholesaler",
        availMenu: [
          {
            isActive: true,
            section: "Wholesaler",
            heading: wholesaler.header.Title,
            img: wholesalerImg,
            stepImg: wholesalerStepImg,
            desc: wholesaler.header.Description,
            benefits: [
              wholesaler.benefits.Benefit1,
              wholesaler.benefits.Benefit2,
              wholesaler.benefits.Benefit3,
              wholesaler.benefits.Benefit4,
              wholesaler.benefits.Benefit5,
              wholesaler.benefits.Benefit6,
            ],
            conditions: [
              wholesaler.conditions.Condition1,
              wholesaler.conditions.Condition2,
              wholesaler.conditions.Condition3,
            ]
          }
        ],
      },{
        isActive: false,
        section: "Reseller",
        availMenu: [
          {
            isActive: true,
            section: "Agency",
            heading: agency.header.Title,
            img: agencyImg,
            stepImg: agencyStepImg,
            desc: agency.header.Description,
            benefits: [
              agency.benefits.Benefit1,
              agency.benefits.Benefit2,
              agency.benefits.Benefit3,
              agency.benefits.Benefit4,
              agency.benefits.Benefit5,
              agency.benefits.Benefit6,
            ],
            conditions: [
              agency.conditions.Condition1,
              agency.conditions.Condition2,
              agency.conditions.Condition3,
            ]
          },{
            isActive: false,
            section: "Corporate",
            heading: corporate.header.Title,
            img: corporateImg,
            stepImg: corporateStepImg,
            desc: corporate.header.Description,
            benefits: [
              corporate.benefits.Benefit1,
              corporate.benefits.Benefit2,
              corporate.benefits.Benefit3,
              corporate.benefits.Benefit4,
              corporate.benefits.Benefit5,
              corporate.benefits.Benefit6,
            ],
            conditions: [
              corporate.conditions.Condition1,
              corporate.conditions.Condition2,
              corporate.conditions.Condition3,
            ]
          },{
            isActive: false,
            section: "Petra",
            heading: petra.header.Title,
            img: petraImg,
            stepImg: petraStepImg,
            desc: petra.header.Description,
            benefits: [
              petra.benefits.Benefit1,
              petra.benefits.Benefit2,
              petra.benefits.Benefit3,
              petra.benefits.Benefit4,
              petra.benefits.Benefit5,
              petra.benefits.Benefit6,
            ],
            conditions: [
              petra.conditions.Condition1,
              petra.conditions.Condition2,
              petra.conditions.Condition3,
            ]
          }
        ],
      }
    ])

    const [provideSectionData, setProvideSectionData] = useState([
      {
        index: 0,
        isActive: true,
        section: "FLIGHTS",
        heading: dataProvideTitle.Flights,
        desc: dataProvideDesc.Flights,
        icon: plane,    
        iconActive: planeActive, 
        thumbnail: planeThumbnail,
      },{
        index: 1,
        isActive: false,
        section: "ACCOMMODATIONS",
        heading: dataProvideTitle.Accomodations,
        desc: dataProvideDesc.Accomodations,
        icon: acc,    
        iconActive: accActive, 
        thumbnail: accThumbnail,
      },{
        index: 2,
        isActive: false,
        section: "TRAINS",
        heading: dataProvideTitle.Trains,
        desc: dataProvideDesc.Trains,
        icon: train,    
        iconActive: trainActive, 
        thumbnail: trainThumbnail,
      },{
        index: 3,
        isActive: false,
        section: "Land Transportation",
        heading: dataProvideTitle.LandTransportation,
        desc: dataProvideDesc.LandTransportation,
        icon: car,    
        iconActive: carActive, 
        thumbnail: carThumbnail,
      },{
        index: 4,
        isActive: false,
        section: "CRUISE",
        heading: dataProvideTitle.Cruise,
        desc: dataProvideDesc.Cruise,
        icon: ship,    
        iconActive: shipActive, 
        thumbnail: shipThumbnail,
      },{
        index: 5,
        isActive: false,
        section: "TRAVEL DOCUMENTS",
        heading: dataProvideTitle.TravelDocuments,
        desc: dataProvideDesc.TravelDocuments,
        icon: passport,    
        iconActive: passportActive, 
        thumbnail: passportThumbnail,
      },{
        index: 6,
        isActive: false,
        section: "TOUR PACKAGE",
        heading: dataProvideTitle.TourPackage,
        desc: dataProvideDesc.TourPackage,
        icon: maps,    
        iconActive: mapsActive, 
        thumbnail: mapsThumbnail,
      },{
        index: 7,
        isActive: false,
        section: "LEISURE PACKAGE",
        heading: dataProvideTitle.LeisurePackage,
        desc: dataProvideDesc.LeisurePackage,
        icon: beach,    
        iconActive: beachActive, 
        thumbnail: beachThumbnail,
      },{
        index: 8,
        isActive: false,
        section: "UMROH PACKAGE",
        heading: dataProvideTitle.UmrohPackage,
        desc: dataProvideDesc.UmrohPackage,
        icon: umroh,    
        iconActive: umrohActive, 
        thumbnail: umrohThumbnail,
      },{
        index: 9,
        isActive: false,
        section: "TRAVEL INSURANCE",
        heading: dataProvideTitle.TravelInsurance,
        desc: dataProvideDesc.TravelInsurance,
        icon: profile,    
        iconActive: profileActive, 
        thumbnail: profileThumbnail,
      },{
        index: 10,
        isActive: false,
        section: "P.P.O.B",
        heading: dataProvideTitle.Ppob,
        desc: dataProvideDesc.Ppob,
        icon: card,    
        iconActive: cardActive, 
        thumbnail: cardThumbnail,
      },
    ])

    const clickIcon = (section) =>{
      let newData = provideSectionData
      let selectedData = {}

      newData.forEach(data => {
        if (data.section == section) {
          data.isActive = true
          selectedData = data
        } else {
          data.isActive = false
        }
      })

      setProvideSectionData(newData)
      setCurrProvide(selectedData)
    }

    const onMove = (move) =>{
      let dataAfterMove = null
      let nextIndex = currProvide.index + 1
      let prevIndex = currProvide.index - 1

      if( move == "next" && nextIndex < provideSectionData.length ){
        dataAfterMove = provideSectionData[nextIndex]
      } else if ( move == "prev" && prevIndex >= 0){
        dataAfterMove = provideSectionData[prevIndex]
      }

      if(dataAfterMove){
        clickIcon(dataAfterMove.section)
      }
    }

    const changeMenu = (section) =>{
      let newData = membershipSectionData
      let selectedData = {}

      newData.forEach(data => {
        if (data.section == section) {
          data.isActive = true
          selectedData = data
        } else {
          data.isActive = false
        }
      })

      setMembershipSectionData(newData)
      setCurrMembership(selectedData)
    }

    const changeSubMenu = (section) =>{
      let newData = membershipSectionData
      let selectedData = {}

      newData[2].availMenu.forEach(data => {
        if (data.section == section) {
          data.isActive = true

        } else {
          data.isActive = false
        }
      })

      selectedData = newData[2]
      setTrigger(trigger += 1)
      setMembershipSectionData(newData)
      setCurrMembership(selectedData)
    }
    
    // useEffect(()=> {
    //     function handleResize() {
    //         setMobileView(window.innerWidth)
    //     }

    //     window.addEventListener('resize', handleResize)
    // },[])


    return (
      <>
        <div className="container-provide">

          {/* provide section */}
          <div className="row ">
            <div className="col-md-3 offset-md-1 text-left pl-5">
              <ScrollAnimation animateIn='bounceInLeft' >
                <p className="headingProvide mt-5 mobile-2">
                  WHAT WE PROVIDE
                </p>
              </ScrollAnimation>
            </div>
            <div className="col-md-3 offset-md-2 text-left p-5 mobile-1-padding arrow-provide">
              <img onClick={ () => { onMove("prev")} } className="mr-3 ml-5 arrow-provide-left" src={prev} />
              <img onClick={ () => { onMove("next")} } src={next} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 offset-md-1 text-right mt-5 no-mobile">
              <ScrollAnimation animateIn='bounceInLeft' >
                <img class="thumbnail-provide " src={currProvide.thumbnail}/>
              </ScrollAnimation>
            </div>
            <div className="col-md-5 text-left ml-5 pl-5 mobile-provide-box">
              <div className="row mb-5 d-flex justify-content-center">
                {
                  provideSectionData.map(data => {
                    return (
                      <div className="col-md-2 mb-3 pr-0 mobile-icon">
                        <img className="icon-provide" src={data.isActive == true ? data.iconActive : data.icon}
                        onClick={ () => clickIcon(data.section)}/>
                      </div>
                    )
                  })
                }
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="menu-section blueTraveli mobile-2 mobile-center mobile-margin-left">
                    <ScrollAnimation animateIn='bounceInRight'>
                      {currProvide.section}
                    </ScrollAnimation>
                  </h3>
                </div>
                <div className="col-md-8">
                  <h4 className="menu-heading-provide mobile-1 mobile-center mobile-margin-left">
                    <ScrollAnimation animateIn='bounceInRight'>
                      {currProvide.heading}
                    </ScrollAnimation>
                  </h4>
                </div>
                <div className="col-md-12">
                  <p className="menu-desc mobile-1 mobile-center mobile-margin-left">
                    <ScrollAnimation animateIn='bounceInRight'>
                      {currProvide.desc}
                    </ScrollAnimation>
                  </p>
                </div>
              </div>
              <div className="row mt-5 mobile-no-margin mobile-center">
                <ScrollAnimation animateIn="fadeIn">
                  <button type="button" className="btn btn-traveli btn-v3-hero no-mobile">
                    <div className="row">
                      <div className="col-3 ml-0 pl-0">
                        <a className="arrow"> <ArrowForwardIosOutlinedIcon/> </a> 
                      </div>
                      <div className="col btn-font traveliColor">
                        Try it for Free
                      </div>
                    </div>
                  </button>
                  <button className="mobile-only btn btn-yellow mt-3">
                    Try it for Free
                  </button>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          
          {/* membership section */}
          <div className="membership-section">
            <div className="row">
              <div className="col-md-5 offset-md-1 text-left pl-5">
                <div className="col-md-8 pb-2 mobile-center">
                  <ScrollAnimation animateIn='bounceInLeft' >
                      <p className="headingMember mt-5 mobile-2">
                        TRAVELI MEMBERSHIP
                      </p>
                  </ScrollAnimation>
                </div>
                  <ScrollAnimation animateIn='bounceInLeft' >
                    <div className="row mt-5 mobile-no-margin">
                      <div className="col-md-6 mt-5 mobile-no-margin">
                        {
                          membershipSectionData.map(data => {
                            return (
                              data.isActive == true ? 
                                <div className="row mb-4 mobile-left-padding">
                                  <div className="col-md-1 padding-7 no-mobile">
                                    <img src={arrowTraveli}/>
                                  </div>
                                  <div className="col-md-9 pl-4 no-mobile">
                                    <button className="btn btn-membership membership-active" onClick={() => changeMenu(data.section) } >
                                      { data.section } 
                                    </button>
                                  </div>
                                  <div className="col-md-9 pl-4 mobile-only">
                                    <a href={`/members/${data.section}`}>
                                      <button className="btn btn-yellow mobile-width-100" 
                                      onClick={() => changeMenu(data.section) } >
                                        { data.section } 
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              :
                                <div className="row mb-4 mobile-left-padding">
                                  <div className="col-md-1 pt-4 no-mobile">
                                  </div>
                                  <div className="col-md-9 pl-4 no-mobile">
                                    <button className="btn btn-membership" onClick={() => changeMenu(data.section) } > 
                                      { data.section } 
                                    </button>
                                  </div>
                                  <div className="col-md-9 pl-4 mobile-only">
                                    <a href={`/members/${data.section}`}>
                                      <button className="btn btn-yellow mobile-width-100" 
                                      onClick={() => changeMenu(data.section) } >
                                        { data.section } 
                                      </button>
                                    </a>
                                  </div>
                                </div>
                            )
                          })
                        }
                        {
                          currMembership.section == "Reseller" ?
                            currMembership.availMenu.map( data => {
                              return(
                                data.isActive == true ? 
                                  <div className="row subMenu mt-2 no-mobile">
                                    <div className="col-md-3 offset-md-2 text-center">
                                      <img className="radio" src={radioSelected}/>
                                    </div>
                                    <div className="col-md-7 pl-4">
                                      <p className="sub-menu sub-menu-active" onClick={() => changeSubMenu(data.section) } > 
                                        { data.section } 
                                      </p>
                                    </div>
                                  </div>
                                :
                                  <div className="row subMenu mt-2 no-mobile">
                                    <div className="col-md-3 offset-md-2 text-center">
                                      <img className="radio" src={radio}/>
                                    </div>
                                    <div className="col-md-7 pl-4">
                                      <p className="sub-menu" onClick={() => changeSubMenu(data.section) } > 
                                        { data.section } 
                                      </p>
                                    </div>
                                  </div>
                              )
                            })
                          :
                            null
                        }
                        
                      </div>
                    <div className="col-md-6 mt-5 no-mobile">
                      { currMembership.availMenu.map( data => {
                        return (
                          data.isActive == true ?
                          <img className="responsiveImg" src={data.img}/>
                        :
                          null
                        )
                      })}
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                  <div className="row no-mobile">
                    <div className="col-md-3 offset-md-7">
                      {/* <button type="button" className="ml-3 btn btn-traveli btn-v7-hero">
                        <div className="row">
                          <div className="col-3 ml-0 pl-0">
                            <a className="arrow"> <ArrowForwardIosOutlinedIcon/> </a> 
                          </div>
                          <div className="col btn-font">
                            Join as {currMembership.section}
                          </div>
                        </div>
                      </button> */}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-md-6 no-mobile">
                <ScrollAnimation animateIn='bounceInRight'>
                  <div className="row mt-5">
                    {currMembership.availMenu.map(data => {
                      return (
                        data.isActive == true ?
                          <div className="col-md-4 text-center">
                            <button className="btn btn-default sub-menu-button sub-menu-button-active"
                            onClick={() => changeSubMenu(data.section)}> 
                              {data.section} </button>
                          </div>
                        :
                          <div className="col-md-4 text-center">
                            <button className="btn btn-default sub-menu-button"
                            onClick={() => changeSubMenu(data.section)}> 
                              {data.section} </button>
                          </div>
                      )
                    })}
                  </div>
                  {currMembership.availMenu.map(data => {
                    return (
                      data.isActive == true ? 
                        <div className="row mt-5">
                          <div className="col-md-11 ml-4">
                            <h3 className="text-white headingMembership">
                              {data.heading}
                            </h3>
                          </div>
                          <div className="col-md-11 ml-4">
                            <p className="text-white oneRem">
                              {data.desc}
                            </p>
                          </div>
                          <div className="col-md-11 ml-4 mb-5 mt-4">
                            <a className="text-white bold" href="#">
                              {"Learn more >>"}
                            </a>
                          </div>
                          <div className="col-md-3 pl-4 ml-3 mb-4">
                            <h5 className="text-white pointMembership">
                              BENEFITS
                            </h5>
                          </div>
                          <div className="col-md-8 mb-4">
                            {data.benefits.map(benefit => {
                              return (
                                <div className="row">
                                  <div className="col-md-1 offset-md-1 ">
                                    <img src={checklist}/>
                                  </div>
                                  <div className="col-md-8 ">
                                    <p className="text-white mb-0 fb-13"> 
                                      { benefit } 
                                    </p>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                          <div className="col-md-3 mt-4 pl-4 ml-3">
                            <h5 className="text-white pointMembership">
                              CONDITION
                            </h5>
                          </div>
                          <div className="col-md-8 mt-4">
                            {data.conditions.map(condition => {
                              return (
                                <div className="row">
                                  <div className="col-md-1 offset-md-1 ">
                                    <img src={checklist}/>
                                  </div>
                                  <div className="col-md-8 ">
                                    <p className="text-white mb-0 fb-13"> 
                                      { condition } 
                                    </p>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                          <div className="col-md-12 mt-10 ">
                            <img className="stepImg" src={data.stepImg}/>
                          </div>
                        </div>
                      :
                      null
                    )
                  })}
                </ScrollAnimation>
              </div>
            </div>
          </div>
          {/* <MembershipMobile data={ currMembership }/> */}
        </div>
      </>
    )
  }

