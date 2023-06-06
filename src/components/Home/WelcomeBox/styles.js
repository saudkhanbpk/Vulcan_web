import { Paper, styled } from "@mui/material";

export const styles = {
  mainGrid: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  item: { borderRadius: "20px" },
  subGrid: { cursor: "pointer" },
  subGridIconClicked: { fontSize: "3.1875rem", color: "blue" },
  subGridIconNotClicked: { fontSize: "3.1875rem" },
  dividerAfterClick: { opacity: 1, color: "blue" },
  dividerbeforeClick: { opacity: 0 },

  dividerStyle: {
    height: "40px",
    width: "2px",
    backgroundColor: "black",
    border: "none",
    margin: "20px 0",
    position: "relative !important",
    opacity: "0.2 !important",
    mb: "15px",
  },
  boxDescription: { fontFamily: "Inter", pt: "12px" },
  textCapitalize: { textTransform: "capitalize" },
};
export const MyBox = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  height: 421,
  width: 500,
  borderRadius: `${20} !important`,
  fontSize: 23,
  padding: 40,
  paddingTop: 20,
  marginTop: 40,
  marginLeft: 180,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",

  "@media (max-width: 600px)": {
    textAlign: "center",
    height: 600,
    width: 600,
    fontSize: 16,
  borderRadius: `${0} !important`,
    padding: 30,
    paddingTop: 30,
    marginLeft: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
}));
