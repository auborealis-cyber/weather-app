import React, { useState, useEffect } from "react";
import TypeIt from "typeit-react";

const DateFormat = ({ date }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const dayFormat = date.toLocaleDateString(undefined, { weekday: "long" });
  const formatDate = date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timeFormat = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div>
      <TypeIt>
        Local Time: {timeFormat} <br />
        {dayFormat}, {formatDate}.
      </TypeIt>
    </div>
  );
};

export default DateFormat;
