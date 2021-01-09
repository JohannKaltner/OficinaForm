import React, { Component } from "react";

import Geocoder from "react-mapbox-gl-geocoder";
import { InputLabel } from "@material-ui/core";
import ExploreIcon from "@material-ui/icons/Explore";
import "../map.css";
// import { TabPanel } from "@material-ui/lab";
import PropTypes from "prop-types";
import { TabPanel } from "@material-ui/lab";
import Armazenado from "../../../services/redux/store";
import { HANDLE_CHANGE_VIEWPORT } from "../../../services/redux/actions/action_types";
import { useSelector } from "react-redux";
import { token } from "../../../services/misc/config";

export default function GeoLocationTab() {
  const estado = useSelector((state) => state);

  const viewport = estado.mapState.viewport;

  const onSelected = (viewport) => {
    console.log(viewport);
    Armazenado.dispatch({
      type: HANDLE_CHANGE_VIEWPORT,
      viewport: {
        latitude: viewport.latitude,
        longitude: viewport.longitude,
      },
    });
  };

  const queryParams = {
    country: "br",
  };

  return (
    <div
      style={{
        marginLeft: 20,
        width: "100%",
        zIndex: 0,
      }}
    >
      <ExploreIcon
        style={{
          float: "left",
          color: "rgb(47 174 105)",
          paddingRight: 10,
        }}
      />
      <InputLabel style={{ paddingTop: 3, marginLeft: 10, fontSize: 20 }}>
        Insira um Endereço
      </InputLabel>

      <Geocoder
        // initialInputValue=''
        onSelected={(viewport) => onSelected(viewport)}
        viewport={viewport}
        hideOnSelect={false}
        queryParams={queryParams}
        onViewportChange={(viewport) => console.log(viewport)}
        mapboxApiAccessToken={token}
        collapsed={true}
      />
    </div>
  );
}
