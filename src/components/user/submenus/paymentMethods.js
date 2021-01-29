import React from "react";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
export default function PaymentMethods() {
  return (
    <div>
      <Grid container justify="center">
        <List aria-label="Vehicle List">
          <ListItem>
            <ListItemIcon>
              <PaymentIcon style={{ color: "#2fae69" }} />
            </ListItemIcon>
            <ListItemText primary="Métodos de Pagamento" />
          </ListItem>
          <Divider />
          <ListItem>

          </ListItem>
        </List>
      </Grid>
    </div>
  );
}
