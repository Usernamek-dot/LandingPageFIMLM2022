import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
} from "@mui/material";
import "animate.css";

export const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 10,
        ml: { sm: "30vh" },
      }}
    >
      <Grid
        display="flex"
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        columns={16}
      >
        <Grid sx={{ mt: 6 }} item xs={12} md={8}>
          <Card sx={{ height: "60vh" }}>
            <CardContent align="justify">
              <Typography
                sx={{ mt: 6 }}
                color="secondary.main"
                gutterBottom
                variant="h4"
                component="div"
              >
                Let's dive in !
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                This is my landing page.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I am a developer student focused in Front-end.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ mt: 6 }} item xs={12} md={6}>
          <Avatar
            className="animate__slow animate__animated animate__bounce"
            sx={{ width: "56vh", height: "56vh" }}
            alt="avatar"
            src="/avatarlogo.svg"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
