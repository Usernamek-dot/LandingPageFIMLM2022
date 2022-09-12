import { Button, Typography } from "@mui/material";

export const Home = () => {
  return (
    <div className="mt-10">
      <Typography sx={{ ml: 40 }} color="primary" variant="h1">
        Home
      </Typography>
      <Button sx={{ ml: 40 }} large variant="contained" color="secondary">
        Home
      </Button>
    </div>
  );
};
