import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Dropdown.css';

function Dropdown() {
  const [clicked, setClicked] = useState(false);
 
  return (
    <div className="team-container">
          <p className="page-link" onClick={()=>setClicked(!clicked)}>Nos équipes</p>
          {clicked && <div className="dropdown-container">
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