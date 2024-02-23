import React, {useState} from "react";
import './StudentCard.css';

function StudentCard(props) {
  const name = props.name;
  const title = props.title;
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const [rising, setIsRising] = useState(false);
  const maxHeight = 191;

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
        <div className="temporary-picture"></div>
        {visible && <div className="description-cover" style={{height, top: `calc(100% - ${height}px)`}}>
          <p className="description-text" style={{height: "75%"}}>so long as you remember who you used to be. i wont forget not one word of this, not ever. i will always remember, when the doctor was me.</p>
        </div>}
      </div>
      <p className="student-name">{name}</p>
      <p className="student-title">{title}</p>     
    </div>
  )
}

export default StudentCard;