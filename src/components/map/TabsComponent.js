import React, { Component } from "react";
import Topbar from "../Topbar";
//import Map from "./Map";
import ReactMapGL, {
  Layer,
  Feature,
  Marker,
  ScaleControl,
  ZoomControl,
  RotationControl,
} from "react-mapbox-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import { Divider, InputLabel, TextField, Typography } from "@material-ui/core";
import ExploreIcon from "@material-ui/icons/Explore";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./map.css";
// import { TabPanel } from "@material-ui/lab";
import PropTypes from "prop-types";
import { TabContext, TabPanel } from "@material-ui/lab";
import GeoLocationTab from "./Tabs/GeoLocationTab";
import ListTab from "./Tabs/ListTab";
import FilterTab from "./Tabs/FilterTab";
import PaginationTab from "./Tabs/misc/Pagination"
export default class TabsComponent extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, newValue) => {
    let currentComponent = this;
    currentComponent.setState({
      value: newValue,
    });
  };

  render() {
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };

    const { value } = this.state;

    return (
      <div style={{ height:'auto'}}>
           <FilterTab />
           <Divider style={{margin: '70px 0 0 40px'}} light />
           <ListTab />
           <Divider style={{margin: '70px 0 0 40px'}} light />
           <div style={{marginTop: 30, marginBottom:30}} >
           <PaginationTab/>
           </div>
      </div> 
    );
  }
}
