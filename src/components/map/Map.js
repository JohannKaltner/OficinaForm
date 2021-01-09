import React, { Component, useEffect, useState } from "react";
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
import { InputLabel, TextField, Typography } from "@material-ui/core";
import ExploreIcon from "@material-ui/icons/Explore";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./map.css";
// import { TabPanel } from "@material-ui/lab";
import PropTypes from "prop-types";
import { TabContext, TabPanel } from "@material-ui/lab";
import TabsComponent from "./TabsComponent";
import { useSelector } from "react-redux";
import { paintLayer, token, mapStyle, Image } from "../../services/misc/config";
import { HANDLE_CHANGE_VIEWPORT } from "../../services/redux/actions/action_types";
import Armazenado from "../../services/redux/store/";

function MapBox() {
  const estado = useSelector((state) => state);
  const viewport = estado.mapState.viewport;
  const Map = ReactMapGL({
    accessToken: token,
  });

  return (
    <Map
      animationOptions={{
        animate: true,
        duration: 1000,
      }}
      cameraOptions={{
        pitch: 60,
        bearing: -60,
      }}
      movingMethod='flyTo'
      {...viewport}
      zoom={[15]}
      center={[viewport?.longitude, viewport?.latitude]}
      style='mapbox://styles/mapbox/streets-v9'
      containerStyle={mapStyle}
      perspectiveEnabled
    >
      <ScaleControl />
      <ZoomControl style={{ top: 90, marginRight: 15 }} />
      <RotationControl style={{ top: 30, marginRight: 15 }} />

      <Layer
        id='3d-buildings'
        sourceId='composite'
        sourceLayer='building'
        filter={["==", "extrude", "true"]}
        type='fill-extrusion'
        minZoom={14}
        paint={paintLayer}
      />
      <ScaleControl />

      <Marker
        coordinates={[viewport.longitude, viewport.latitude]}
        anchor='bottom'
      >
        <img width={60} src={Image} />
      </Marker>
    </Map>
  );
}
export default MapBox;
