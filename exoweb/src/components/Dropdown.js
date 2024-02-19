import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Dropdown.css';

function Dropdown() {
  const [hovered, setHovered] = useState(false);
  // const [clicked, setClicked] = useState(false);

  // const toggleDropdown = () => {
  //   setClicked(!clicked);
  // }

  const handleMouseEnter = () => {
    setHovered(true);
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }
 
  return (
    <div className="team-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p className="page-link">Nos équipes</p>
          {/* <p className="page-link" onClick={toggleDropdown}>Nos équipes</p> */}
          {hovered && <div className="dropdown-container">
          {/* {(clicked || hovered) && <div className="dropdown-container"> */}
            <Link to="/">2024</Link>
            <Link to="/">2023</Link>
            <Link to="/">2022</Link>
            <Link to="/">2021</Link>
            <Link to="/">2020</Link>
            <Link to="/">2019</Link>
            </div>}
        </div>
  )
}

export default Dropdown;