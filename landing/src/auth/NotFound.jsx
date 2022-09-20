import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  // const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1);
  // };
  // onClick={goBack}
  return;
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: "100vh" }}
  >
    <Grid sx={{ m: 4 }} item md={6} xs={12}>
      <Typography variant="h5" gutterBottom>
        Sorry, could not find it for you.
      </Typography>
      {/* <Button uppercase variant="outlined">
          Go Back
        </Button> */}
    </Grid>
    <Grid item md={6} xs={12}>
      <img height="200" src="./errorpage.svg" alt="404 not found" />
    </Grid>
  </Grid>;
};
