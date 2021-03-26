import React from 'react';
import '../pages/members/members.css';
import strings from '../assets/constants/strings';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';

const ButtonTry = () => {
    return (
        <>
            <IconContext.Provider value={{size: '1.5em', color: '#01B0D7'}}>
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
            </IconContext.Provider>
        </>
    )
}

export default ButtonTry
