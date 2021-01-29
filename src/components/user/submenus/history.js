import React from "react";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";

export default function History() {
  return (
    <div>
      <Grid container justify="center">
        <List aria-label="Vehicle List">
          <ListItem>
            <ListItemIcon>
              <HistoryIcon style={{ color: "#2fae69" }} />
            </ListItemIcon>
            <ListItemText primary="Histórico de Agendamentos" />
          </ListItem>
          <Divider />
          <ListItem>

          </ListItem>
        </List>
      </Grid>
    </div>
  );
}
