import Raect from "react";
import icon1 from "../images/icon/icon1.png";
import icon2 from "../images/icon/icon2.png";
import icon3 from "../images/icon/icon3.png";
import icon4 from "../images/icon/icon4.png";
import "../About/About.scss";
import { Typography, Container } from "@mui/material";

export default function QuestionCard(props) {
  return (
    <div>
      <div className="AboutCard">
        <img src={props.Icons} align="center" />
        <Typography variant="h5" align="center" fontWeight="600">
          {props.Typo}
          <Typography>
            Lorem inspum dolor sit amet,consectetuer adipisicing elit,sed diam
            nonummy nibh euismud
          </Typography>
        </Typography>
      </div>
    </div>
  );
}
