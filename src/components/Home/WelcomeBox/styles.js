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
