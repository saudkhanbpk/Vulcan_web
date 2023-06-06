export const styles = {
  mainBox: {
    backgroundColor: "blue",
    p: "20px",
    color: "white",
    position: "relative",
    top: "100%",
  },
  // Sub Grid 1
  subGrid1Box: { pt: 1, pb: 0, display: "flex" },
  subGrid1BoxTypo: {
    fontSize: { lg: "30px", sm: "27px", xs: "21px" },
    fontWeight: "400",
    marginTop: { lg: "4px", xs: "0" },
  },
  subGrid1Typo: {
    display: "inline-block",
    fontSize: { lg: "18px", sm: "18px", xs: "16px" },
    marginTop: { xs: "7px" },
    fontWeight: "400",
  },
  // Sub Grid 2
  subGrid2: {
    display: "flex",
    flexDirection: { lg: "row", sm: "row" },
    justifyContent: { lg: "space-around", md: "start" },
    alignItems: "center",
  },
  subGrid2Typo: {
    margin: { lg: "10px", md: "10px", sm: "6px", xs: "6px" },
    display: "inline-block",
    cursor: "pointer",
    fontSize: "18px !important",
  },

  // Sub Grid 3
  subGrid3Icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: {
      lg:"50px",
      sx:"35px"
    },
    height: {
      lg:"50px",
      sx:"35px"
    },
    padding: "5px",
    color: "blue",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
