import React from 'react';
import ProjectBox from './ProjectBox';
import MyTourismTunisiaImage from '../images/MyTourismTunisiaImage.png';
import iGoldPropertyImage from '../images/iGoldPropertyImage.png';
import apiSurvImage from '../images/apiSurvImage.png';
import apiSurvAdminImage from '../images/apiSurvAdminImage.png';
import PuzzleGameImage from '../images/PuzzleGameImage.png';
import TopStagesImage from '../images/TopStagesImage.png';
import MyDoctorImage from '../images/MyDoctorImage.png';
import BusinessProviderImage from '../images/BusinessProviderImage.png';
import GarageVParrotImage from '../images/GarageVParrotImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={apiSurvImage} projectName="apiSurv"  />
        <ProjectBox projectPhoto={apiSurvAdminImage} projectName="apiSurvAdmin" />
        <ProjectBox projectPhoto={iGoldPropertyImage} projectName="iGoldProperty"  />
        <ProjectBox projectPhoto={MyTourismTunisiaImage} projectName="MyTourismTunisia"  />
        <ProjectBox projectPhoto={PuzzleGameImage} projectName="PuzzleGame"  />
        <ProjectBox projectPhoto={GarageVParrotImage} projectName="GarageVParrot" />
        <ProjectBox projectPhoto={TopStagesImage} projectName="TopStages" />
        <ProjectBox projectPhoto={BusinessProviderImage} projectName="BusinessProvider" />
        <ProjectBox projectPhoto={MyDoctorImage} projectName="MyDoctor" />


      </div>

    </div>
  )
}

export default Projects