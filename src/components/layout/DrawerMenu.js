import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const DrawerMenu = ({
  visibleDrawer = false,
  toggleDrawer = () => {},
  listMenuItem = [],
}) => {
  const classes = useStyles();

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {listMenuItem.map((el) => {
          return (
            <React.Fragment key={el.name}>
              <ListItem button>
                <Link to={el.link}>
                  <ListItemText primary={el.name} />
                </Link>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );

  return (
    <Drawer anchor="left" open={visibleDrawer} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
};
export default DrawerMenu;
