import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <ExpandMoreIcon />
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.owned ? (
          <>
            <StyledMenuItem>
              <ListItemIcon>
                <EditIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <ReportIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <DeleteIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </StyledMenuItem>
          </>
        ) : (
          <StyledMenuItem>
            <ListItemIcon>
              <ReportIcon color="secondary" fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </StyledMenuItem>
        )}
      </StyledMenu>
    </div>
  );
}
