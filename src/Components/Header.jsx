import React from 'react';
import LeftSideData from './LeftSideData';
import Footer from '../Footer';
import RightSide from './RightSide';
import logo from '/media/techno/D drive/Tonic Sign Up/signup/src/images/tonic_logo.png';
const Header = () => {
    return (  
        <div>
            <div className="container">
                <div className="container-fluid">
                    <div className="image">
                        <img src={logo} alt="No Pic"></img>
                    </div>
                    {/* <div className="row image"> */}
                    {/* </div> */}
                </div>
            </div>
            <div className="row">
                 <div className="col-md-3 leftSide">
                    <LeftSideData></LeftSideData>
                </div>
                <div className="col-md-9 rightSide">
                    <RightSide></RightSide>
                </div>
            </div>
               
            <div className="container">
                <div className="container-fluid">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}
 
export default Header;