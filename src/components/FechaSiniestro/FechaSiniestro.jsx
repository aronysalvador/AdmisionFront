import React, { useEffect, useState } from "react";
import { meses, getActualDate } from "../../util/FechasUtils";
import { Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

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

  const { actualDay, actualMonth, actualYear } = getActualDate();

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

  console.log({
    days,
    monthName,
    year,
    monthLastDay,
    actualDay,
    actualMonth,
    actualYear,
  });

  return (
    <div className="fecha-container">
      <div className="caja">
        <Button
          style={{ backgroundColor: "#00B2A9" }}
          variant="contained"
          size="small"
          onClick={() => {
            setDays((d) => --d);
          }}
        >
          <KeyboardArrowLeft style={{ color: "#FFFFFF" }} />
        </Button>
      </div>
      <div className="caja">
        <span>{`${days} ${monthName}`}</span>
      </div>
      <div className="caja">
        <Button
          style={{ backgroundColor: "#00B2A9" }}
          variant="contained"
          size="small"
          disabled={days === actualDay && month === actualMonth}
          onClick={() => {
            setDays((d) => ++d);
          }}
        >
          <KeyboardArrowRight style={{ color: "#FFFFFF" }} />
        </Button>
      </div>
    </div>
  );
};

export default FechaSiniestro;
