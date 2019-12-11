import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SeeImageModal from "./SeeImageModal";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    padding: "20px",
    marginBottom: "40px"
  },
  media: {
    cursor: "pointer",
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    margin: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  content: {
    borderTop: "1px solid rgba(0,0,0,0.1)"
  }
}));

export default function DishCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.card} square>
        <CardMedia
          image={props.dish.image}
          onClick={handleOpen}
          className={classes.media}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="subtitle1" color="textPrimary" component="p">
            {props.dish.shortDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.content}>
            <Typography paragraph>{props.dish.longDescription}</Typography>
          </CardContent>
        </Collapse>
      </Card>
      {open && (
        <SeeImageModal
          open={handleOpen}
          handleClose={handleClose}
          image={image}
        ></SeeImageModal>
      )}
    </>
  );
}
