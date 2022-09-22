import { GitHub, WebAsset } from "@mui/icons-material";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { projects } from "../../../database/portfolio";
import { TitlePage } from "../../common/components/TitlePage";

export const Portfolio = () => {
  return (
    <Box
      component="main"
      sx={{
        width: "75%",
        flexGrow: 1,
        p: 8,
        ml: { sm: "45vh" },
      }}
    >
      <TitlePage title="Portfolio" />
      {projects.map((project) => (
        <Card
          key={project.id}
          sx={{ boxShadow: 3 }}
          className=" 
          mb-7  mx-auto  rounded-xl overflow-hidden md:max-w-2xl "
        >
          <Box className="md:flex  ">
            <Box className="md:shrink-0">
              <img
                className=" md:h-full md:w-48 h-96 w-full object-cover "
                src={project.img}
                alt="project photo"
              />
            </Box>
            <Box p={1}>
              <CardContent>
                <Typography
                  className=" uppercase tracking-wide text-sm font-semibold"
                  color="primary"
                >
                  {project.title}
                </Typography>
                <Typography
                  sx={{ mt: 3 }}
                  variant="body2"
                  color="text.secondary"
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  role="button"
                  target="_blank"
                  href={project.githubLink}
                  variant="link"
                  startIcon={<GitHub />}
                  sx={{ bgcolor: "secondary.light" }}
                >
                  GitHub
                </Button>
                <Button
                  target="_blank"
                  href={project.websiteLink}
                  variant="link"
                  startIcon={<WebAsset />}
                  sx={{ bgcolor: "secondary.light" }}
                >
                  Website
                </Button>
              </CardActions>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};
