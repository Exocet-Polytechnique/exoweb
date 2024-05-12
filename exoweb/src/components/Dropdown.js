import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Dropdown.css';

function Dropdown() {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }

  return (
    <div className="team-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p><Link to="/Team" className="page-link">Nos Équipes</Link></p>
          {/* <p className="page-link" onClick={toggleDropdown}>Nos équipes</p> */}
          {hovered && (<div className="dropdown-container">
          {/* {(clicked || hovered) && <div className="dropdown-container"> */}
            <Link to="/Team">2024</Link>
            <Link to="/Team">2023</Link>
            <Link to="/Team">2022</Link>
            <Link to="/Team">2021</Link>
            <Link to="/Team">2020</Link>
            <Link to="/Team">2019</Link>
            </div>)}
        </div>
  )
}

export default Dropdown;