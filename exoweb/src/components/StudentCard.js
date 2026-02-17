import React, {useState} from "react";
import linkedinLogo from '../img/misc/blue_linkedin_logo.png';
import './StudentCard.css';

function StudentCard(props) {
  const image = props.image;
  const bio = props.bio;
  const name = props.name;
  const title = props.title;
  const linkedin = props.linkedin;
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const [rising, setIsRising] = useState(false);
  const maxHeight = 225;

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  const handleMouseEnter = async () => {
    if (rising) {
      return;
    }
    setIsRising(true);
    setVisible(true);
    for (var i = height; i <= maxHeight ; i++) {
        setHeight(i);
        await timeout(2);
    }
    setIsRising(false);
  }

  const handleMouseLeave = async () => {
    for (var i = height; i > 0 ; i--) {
      setHeight(i);
      await timeout(2);
    }
    setVisible(false);
  }

    return (
        <div className="student-card">
            <div className="picture-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={image} alt="Student" className="student-image" />
            </div>
            <span className="student-name-container">
              <p className="student-name">{name}</p>
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} alt="LinkedIn" className="linkedin-logo-inline" />
                </a>
              )}
            </span>
            <p className="student-title">{title}</p>
            
        </div>
    );
}

export default StudentCard;