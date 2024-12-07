import React from 'react';
import Lottie from "lottie-react";
import MobileDev from "../LottieFiles/MobileDev.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { FaChessKnight } from "react-icons/fa";


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'm <b>Mariem Derbali</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={MobileDev}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          I love developing innovative solutions as a <b>full-stack</b> and <b>mobile app developer</b>, crafting impactful digital products that solve real-world challenges.<br /><br />
          I have strong expertise in <b>Laravel</b>, <b>React Native</b>, and <b>SwiftUI</b>, and I’m currently working on several projects using the <b>MERN</b> stack.<br /><br />
          Also, I love <b>chess</b> <FaChessKnight style={{ scale: "1.2", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img
            className='Avatar'
            src={Avatar}
            alt=""
           />

        </Tilt>
      </div>
    </div>
  )
}

export default Home