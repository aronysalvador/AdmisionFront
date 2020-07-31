import { makeStyles } from "@material-ui/core/styles";

export const getTrabajoHabitualCardStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FFF",
    borderRadius: "10px",
    padding: "15px;",
  },
  cardIconContainer: {
    paddingLeft: "15px",
  },
  cardTextContainer: {
    padding: "0px 20px 20px 20px",
  },

  cardText: {
    fontFamily: "Catamaran",
    fontSize: "16px",
  },
}));
