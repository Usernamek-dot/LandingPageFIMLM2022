import { Box, IconButton, Tooltip } from "@mui/material";
import { icons } from "../../../database/icons";

export const SocialMedia = () => {
  return (
    <>
      {icons.map((Icon) => (
        <Box key={Icon.id}>
          <Tooltip title={Icon.tooltip}>
            <IconButton
              color="primary"
              href={Icon.href}
              aria-label={Icon.arialabel}
            >
              <Icon.icon />
            </IconButton>
          </Tooltip>
        </Box>
      ))}
    </>
  );
};
