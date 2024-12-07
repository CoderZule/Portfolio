import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {


    //Mobile apps
    apiSurvDesc: "A cross-platform mobile app for Tunisian beekeepers that simplifies hive and apiary management with features like QR code hive identification, inspection records, task scheduling, harvest tracking, financial monitoring, detailed statistics and bee health management.",
    apiSurvGithub: "https://github.com/CoderZule/apiSurv",

    iGoldPropertyDesc: "A sleek iOS app for the Tunisian real estate market, helping users easily rent, buy, or invest in properties. With high-resolution photos and videos, it offers an immersive experience for browsing listings and finding the best options across Tunisia.",
    iGoldPropertyGithub: "https://github.com/CoderZule/iGoldProperty",

    MyTourismTunisiaDesc: "An Android app designed to guide tourists and enhance their travel experience in Tunisia. It features interactive maps and detailed information on local attractions, helping users navigate and explore the country's rich cultural and historical sites with ease.",
    MyTourismTunisiaGithub: "https://github.com/CoderZule/MyTourismTunisia",


    PuzzleGameDesc: "An engaging Android puzzle game where players can solve picture puzzles with a timer and scoring system. Choose from preset images, select a custom one from your gallery, or snap a photo to create personalized puzzles for endless fun!",
    PuzzleGameGithub: "https://github.com/CoderZule/PuzzleGame",

    GussingGameDesc: "A fun Android guessing game where players try to guess a random number before the timer runs out. Pick your difficulty level, earn points for correct guesses, and see your name in the top players' history.",
    GussingGameGithub: "https://github.com/CoderZule/GuessingGame-Kotlin",


    //Web apps
    apiSurvAdminDesc: "An Admin Web Interface for administrators to efficiently manage user accounts and forage data. It provides comprehensive control over creating, viewing, editing, and deleting accounts and forage records, ensuring that all information is accurate, up-to-date, and well-organized for seamless operations.",
    apiSurvAdminGithub: "https://github.com/CoderZule/apiSurvAdmin",

    GarageVParrotDesc: "A french digital solution that simplifies access to auto repair services and used vehicle searches, enhancing customer convenience and streamlining the process.",
    GarageVParrotGithub: "https://github.com/CoderZule/GarageVParrot",


    TopStagesDesc: "An advanced web platform for internship management designed to streamline recruitment processes. It enables organizations to identify the most suitable candidates through psychometric tests with scoring, simplifies the management of internship documents, and empowers students to apply for internships, track their application progress, and easily download essential documents.",
    TopStagesGithub: "https://github.com/CoderZule/TopstagesReactJS",

    BusinessProviderDesc: "A web platform designed to connect business providers with Topnet. This platform enables users to propose offers in exchange for commissions. Its primary goals are to generate more business opportunities, streamline commercial prospecting, and facilitate direct engagement with professional clients, specifically targeting enterprise and key account businesses.",
    BusinessProviderGithub: "https://github.com/CoderZule/Topnetb2b",

    MyDoctorsDesc: "A comprehensive web platform for streamlined medical appointment scheduling. It features an intuitive interface for patients to book, manage, and track their appointments, while enabling healthcare professionals to organize their schedules efficiently, enhancing the overall patient-doctor experience.",
    MyDoctorsGithub: "https://github.com/CoderZule/MyDoctors",

  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>


      </div>
    </div>
  );
}

export default ProjectBox;
