import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { languages } from "../../../database/languages";
import { TitlePage } from "../../common/components/TitlePage";

export const Languages = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 10,
        ml: { sm: "40vh" },
      }}
    >
      <TitlePage title="Languages" />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {languages.map((language) => (
            <Grid key={language.id} item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Card elevation={0} xs={12}>
                <Typography color="text.secondary" variant="p">
                  {language.alt}
                </Typography>

                <CardMedia
                  sx={{ height: 250, width: "100%" }}
                  component="img"
                  image={language.image}
                  alt={language.alt}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
