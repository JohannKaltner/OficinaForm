import React from "react";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
export default function MyVehicles() {
  return (
    <div>
      <Grid container justify="center">
        <List aria-label="Vehicle List">
          <ListItem>
            <ListItemIcon>
              <DirectionsCarIcon style={{ color: "#2fae69" }} />
            </ListItemIcon>
            <ListItemText primary="Meus Veículos" />
          </ListItem>
          <Divider />
          <ListItem>

          </ListItem>
        </List>
      </Grid>
    </div>
  );
}
