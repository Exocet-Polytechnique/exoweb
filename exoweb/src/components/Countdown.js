import React, {useState, useEffect} from "react";
import './Countdown.css';

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const monacoDate = new Date("6 June, 2024");
      const totalSeconds = (monacoDate - currentDate) / 1000;

      setDays(format(Math.floor(totalSeconds / 3600 / 24)));
      setHours(Math.floor(totalSeconds / 3600) % 24);
      setMinutes(Math.floor(totalSeconds / 60) % 60);
      setSeconds(Math.floor(totalSeconds % 60));
    });
    return () => clearInterval(interval);
  }, [seconds]);

  function format(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className="countdown">
      <div className="countdown-div">
        <div className="countdown-title">Décompte avant Monaco</div>
        <div className="values-div">
          <div className="countdown-values">
            <p className="values-text">{days}</p>
            <span>jours</span>
          </div>
          <div className="countdown-values">
            <p className="values-text">{hours}</p>
            <span>heures</span>
          </div>
          <div className="countdown-values">
            <p className="values-text">{minutes}</p>
            <span>minutes</span>
          </div>
          <div className="countdown-values">
            <p className="values-text">{seconds}</p>
            <span>secondes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown;