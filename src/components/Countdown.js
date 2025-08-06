import React, {useState, useEffect} from "react";
import './Countdown.css';

function Countdown() {
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const monacoDate = new Date("1 July, 2026");
      const totalSeconds = (monacoDate - currentDate) / 1000;

      let years = monacoDate.getFullYear() - currentDate.getFullYear();
      let months = monacoDate.getMonth() - currentDate.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }
      months += years * 12;
      if (currentDate.getDate() > monacoDate.getDate()) {
        months--;
      }

      if (totalSeconds <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        if (months >= 2) {
          setMonths(months);
          setDays(format(Math.floor((totalSeconds / 3600 / 24) % 30.44)));
          setHours(Math.floor(totalSeconds / 3600) % 24);
          setMinutes(Math.floor(totalSeconds / 60) % 60);
          setSeconds(null);
        } else {
          setMonths(null);
          setDays(format(Math.floor(totalSeconds / 3600 / 24)));
          setHours(Math.floor(totalSeconds / 3600) % 24);
          setMinutes(Math.floor(totalSeconds / 60) % 60);
          setSeconds(Math.floor(totalSeconds % 60));
        }
      }
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
          {months != null && (
          <div className="countdown-values">
            <p className="values-text">{months}</p>
            <span>mois</span>
          </div>
          )}
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
          {seconds != null && (
          <div className="countdown-values">
            <p className="values-text">{seconds}</p>
            <span>secondes</span>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Countdown;
