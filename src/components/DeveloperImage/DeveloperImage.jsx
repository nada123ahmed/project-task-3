import React from 'react';
import DeveloperImageSrc from '../../assets/Images/Avatar.jpeg';
import './DeveloperImage.css';
function DeveloperImage() {
  return (
    <div id="DeveloperImage">
       
      <img id='Image' src={DeveloperImageSrc} alt="Developer" />
    </div>
  );
}
export default DeveloperImage;