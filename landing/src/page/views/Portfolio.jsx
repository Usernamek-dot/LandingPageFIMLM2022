import { GitHub, WebAsset } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
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
        <div
          key={project.id}
          className="shadow[#f5f6fa]  shadow-lg shadow-md
          mb-7 max-w-md mx-auto  rounded-xl overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex ">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={project.img}
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <div className=" uppercase tracking-wide text-sm font-semibold">
                {project.title}
              </div>
              <p className="mt-2 text-slate-500"> {project.description}</p>
              <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline focus:outline-none p-3 ">
                <Button
                  role="button"
                  target="_blank"
                  href={project.githubLink}
                  variant="link"
                  startIcon={<GitHub />}
                  sx={{ bgcolor: "primary.dark" }}
                >
                  GitHub
                </Button>
                <Button
                  target="_blank"
                  href={project.websiteLink}
                  variant="link"
                  startIcon={<WebAsset />}
                  sx={{ bgcolor: "primary.dark" }}
                >
                  Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Box>
  );
};
