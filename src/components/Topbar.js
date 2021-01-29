import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Avatar, Link as MaterialLink } from "@material-ui/core"; 
import { PrivateMenu, Menu } from "./Menu";
import {BrowserView, MobileView} from 'react-device-detect';

const logo = require("../images/NearGarage.png");
const profile = require("../images/profile.png");
const styles = (theme) => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "rgb(47 174 105)",
    color: "white",
  },
  inline: {
    display: "inline",
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  productLogo: {
    display: "inline-block",
    borderLeft: `1px solid ${theme.palette.grey["A100"]}`,
    marginLeft: 32,
    paddingLeft: 24,
    // [theme.breakpoints.up("md")]: {
    //   paddingTop: "1.5em",
    // },
  },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
    // [theme.breakpoints.up("md")]: {
    //   paddingTop: "0.8em",
    // },
  },
  iconContainer: {
    // display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginRight:50
    },
  },
  iconButton: {
    marginRight: 30,
    float: "left",
  },
  tabContainer: { 
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto",
  },
});

class Topbar extends Component {
  state = {
    value: 0,
    menuDrawer: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  mobileMenuOpen = (event) => {
    this.setState({ menuDrawer: true });
  };

  mobileMenuClose = (event) => {
    this.setState({ menuDrawer: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  current = () => {
    if (this.props.currentPath === "/home") {
      return 0;
    }
    if (this.props.currentPath === "/painel") {
      return 1;
    }
    if (this.props.currentPath === "/perfil") {
      return 2;
    }
    if (this.props.currentPath === "/wizard") {
      return 3;
    }
    if (this.props.currentPath === "/cards") {
      return 4;
    }
  };

  render() { 
    const { classes } = this.props;  
    

    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container  alignItems="baseline">
            <Grid item xs={12} className={classes.flex}>
              {/* {this.props.noTabs && ( */}
              <React.Fragment>
              <MobileView>
                <div className={classes.iconContainer}>
                  <IconButton
                    onClick={this.mobileMenuOpen}
                    className={classes.iconButton}
                    color="inherit"
                    aria-label="Menu"
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
                </MobileView>
                <div className={classes.tabContainer}>
                  <SwipeableDrawer
                    anchor="left"
                    open={this.state.menuDrawer}
                    onClose={this.mobileMenuClose}
                    onOpen={this.mobileMenuOpen}
                  >
                    <AppBar title="Menu" />
                    <List style={{ backgroundColor: "#2fae69" }}>
                      <ListItem style={{textAlign:'center'}}>
                       
                        {/* <IconButton
                          onClick={this.mobileMenuClose}
                          className={classes.iconButton}
                          color="inherit"
                          aria-label="Menu"
                        >
                          <CloseIcon style={{ color: "#fff" }} />
                        </IconButton> */}
                        <div
                          style={{
                            float: "right",
                            border: "1px solid white",
                            borderRadius: "100%",
                            marginRight:45
                          }}
                        >
                          <Avatar
                          onClick={() => window.location.href = 'perfil'}
                            alt={localStorage.getItem("user_nome")}
                            src={profile}
                          />
                            </div>
                               
  
                    
                      {Menu.map((item, index) => (
                        <ListItem style={{textAlign:'center', display: item.display, width:80 }}
                          component={item.external ? MaterialLink : Link}
                          href={item.external ? item.pathname : null}
                          to={
                            item.external
                              ? null
                              : {
                                  pathname: item.pathname,
                                  search: this.props.location.search,
                                }
                          }
                          button
                          key={item.label}
                        >
                          <ListItemText
                            color="white"
                            primary={
                              <Typography
                                style={{ color: "#fff" }}
                                variant="overline"
                                display="block"
                                gutterBottom
                              >
                                {item.label}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                      {/* {localstorage.getItem("has_oficina") === 0 ?<div></div>  
                        :PrivateMenu.map((item, index) => (
                          <ListItem
                            style={{ display: item.display }}
                            component={item.external ? MaterialLink : Link}
                            href={item.external ? item.pathname : null}
                            to={
                              item.external
                                ? null
                                : {
                                    pathname: item.pathname,
                                    search: this.props.location.search,
                                  }
                            }
                            button
                            key={item.label}
                          >
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))} */}
                          </ListItem>
                    </List>
                  </SwipeableDrawer>
                   <Tabs
                      value={this.current() || this.state.value}
                      indicatorColor='tertiary'
                      textColor='white'
                      onChange={this.handleChange}
                    >
                      {Menu.map((item, index) => (
                        <Tab
                          key={index}
                          component={item.external ? MaterialLink : Link}
                          href={item.external ? item.pathname : null}
                          to={
                            item.external
                              ? null
                              : {
                                  pathname: item.pathname,
                                  search: this.props.location.search,
                                }
                          }
                          classes={{ root: classes.tabItem }}
                          label={item.label}
                        />
                      ))}
                      {PrivateMenu.map((item, index) => (
                        <Tab
                          style={{
                            display:
                              localStorage.getItem("id_oficina") === null
                                ? "none"
                                : "flex",
                          }}
                          key={index}
                          component={item.external ? MaterialLink : Link}
                          href={item.external ? item.pathname : null}
                          to={
                            item.external
                              ? null
                              : {
                                  pathname: item.pathname,
                                  search: this.props.location.search,
                                }
                          }
                          classes={{ root: classes.tabItem }}
                          label={item.label}
                        />
                      ))}
                      )
                    </Tabs>  
                </div>
                <div className={classes.tabContainer}>
                  {/* <SwipeableDrawer
                      anchor='right'
                      open={this.state.menuDrawer}
                      onClose={this.mobileMenuClose}
                      onOpen={this.mobileMenuOpen}
                    >
                      <AppBar title='Menu' />
                      <List>
                        {Menu.map((item, index) => (
                          <ListItem
                            style={{ display: item.display }}
                            component={item.external ? MaterialLink : Link}
                            href={item.external ? item.pathname : null}
                            to={
                              item.external
                                ? null
                                : {
                                    pathname: item.pathname,
                                    search: this.props.location.search,
                                  }
                            }
                            button
                            key={item.label}
                          >
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))}
                      </List>
                      <List>
                        {PrivateMenu.map((item, index) => (
                          <ListItem
                            style={{ display: item.display }}
                            component={item.external ? MaterialLink : Link}
                            href={item.external ? item.pathname : null}
                            to={
                              item.external
                                ? null
                                : {
                                    pathname: item.pathname,
                                    search: this.props.location.search,
                                  }
                            }
                            button
                            key={item.label}
                          >
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))}
                      </List>
                    </SwipeableDrawer> */}
                </div>
              </React.Fragment>
              {/* )} */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Topbar));
