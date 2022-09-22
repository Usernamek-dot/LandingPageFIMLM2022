import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const ExperienceCard = () => {
  return (
    <Card sx={{ mt: 5, boxShadow: 3 }}>
      <CardActionArea>
        <CardContent>
          <Typography color="secondary" variant="h4" component="div">
            Experience
          </Typography>
          <Typography sx={{ mt: 2, mb: 1.5 }} color="text.secondary">
            {bull} I had worked with PHP crud and HTML with CSS frontend.
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {bull} I have practiced jquery and javascript doing small exercises
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {bull} I have participated in Codevita 2020 challenge.
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {bull} I have made 3 team projects in my life.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
