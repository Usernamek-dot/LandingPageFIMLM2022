import {
  Box,
  Typography,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { quotes } from "../../../database/quotes";

export const Quotes = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 7,
      }}
    >
      {quotes.map((quote) => (
        <Accordion key={quote.id} sx={{ mt: 6 }} xs={12} md={6} lg={12}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="accordion of quotes"
          >
            <Typography>{quote.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{quote.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
