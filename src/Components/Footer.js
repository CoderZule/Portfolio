import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiCodeforces} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Design & Built by Mariem Derbali</h4>
      <div className='footerLinks'>
        <a href="https://github.com/CoderZule" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mari99/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:mariem.derbali20@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://codeforces.com/profile/CoderZule/" target="_blank"><SiCodeforces/></a>
      </div>
    </footer>
  )
}

export default Footer