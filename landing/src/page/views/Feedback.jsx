import { Box, Button, Typography } from "@mui/material";
import { TitlePage } from "../../common/components/TitlePage";
import { Form } from "../components";

export const Feedback = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 10,
        ml: { sm: "40vh" },
      }}
    >
      <TitlePage title=" Feedback form" />
      <Form />
    </Box>
  );
};
