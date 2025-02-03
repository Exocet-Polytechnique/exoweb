import {React} from "react";
import './SideBar.css';
import { Link } from "react-router-dom";

function SideBar() {
    return (
      <div className="side-bar">
        <div className="team-links">
          <Link to="/team2025" className="team-link">2025</Link>
          <Link to="/team" className="team-link">2024</Link>
          <Link to="/team" className="team-link">2023</Link>
          <Link to="/team" className="team-link">2022</Link>
          <Link to="/team" className="team-link">2021</Link>
          <Link to="/team" className="team-link">2020</Link>
          <Link to="/team" className="team-link">2019</Link>
        </div>
      </div>
    )
  
}

  
export default SideBar;