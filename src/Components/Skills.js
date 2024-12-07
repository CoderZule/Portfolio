import React from 'react';
import { FaLaravel, FaReact, FaPython, FaGitAlt, FaGithub, FaFigma, FaBootstrap, FaCss3Alt, FaHtml5, FaSwift, FaDocker, FaVuejs  } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiJirasoftware, SiMysql } from "react-icons/si";
import { TbBrandReactNative, TbBrandKotlin } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";


const Skills = ({ skill }) => {
  const icon = {
    Laravel: <FaLaravel />,
    VueJS: <FaVuejs />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    ReactJS: <FaReact />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Firebase: <IoLogoFirebase />,
    MySQL: <SiMysql />,
    Python: <FaPython />,
    ReactNative: <TbBrandReactNative />,
    SwiftUI: <FaSwift />,
    Kotlin: <TbBrandKotlin />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Docker: <FaDocker />,
    Figma: <FaFigma />,
    Jira: <SiJirasoftware />,
    Postman: <SiPostman />,


  }

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
