import React from 'react'
import {BrowserRouter , Routes ,Route  } from "react-router-dom";
import OurMission from './../components/ourMission/OurMission';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<OurMission />}></Route>
                </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router
