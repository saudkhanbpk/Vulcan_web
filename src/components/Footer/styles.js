export const styles = {
  mainBox: { backgroundColor: "blue", p: "20px", color: "white" ,
  position : "relative",
  top:"100%"
},
  // Sub Grid 1
  subGrid1Box: { pt: 1, pb: 0, display: "flex" },
  subGrid1BoxTypo: {
    fontSize: { lg: "30px", sm: "27px", xs: "21px" },
    fontWeight: "400",
    marginTop: { lg: "4px", xs: "10px" },
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
  subGrid2Typo: { margin: "10px", display: "inline-block", cursor: "pointer" },

  // Sub Grid 3
  subGrid3Icon: {
    marginTop: "21px",
    justifyContent: "center",
    display: "flex",
    backgroundColor: "white",
    width: "50px",
    height: "50px",
    padding: "10px",
    color: "blue",
    borderRadius: "10px",
    cursor: "pointer",
    marginLeft: { lg: "60px", xs: "10px" },
  },
};
