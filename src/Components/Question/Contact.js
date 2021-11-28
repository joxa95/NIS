import React from "react";
import "../About/About.scss";
import img1 from "../images/profile/pic1.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";

import {
  Button,
  Pagination,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import ForumIcon from "@mui/icons-material/Forum";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Contact() {
  return (
    <div>
      <br />
      <Grid container columnSpacing={4} rowSpacing={4}>
        <Grid item xs={12} md={12}>
          <div className="contactCard">
            <Container>
              <Typography variant="h4" fontWeight="600">
                Contact <span style={{ fontWeight: "200" }}>Information</span>
              </Typography>
              <br />
              <Typography varaint="body1" fontWeight="400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sed commodo felis.
              </Typography>
              <br />
              <hr />
              <br />
              <Typography variant="body1" fontWeight="300">
                <LocationOnIcon
                  style={{ color: "red", position: "relative", top: "5px" }}
                />
                Chortoq shahar
              </Typography>
              <Typography variant="body1" fontWeight="300">
                "Istiqlol xiyoboni" ko'chasi 12-uy <br />
                Mo'njal:"Afsona" bolalar bog'i yonida.
              </Typography>
              &nbsp;
              <Typography varaint="body1">
                <PhoneIcon
                  style={{ color: "green", position: "relative", top: "5px" }}
                />
                +998 99 322 01 13
              </Typography>
              &nbsp;
              <Typography varaint="body1">
                <MailIcon
                  style={{ color: "gray", position: "relative", top: "5px" }}
                />
                info@example.com
              </Typography>
              &nbsp;
              <hr />
              &nbsp;
              <Typography varaint="h5" fontWeight="600">
                Follow Us
                <br />
                <InstagramIcon
                  style={{
                    cursor: "pointer",
                    color: "rgb(255, 2, 162)",
                    margin: "10px 10px 10px 0",
                  }}
                />
                <TelegramIcon
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    margin: "10px 10px 10px 0",
                  }}
                />
                <FacebookIcon
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    margin: "10px 10px 10px 0",
                  }}
                />
              </Typography>
            </Container>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
