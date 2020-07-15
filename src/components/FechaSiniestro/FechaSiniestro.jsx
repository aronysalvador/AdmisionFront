import React, { useEffect, useState } from "react";
import { meses, getActualDate } from "../../util/FechasUtils";
import { Button, Grid } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const FechaSiniestro = ({ onChange }) => {
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
    onChange({ days, month, year });
  }, [days, month, year, monthLastDay]);

  const { name: monthName } = meses.find((x) => x.id === month);

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      style={{
        borderStyle: "solid",
        borderSpacing: "2px",
        borderColor: "lightgray",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <Grid item>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            setDays((d) => --d);
          }}
        >
          <KeyboardArrowLeft />
        </Button>
      </Grid>
      <Grid item>
        <span
          style={{
            fontFamily: "Helvetica",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >{`${days} ${monthName}`}</span>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          size="small"
          disabled={days === actualDay && month === actualMonth}
          onClick={() => {
            setDays((d) => ++d);
          }}
        >
          <KeyboardArrowRight />
        </Button>
      </Grid>
    </Grid>
  );
};

export default FechaSiniestro;
