import React from 'react'
import './WelcomeBox.scss';
import Teach from '../../../assets/teach.png';
import Learn from '../../../assets/learn.png';
const WelcomeBox = () => {
  return (
    <div className="welcome-box">
      <div className="header">
        <div className="iconHeader-1">
        <img src={Teach} alt="" srcset="" />
        <p>Teach</p>
        <hr className='header-icon-base'/>
        </div>

        <hr className='header-div'/>

        <div className="iconHeader-2">
        <img src={Learn} alt="" srcset="" />
        <p>Learn</p>
          <hr className='header-icon-base'/>
        </div>
      </div>
      <h3>Become an Educator on the Vulcan platform</h3>
    <p>Teach live online classes on any subject matter of your expertise. Keep 100% of the earnings.</p>
    </div>
  )
}

export default WelcomeBox;