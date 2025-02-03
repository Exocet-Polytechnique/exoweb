import React, {useState} from "react";
import './StudentCard.css';

function StudentCard(props) {
  const image = props.image;
  const bio = props.bio;
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
                {visible && <div className="description-cover" style={{height, top: `calc(100% - ${height}px)`}}>
                    <p className="description-text" style={{height: "75%"}}>{bio}</p>
                </div>}
            </div>
            <p className="student-name">{name}</p>
            <p className="student-title">{title}</p>
        </div>
    );
}

export default StudentCard;