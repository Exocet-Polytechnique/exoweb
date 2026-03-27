import React, {useState} from "react";
import './StudentCard.css';

function StudentCard(props) {
  const image = props.image;
  const name = props.name;
  const title = props.title;
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
            </span>
            <p className="student-title">{title}</p>
            
        </div>
    );
}

export default StudentCard;