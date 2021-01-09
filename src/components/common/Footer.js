import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import "./main.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        Feito pra você por{" "}
        <b>
          Radar de Oficinas™ <DriveEtaIcon />
        </b>
      </p>
    </footer>
  );
}
