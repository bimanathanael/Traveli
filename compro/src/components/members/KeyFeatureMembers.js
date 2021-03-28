import React from 'react'
import FeatureMemberTemp from './FeatureMemberTemp';
import {makeStyles} from '@material-ui/core';
import backgroundKey from '../../assets/images/members/feature-background.png'
import ScrollAnimation from 'react-animate-on-scroll';

// Assets
import featureOne from '../../assets/images/members/key_1.png';
import featureTwo from '../../assets/images/members/key_2.png';
import featureThree from '../../assets/images/members/key_3.png';

const useStyles = makeStyles((themes) => ({
    containerKey: {
        backgroundImage:`url(${backgroundKey})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // width: '100%',
        minHeight: '170rem',
        paddingTop: '3rem'
    }
}))


const KeyFeatureMembers = ({content, title}) => {
    const classes = useStyles()
    return (
        <div className={classes.containerKey}>
            <div className="row">
                <div className="col-12" style={{margin: '5rem auto 0rem auto', textAlign: 'center', color: '#07AED6', maxWidth: '40%'}}>
                    <ScrollAnimation animateIn="zoomIn">
                        <h2>{title}</h2>

                    </ScrollAnimation>
                </div>
            </div>
           {
               content && (
                <>   
                    <div style={{paddingTop: '5rem'}}>
                    <FeatureMemberTemp title={content.one.title} imageContent={featureOne} data={content.one.data} left={true}/>
                    </div>
                    <div style={{paddingTop: '15rem'}}>
                    <FeatureMemberTemp title={content.two.title} imageContent={featureTwo} data={content.two.data} left={false}/>
                    </div>
                    <div style={{paddingTop: '20rem'}}>
                        <FeatureMemberTemp title={content.three.title} imageContent={featureThree} data={content.three.data} left={true}/>
                    </div>
                </>
               )
           } 
        </div>

    )
}

export default KeyFeatureMembers
