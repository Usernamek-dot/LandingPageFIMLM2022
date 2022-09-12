import { Grid, Box, Paper, Typography } from "@mui/material";
import BasicCard from "../components/HomeCard";

export const Home = () => {
  return (
    <>
      <Typography sx={{ ml: 40 }} color="primary" variant="h1">
        Home
      </Typography>
      <Grid sx={{ m: 30, ml: 40 }} container justify="between">
        <Grid item>
          <BasicCard />
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            <Paper color="warning" elevation={3} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
