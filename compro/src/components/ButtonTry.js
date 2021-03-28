import React from 'react';
import '../pages/members/members.css';

import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

const ButtonTry = ({feature}) => {
    return (
        <>
        <button type="button" className="btn btn-traveli btn-v3-hero">
            <div className="row">
            <div className="col-3 ml-0 pl-0">
                <a className="arrow"> <ArrowForwardIosOutlinedIcon/> </a> 
            </div>
            <div className="col btn-font" style={{color: feature && '#07AED6'}}>
                Try it for Free
            </div>
            </div>
        </button>
            {/* <IconContext.Provider value={{size: '1.5em', color: '#01B0D7'}}>
                <button type="button" className="btn">
                    <div className="members-button">
                        <div className='button-try'>
                            <IoIosArrowForward />
                        </div>
                        <span>
                            {strings.buttonTryItForFree}
                        </span>
                    </div>
                </button>
            </IconContext.Provider> */}
        </>
    )
}

export default ButtonTry
