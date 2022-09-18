import { GitHub, WebAsset } from "@mui/icons-material";
import {
  Box,
  CardMedia,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { projects } from "../../../database/portfolio";

export const Portfolio = () => {
  return (
    <Box
      component="main"
      sx={{
        width: "75%",
        flexGrow: 1,
        p: 8,
        ml: { sm: "40vh" },
      }}
    >
      <Typography m={5} textAlign="center" variant="h5">
        Portfolio
      </Typography>
      {projects.map((project) => (
        <Grid
          sx={{ mb: 5 }}
          key={project.id}
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          xl={3}
        >
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ mt: 6, flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {project.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {project.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <Button
                  target="_blank"
                  href={project.githubLink}
                  variant="link"
                  startIcon={<GitHub />}
                >
                  GitHub
                </Button>
                <Button
                  target="_blank"
                  href={project.websiteLink}
                  variant="link"
                  startIcon={<WebAsset />}
                >
                  Website
                </Button>
              </Box>
            </Box>

            <CardMedia
              height="147"
              component="img"
              image={project.img}
              alt="project picture"
            />
          </Card>
        </Grid>
      ))}
    </Box>
  );
};
