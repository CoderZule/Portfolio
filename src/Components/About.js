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
            Hi, I'm <b>Mariem Derbali</b>, and I’m from Tunis, Tunisia.<br />
            I am a passionate <b>full-stack</b> and <b>mobile app developer</b> with a bachelor’s degree in <b>Information Technology</b> and a master’s degree in <b>Mobile Application Development</b>.<br /><br></br>

            During my academic journey, I completed three highly impactful internships that allowed me to refine my technical and problem-solving skills. As part of these experiences, I developed <b>B2B web platforms</b> in the role of a full-stack developer, delivering scalable and user-centric solutions to support business operations. Additionally, I designed and implemented a <b>B2C mobile application</b> as a mobile app developer, integrating advanced features to enhance user experience and optimize process efficiency in a targeted domain.<br /><br></br>

            I thrive on crafting innovative projects that balance functionality with aesthetic design. I’m also deeply committed to <b>continuous learning</b>, exploring new technologies to stay at the cutting edge of web and mobile development. You can check out some of my work in the Projects section.<br /><br></br>

            I’m always <b>open</b> to new collaborations and opportunities to contribute my skills while growing professionally. Let’s connect! My contact links are in the footer.
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