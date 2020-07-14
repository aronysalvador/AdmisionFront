import React, { useEffect, useState } from "react";
import { meses } from "../../util/meses";

const FechaSiniestro = () => {
  const [days, setDays] = useState(() => {
    return new Date().getDate();
  });

  const [month, setMonth] = useState(() => {
    return new Date().getMonth() + 1;
  });

  const [year, setYear] = useState(() => {
    return new Date().getFullYear();
  });

  const [monthLastDay, setMonthLastDay] = useState(() => {
    return new Date(year, month, 0).getDate();
  });

  useEffect(() => {
    if (days < 1) {
      if (month === 1 && days < 1) {
        setMonth(12);
        setDays(31);
        setYear((y) => --y);
      } else {
        setMonth((m) => --m);
        setDays(new Date(year, month - 1, 0).getDate());
        setMonthLastDay(new Date(year, month - 1, 0).getDate());
      }
    }
    if (days > monthLastDay) {
      if (month === 12 && days > 31) {
        setMonth(1);
        setDays(1);
        setYear((y) => ++y);
      } else {
        setMonth((m) => ++m);
        setDays(1);
        setMonthLastDay(new Date(year, month + 1, 0).getDate());
      }
    }
  }, [days, month, year, monthLastDay]);

  const { name: monthName } = meses.find((x) => x.id === month);
  console.log({ days, monthName, year, monthLastDay });

  return (
    <div className="fecha-container">
      <div className="caja">
        <button
          onClick={() => {
            setDays((d) => --d);
          }}
        >
          Down
        </button>
      </div>
      <div className="caja">
        <span>{`${days} ${monthName}`}</span>
      </div>
      <div className="caja">
        <button
          onClick={() => {
            setDays((d) => ++d);
          }}
        >
          Up
        </button>
      </div>
    </div>
  );
};

export default FechaSiniestro;
