import React, { useEffect, useState } from "react";
import Topbar from "../Topbar";
import "./map.css";
import TabsComponent from "./TabsComponent";
import { useSelector } from "react-redux";
import { HANDLE_CHANGE_VIEWPORT } from "../../services/redux/actions/action_types";
import Armazenado from "../../services/redux/store/";
import MapBox from "./Map";
import { Height } from "@material-ui/icons";
function MapContainer() {
  const [value, setValue] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  const estado = useSelector((state) => state);
  const viewport = estado.mapState.viewport;
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    await navigator.geolocation.getCurrentPosition(
      function (position) {
        const crd = position.coords;
        // console.log("Sua posição atual é:");
        // console.log("Latitude : " + crd.latitude);
        // console.log("Longitude: " + crd.longitude);
        // console.log("Mais ou menos " + crd.accuracy + " metros.");

        Armazenado.dispatch({
          type: HANDLE_CHANGE_VIEWPORT,
          viewport: {
            latitude: crd.latitude,
            longitude: crd.longitude,
          },
        });
      },
      function error(err) {
        console.warn("ERROR(" + err.code + "): " + err.message);
      },
      options
    );
    await setHasLoaded(true);
  }

  return (
    <div style={{ overflowX: "hidden",overflow: "hidden" }}>
      <Topbar currentPath={"map"} />
      <div
        style={{
          
          width: "100%",
          overflow: "hidden",
          alignContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              // display: "inline-block",
              textAlign:'center',
              justifyContent:'center',
              alignItems:'center',
              marginTop: 30,
              zIndex: 0,
            }}
          >
            {hasLoaded === true ? <TabsComponent value={value} /> : <div />}
          </div>
          {/* <MapBox /> */}
        </div>
      </div>
    </div>
  );
}
export default MapContainer;
