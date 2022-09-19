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

export const StudiesCard = ({
  title,
  date,
  image,
  description,
  aditionalContent,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        justifycontent="between"
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }} aria-label="avatar">
            E
          </Avatar>
        }
        title={title}
        subheader={date}
      />
      <CardMedia component="img" height="194" image={image} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandingMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="primary"
        >
          <ExpandMore />
        </ExpandingMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{aditionalContent}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
