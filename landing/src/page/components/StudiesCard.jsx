import {
  CardContent,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  styled,
  Typography,
  Collapse,
  CardActions,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { studies } from "../../../database/studies";
import { ExpandMore } from "@mui/icons-material";

const ExpandingMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.longest,
  }),
}));

export const StudiesCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {studies.map((study) => {
        return (
          <Card key={study.id}>
            <CardHeader
              justifycontent="between"
              avatar={<Avatar aria-label="avatar">E</Avatar>}
              title={study.title}
              subheader={study.date}
            />
            <CardMedia
              component="img"
              height="194"
              image={study.image}
              alt={study.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {study.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandingMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMore />
              </ExpandingMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{study.aditionalContent}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </>
  );
};
