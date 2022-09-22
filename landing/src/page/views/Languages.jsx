import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { languages } from "../../../database/languages";
import { TitlePage } from "../../common/components/TitlePage";
import { Searchbar } from "../components/Searchbar";

const filterData = (query, data) => {
  if (!query) data;
  else return data.filter((d) => d.alt.toLowerCase().includes(query));
};

export const Languages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = filterData(searchQuery, languages);
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
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((language) => (
              <Grid key={language.id} item xs={12} sm={6} md={6} lg={3} xl={3}>
                <Card elevation={0} xs={12}>
                  <Typography color="text.secondary" variant="p">
                    {language.alt}
                  </Typography>

                  <CardMedia
                    className="animate__animated animate__heartBeat "
                    sx={{ height: 250, width: "100%" }}
                    component="img"
                    image={language.image}
                    alt={language.alt}
                  />
                </Card>
              </Grid>
            ))
          ) : (
            <>
              {" "}
              {languages.map((language) => (
                <Grid
                  key={language.id}
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  xl={3}
                >
                  <Card elevation={0} xs={12}>
                    <Typography color="text.secondary" variant="p">
                      {language.alt}
                    </Typography>

                    <CardMedia
                      className="animate__animated animate__heartBeat "
                      sx={{ height: 250, width: "100%" }}
                      component="img"
                      image={language.image}
                      alt={language.alt}
                    />
                  </Card>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Box>
    </Box>
  );
};
