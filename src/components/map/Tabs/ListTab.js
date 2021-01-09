import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InputLabel } from "@material-ui/core";
import ExploreIcon from "@material-ui/icons/Explore";
import "../map.css";
import CardOficinaMap from "../../cards/CardOficinaMap";
import { GetOficinas } from "../../../services/functions/userRequests";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import "@brainhubeu/react-carousel/lib/style.css";

export default function ListTab() {
  const estado = useSelector((state) => state);
  const [HasLoaded, setHasLoaded] = useState(false);
  const oficinas = estado.oficinaState?.Data;
  useEffect(() => {
    GetOficinasList();
  }, []);
  
  const GetOficinasList = () => {
    GetOficinas(1);
    setHasLoaded(true); 
  };

  return (
    <div
      className="oficinasDiv"
      style={{
        width: "100%",
        zIndex: 0,
      }}
    >
      <div style={{ margin: 20,   marginTop: 40 }}>
        <EmojiTransportationIcon
          style={{
            color: "rgb(47 174 105)",
            paddingRight: 10,
          
          }}
        />
        <InputLabel
          style={{
            paddingTop: 3,
            paddingBottom: 30,
            fontSize: 20,
            marginRight: 10,
          }}
        >
          Selecione uma Oficina
        </InputLabel>

        {HasLoaded === true ? (
          oficinas.map((Oficinas, index) => {
            return (
              <div key={Oficinas.id} style={{ paddingBottom: 25 }}>
                <CardOficinaMap oficinas={Oficinas} />
              </div>
            );
          })
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
}
