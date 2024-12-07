import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Mariem Derbali</b>, and I’m from Tunis, Tunisia.
            I am a passionate <b>full-stack</b> and <b>mobile app developer</b> with a <b>bachelor’s degree</b> in Information Systems Development and a <b>master’s degree</b> in Mobile Application Development. <br /><br />
            During my academic journey, I had the opportunity to complete two impactful internships that honed my development skills. At Topnet, a leading telecommunications company, I worked as a <b>full-stack developer</b>, designing and building a <b>B2B</b> web platform to streamline internship management processes. At CFPA Takelsa, an agricultural training center,
            I served as a <b>mobile app developer</b>, creating a <b>B2C</b> mobile application for a beekeeping information system. My passion lies in crafting innovative projects with a focus on both functionality and aesthetic design. Feel free to explore some of my work in the Projects section.<br /><br />
            I’m always <b>open</b> to new collaborations and opportunities to contribute my skills while continuing to grow professionally. Let’s connect! You can find my contact links in the footer.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='Laravel' />
        <Skills skill='VueJS' />
        <Skills skill='Javascript' />
        <Skills skill='Bootstrap' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='ReactJS' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Firebase' />
        <Skills skill='MySQL' />
        <Skills skill='Python' />
        <Skills skill='ReactNative' />
        <Skills skill='SwiftUI' />
        <Skills skill='Kotlin' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Docker' />
        <Skills skill='Figma' />
        <Skills skill='Jira' />
        <Skills skill='Postman' />
       

      </div>
    </>
  )
}

export default About