import { Typography } from "@mui/material";

export const TitlePage = ({ title }) => {
  return (
    <Typography color="primary" m={5} textAlign="center" variant="h5">
      {title}
    </Typography>
  );
};
