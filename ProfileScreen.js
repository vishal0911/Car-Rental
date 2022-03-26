import React from 'react';
import './ProfileScreen.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import 'animate.css';
import { useHistory } from 'react-router-dom';

function ProfileScreen() {

    const history = useHistory();

    return (
        <div className="profileScreen">

            <div className="gradient"></div>
            <div className="box">
                <img className="animate__animated animate__backInLeft" src="https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2018/04/16124510/mcqueen.png" alt="" />
                <h4  className="animate__animated animate__zoomIn animate__delay-1s" onClick={() => history.push('/data')}>Go<span><KeyboardDoubleArrowRightIcon /></span></h4>
            </div>


        </div>
    )
}

export default ProfileScreen;