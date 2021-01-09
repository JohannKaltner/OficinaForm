import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  ButtonGroup,
  Button,
  Avatar,
  Grid,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const image = require("../../images/NearGarage.png");
const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4",
];

const styles = (muiBaseTheme) => ({
  card: {
    height: "100",
    maxWidth: 800,
    margin: "auto",
    // padding: 20,
    paddingRight:30,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    width: 700,
    [muiBaseTheme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3,
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit,
    },
  },
});

function CardOficinaMap(props) {
  console.log(props);
  const { classes, oficinas } = props;
  return (
    <div className="App">
      <Card className={classes.card}>
        {/* <div style={{display:'inline-block'}}>
        <CardMedia className={classes.media} image={image} />
        </div> */}
        <div style={{ display: "inline-block" }}>
          <CardContent className={classes.content}>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              {oficinas.nome}
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              {oficinas.rua} - {oficinas.bairro}, {oficinas.cidade}
            </Typography>
            <Divider className={classes.divider} light />
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              Comentários
            </Typography>
            <Grid container direction="row" alignItems="center">
              {/* <Grid item xs={12}> */}
              <Grid item xs={12}>
                {faces.map((face) => (
                  <Avatar className={classes.avatar} key={face} src={face} />
                ))}
                <Divider style={{marginTop:15, marginBottom:15}} />
              </Grid>
              <Grid container spacing={2}>
              <Divider />
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" fullWidth>
                    Agendar
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" fullWidth>
                    Detalhes
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
export default withStyles(styles)(CardOficinaMap);
