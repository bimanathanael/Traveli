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

import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


export const Provide = () => {
    // const [mobileView, setMobileView] = useState(window.innerWidth)
    let [trigger, setTrigger] = useState(1)
    
    const [currProvide, setCurrProvide] = useState({
      index: 0,
      isActive: true,
      section: "FLIGHTS",
      heading: "400+ Penerbangan Domestik dan Internasional",
      desc: `Kami menyediakan berbagai macam pilihan tiket penerbangan yang disediakan oleh member kami,
      mulai dari tiket antar kota, pulau, hingga negara, semuanya dalam 1 tempat`,
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
          heading: "BECOME A MERCHANT (B2B)",
          img: supplierImg,
          stepImg: supplierStepImg,
          desc: `Supplier adalah penyedia produk kepariwisataan, dimana produk mereka akan di distribusikan oleh 
          distributor. Siapapun bisa menjadi supplier, cukup daftar dan unggah produk kepariwisataan yang dimiliki sesuai
          dengan T&C Traveli.`,
          benefits: [
            "Ekspansi Jaringan",
            "Gratis Registrasi",
            "Pembayaran Realtime",
            "Customer Care",
            "Laporan Penjualan Online",
            "Virtual Account",
          ],
          conditions: [
            "Memiliki kredensial untuk produk pariwisata",
            "Mengatur kegiatan para website secara independent",
            "Menyetujui skema pembagian hasil merchant"
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
            heading: "BECOME A MERCHANT (B2B)",
            img: supplierImg,
            stepImg: supplierStepImg,
            desc: `Supplier adalah penyedia produk kepariwisataan, dimana produk mereka akan di distribusikan oleh 
            distributor. Siapapun bisa menjadi supplier, cukup daftar dan unggah produk kepariwisataan yang dimiliki sesuai
            dengan T&C Traveli.`,
            benefits: [
              "Ekspansi Jaringan",
              "Gratis Registrasi",
              "Pembayaran Realtime",
              "Customer Care",
              "Laporan Penjualan Online",
              "Virtual Account",
            ],
            conditions: [
              "Memiliki kredensial untuk produk pariwisata",
              "Mengatur kegiatan para website secara independent",
              "Menyetujui skema pembagian hasil merchant"
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
            heading: "BECOME A WHOLESALER (B2B2C)",
            img: wholesalerImg,
            stepImg: wholesalerStepImg,
            desc: `Traveli agent yang memiliki credential produk kepariwisataan dan melakikan
            kegiatan jual beli secara digital (lisensi dan otoritas) Distributor/Wholesaler 
            dapat menjadi penyedia produk bagi Agency, Korporasi dan PeTra`,
            benefits: [
              "Cross Border Inventory",
              "Ekspansi Jaringan",
              "Multi Member Benefit dan Akses",
              "Customer Care",
              "Virtual Account",
              "Laporan Penjualan Online",
            ],
            conditions: [
              "Memiliki kredensial untuk produk pariwisata",
              "Mengatur kegiatan para website secara independent",
              "Menyetujui skema pembagian hasil merchant"
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
            heading: "FOR AGENCY / SUB-AGENT (B2B2C)",
            img: agencyImg,
            stepImg: agencyStepImg,
            desc: `Sub-agent yang tidak memiliki credential namun memiliki network dan market yang luas.`,
            benefits: [
              "Cross Border Inventory",
              "Ekspansi Jaringan",
              "Multi Member Benefit dan Akses",
              "Customer Care",
              "Virtual Account",
              "Laporan Penjualan Online",
            ],
            conditions: [
              "Memiliki kredensial untuk produk pariwisata",
              "Mengatur kegiatan para website secara independent",
              "Menyetujui skema pembagian hasil merchant"
            ]
          },{
            isActive: false,
            section: "Corporate",
            heading: "FOR CORPORATE (B2B2C)",
            img: corporateImg,
            stepImg: corporateStepImg,
            desc: `Perusahaan yang tidak memiliki credential namun berminat untuk mengembangkan bisnis
            di industry pariwisata`,
            benefits: [
              "Cross Border Inventory",
              "Ekspansi Jaringan",
              "Multi Member Benefit dan Akses",
              "Customer Care",
              "Virtual Account",
              "Laporan Penjualan Online",
            ],
            conditions: [
              "Memiliki kredensial untuk produk pariwisata",
              "Mengatur kegiatan para website secara independent",
              "Menyetujui skema pembagian hasil merchant"
            ]
          },{
            isActive: false,
            section: "Petra",
            heading: "PERSONAL TRAVELI / PETRA (B2C)",
            img: petraImg,
            stepImg: petraStepImg,
            desc: `Salah satu unit Travel Agent yang ditujukan khusus untuk pribadi/perseorangan yang memiliki
            minat untuk bergabung menjalankan bisnis kepairisataan`,
            benefits: [
              "Akses Ke Produk Wisata",
              "Pembayaran Realtime",
              "Laporan Penjualan Online",
              "Insentif Berdasarkan Performa",
              "Ekspansi Jaringan",
              "Virtual Account",
            ],
            conditions: [
              "Mengatur kegiatan para website secara independent",
              "Menyetujui segala persyaratan dan skema bisnis Traveli",
              "Menyetujui semua persyaratan yang diberikan oleh Parent/Upline",
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
        heading: "400+ Penerbangan Domestik dan Internasional",
        desc: `Kami menyediakan berbagai macam pilihan tiket penerbangan yang disediakan oleh member kami,
        mulai dari tiket antar kota, pulau, hingga negara, semuanya dalam 1 tempat`,
        icon: plane,    
        iconActive: planeActive, 
        thumbnail: planeThumbnail,
      },{
        index: 1,
        isActive: false,
        section: "ACCOMMODATIONS",
        heading: "5000+ Akomodasi",
        desc: `Membertikan anda variasi pilihan penginapan yang sudah tersedia pada sistem kami, 
        mulai dari hotel, villa, hingga guest house dan homestay`,
        icon: acc,    
        iconActive: accActive, 
        thumbnail: accThumbnail,
      },{
        index: 2,
        isActive: false,
        section: "TRAINS",
        heading: "Dapatkan Tiket KAI anda disini",
        desc: `Memberikan anda kemudahan untuk mencari produk KAI yang sudah ada dalam libary inventory
        Traveli Store dan dapat langsung diakses melalui masing-masing website Agent.`,
        icon: train,    
        iconActive: trainActive, 
        thumbnail: trainThumbnail,
      },{
        index: 3,
        isActive: false,
        section: "LAND TRANSPORTATION",
        heading: "Cari kendaraan untuk mobilitas sehari-hari kini lebih mudah",
        desc: `Kami memiliki berbagai variasi jenis kendaraan darat yang dapat mendukung dan memudahkan
        mobilitas anda.`,
        icon: car,    
        iconActive: carActive, 
        thumbnail: carThumbnail,
      },{
        index: 4,
        isActive: false,
        section: "CRUISE",
        heading: "Dapatkan kapal pesiar pilihan anda dengan mudah",
        desc: `Memberikan anda kemudahan untuk mencari kapal pesiar segala kelas dan dapat langsung
        diakses melalui masing-masing website Agent`,
        icon: ship,    
        iconActive: shipActive, 
        thumbnail: shipThumbnail,
      },{
        index: 5,
        isActive: false,
        section: "TRAVEL DOCUMENTS",
        heading: "500+Agen Siap Membantu Mengurus Dokumen Anda",
        desc: `Pilihan agen dari berbagai pelosok kota selalu siap untuk membantu mengurus dokumen anda.`,
        icon: passport,    
        iconActive: passportActive, 
        thumbnail: passportThumbnail,
      },{
        index: 6,
        isActive: false,
        section: "TOUR PACKAGE",
        heading: "Paket Liburan Kini Sudah Tidak Suli Lagi Untuk Dicari",
        desc: `Kami memiliki ratusan paket liburan terbaik yang siap anda pilih dan dapat langsung anda
        gunakan!`,
        icon: maps,    
        iconActive: mapsActive, 
        thumbnail: mapsThumbnail,
      },{
        index: 7,
        isActive: false,
        section: "LEISURE PACKAGE",
        heading: "Tersedia 200+ Lebih Tempat Hiburan Kesukaanmu Di Traveli",
        desc: `Cari tempat hiburan lebih mudah di Traveli, apapun dan kemanapun yang anda mau ada di
        Traveli Store dan dapat langsung diakses melalui masing-masing website Agent`,
        icon: beach,    
        iconActive: beachActive, 
        thumbnail: beachThumbnail,
      },{
        index: 8,
        isActive: false,
        section: "UMROH PACKAGE",
        heading: "Cari Paket Umroh Lebih Aman di Traveli",
        desc: `Berbagai pilihan tiket Umroh tersedia di Traveli Store, dan terntunya lebih aman
        dan nyaman. Semua dapat langsung diakses melalui masing-masing website Agent`,
        icon: umroh,    
        iconActive: umrohActive, 
        thumbnail: umrohThumbnail,
      },{
        index: 9,
        isActive: false,
        section: "TRAVEL INSURANCE",
        heading: "100+ Produk Asuransi Perjalanan Tersedia di Traveli",
        desc: `Di Traveli, cari produk asuransi perjalanan lebih mudah dan terpercaya`,
        icon: profile,    
        iconActive: profileActive, 
        thumbnail: profileThumbnail,
      },{
        index: 10,
        isActive: false,
        section: "P.P.O.B",
        heading: "Membayar Kebutuhan Sehari-hari Cukup di Satu Platform Saja",
        desc: `Beli token PLNm Bayar TV Kabel, bahkan BPJS online dengan mudah dan cepat di Traveli.
        Anda tidak perlu mengantri di gerai atau mengunjungi ATM. Cukup bermodalkan ponsel atau komputer saja,
        Anda bisa beli secara online.`,
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
          <div className="row">
            <div className="col-md-3 offset-md-1 text-left pl-5">
              <ScrollAnimation animateIn='bounceInLeft' >
                <p className="headingWhy mt-5">
                  WHAT WE PROVIDE
                </p>
              </ScrollAnimation>
            </div>
            <div className="col-md-3 offset-md-2 text-left p-5 ">
              <img onClick={ () => { onMove("prev")} } className="mr-3 ml-5" src={prev} />
              <img onClick={ () => { onMove("next")} } src={next} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 offset-md-1 text-right mt-5">
              <ScrollAnimation animateIn='bounceInLeft' >
                <img class="thumbnail-provide" src={currProvide.thumbnail}/>
              </ScrollAnimation>
            </div>
            <div className="col-md-5 text-left ml-5 pl-5">
              <div className="row mb-5 d-flex justify-content-center">
                {
                  provideSectionData.map(data => {
                    return (
                      <div className="col-md-2 mb-3 pr-0">
                        <img className="icon-provide" src={data.isActive == true ? data.iconActive : data.icon}
                        onClick={ () => clickIcon(data.section)}/>
                      </div>
                    )
                  })
                }
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="menu-section blueTraveli">
                    <ScrollAnimation animateIn='bounceInRight'>
                      {currProvide.section}
                    </ScrollAnimation>
                  </h3>
                </div>
                <div className="col-md-8">
                  <h4 className="menu-heading-provide">
                    <ScrollAnimation animateIn='bounceInRight'>
                      {currProvide.heading}
                    </ScrollAnimation>
                  </h4>
                </div>
                <div className="col-md-12">
                  <p className="menu-desc">
                    <ScrollAnimation animateIn='bounceInRight'>
                      {currProvide.desc}
                    </ScrollAnimation>
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <ScrollAnimation animateIn="fadeIn">
                  <button type="button" className="btn btn-traveli btn-v3-hero">
                    <div className="row">
                      <div className="col-3 ml-0 pl-0">
                        <a className="arrow"> <ArrowForwardIosOutlinedIcon/> </a> 
                      </div>
                      <div className="col btn-font traveliColor">
                        Try it for Free
                      </div>
                    </div>
                  </button>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          
          
          {/* membership section */}
          <div className="membership-section">
            <div className="row">
              <div className="col-md-5 offset-md-1 text-left pl-5">
                <div className="col-md-8 pb-2">
                  <ScrollAnimation animateIn='bounceInLeft' >
                      <p className="headingMember mt-5">
                        TRAVELI MEMBERSHIP
                      </p>
                  </ScrollAnimation>
                </div>
                  <ScrollAnimation animateIn='bounceInLeft' >
                    <div className="row mt-5">
                      <div className="col-md-6 mt-5">
                        {
                          membershipSectionData.map(data => {
                            return (
                                data.isActive == true ? 
                                  <div className="row mb-4">
                                    <div className="col-md-1 padding-7">
                                      <img src={arrowTraveli}/>
                                    </div>
                                    <div className="col-md-9 pl-4">
                                      <button className="btn btn-membership membership-active" onClick={() => changeMenu(data.section) } >
                                        { data.section } 
                                      </button>
                                    </div>
                                  </div>
                                :
                                  <div className="row mb-4">
                                    <div className="col-md-1 pt-4">
                                    </div>
                                    <div className="col-md-9 pl-4">
                                      <button className="btn btn-membership" onClick={() => changeMenu(data.section) } > 
                                        { data.section } 
                                      </button>
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
                                  <div className="row subMenu mt-2">
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
                                  <div className="row subMenu mt-2">
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
                    <div className="col-md-6 mt-5">
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
                  <div className="row">
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
              <div className="col-md-6 ">
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
                            <h5 className="text-white bold2">
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
                            <h5 className="text-white bold2">
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
        </div>
      </>
    )
  }

