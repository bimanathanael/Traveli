import React from 'react'
import { makeStyles } from '@material-ui/core'
import ScrollAnimation from 'react-animate-on-scroll';

// assets
import TraveliLogo from '../../assets/images/members/traveli.png';
import BenefitBackground from '../../assets/images/members/benefits-background.png';

const useStyles = makeStyles((themes) => ({
    containerBenefit: {
        marginTop: '7rem',
    },
    alignPosition: {
        textAlign: 'center',
        color: '#07AED6',
    },
    headerBenefit: {
        marginTop: '.5rem'
    },
    benefitMembersContent: {
      backgroundSize: '73rem',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundImage: `url(${BenefitBackground})`,
  }, 
  cardContainer: {
      margin: '2rem auto 0 auto',
      maxWidth: '50%'
  },
  cardContent: {
      marginTop: '1rem',
      width: '13rem',
      minHeight: '13rem', 
      border: 'none', 
      borderRadius: '1rem',
      boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.1), 1px 5px 40px 2px rgba(0, 0, 0, 0.1)',
      color: '#07AED6'
  }
}))
const BenefitMembers = ({textHeader, textSubHeader, data}) => {
    const classes = useStyles()
    return (
        <div className={classes.containerBenefit}>
            <div className="row justify-content-center">
                <ScrollAnimation animateIn='zoomIn'>
                    <div className={classes.alignPosition}>
                        <div className="col-12">
                            <img src={TraveliLogo} alt="traveli" width={'50%'}/>
                        </div>
                        <div className={`${classes.headerBenefit} col-12`}>
                            <h2>{textHeader}</h2>
                        </div>
                        <div className="col-12">
                            <h6>{textSubHeader}</h6>
                        </div>
                    </div>
                </ScrollAnimation>
                <div className={`col-12 ${classes.benefitMembersContent}`}>
                        <ScrollAnimation animateIn="fadeIn">
                    <div className={`row ${classes.cardContainer}`}>
                        { data && data.map((item, index) => (
                            <div key={index} className="col-4">
                                <div className={`${classes.cardContent} card`}>
                                    <div className="card-body">
                                        <h6 className="card-title">{item.title}</h6>
                                        <p style={{color: 'grey', fontSize: '.7rem'}} className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div> ))
                        }
                    </div>      
                        </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default BenefitMembers
