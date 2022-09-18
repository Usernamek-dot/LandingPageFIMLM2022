import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

export const Footer = () => {
  return (
    <>
      <Typography variant="h4">
        Landing Page &reg; {new Date().getFullYear}{" "}
      </Typography>
      <footer>
        <Container p={{ xs: 3, sm: 10 }} bgcolor="secondary" maxWidth="lg">
          <Grid
            item
            pb={{ xs: 5, sm: 0 }}
            pt={{ xs: 5, sm: 10 }}
            xs={12}
            sm={4}
            sx={{ textAlign: "center", borderBottom: 1 }}
          >
            <Typography>
              Landing Page &reg; {new Date().getFullYear}{" "}
            </Typography>
          </Grid>
        </Container>
      </footer>
    </>
  );
};
