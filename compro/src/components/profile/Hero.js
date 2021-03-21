import ScrollAnimation from 'react-animate-on-scroll';

import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import whatsapp2 from '../../assets/images/whatsapp2.png'
import promo from '../../assets/images/promo.png'

export const Hero = ({data}) => {

  return (
    <>
      <div className="heroProfileContainer">
        <div className="row d-flex justify-content-center">
            <div className="col-md-7 text-center">
              <ScrollAnimation animateIn='zoomIn'>
                <h2 className="hero-profile-title">
                  {data.Title}
                </h2>
              </ScrollAnimation>
            </div>
        </div>
      </div>
    </>
  )
}

