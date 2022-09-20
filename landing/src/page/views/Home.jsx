import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import "animate.css";
import { ExperienceCard } from "../components/ExperienceCard";
import { Quotes } from "../components/Quotes";

export const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 10,
        ml: { sm: "40vh" },
      }}
    >
      <Typography m={5} textAlign="center" variant="h5">
        Home
      </Typography>
      <Card
        sx={{
          mt: 6,
          boxShadow: 3,
        }}
        align="center"
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row", md: "row" },
          }}
        >
          <CardMedia sx={{ mb: 6 }}>
            <Avatar
              className="animate__slow animate__animated animate__bounce"
              sx={{
                width: "26vh",
                height: "26vh",
                mt: 2,
              }}
              alt="avatar"
              src="/avatarlogo.svg"
            />
          </CardMedia>

          <CardContent>
            <Typography
              color="primary.dark"
              gutterBottom
              component="div"
              variant="h4"
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
        </CardActionArea>
      </Card>
      <ExperienceCard />
      <Quotes />
    </Box>
  );
};
