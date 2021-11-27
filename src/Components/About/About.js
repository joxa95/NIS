import React from "react";
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
import icon1 from "../images/icon/icon1.png";
import icon2 from "../images/icon/icon2.png";
import icon3 from "../images/icon/icon3.png";
import icon4 from "../images/icon/icon4.png";
import "./About.scss";
import img1 from "../images/profile/pic1.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function About() {
  return (
    <div className="About">
      <div className="CoursesPage">
        <div className="backTypo">
          <Typography align="center" variant="h4" fontWeight="600">
            About Us1
          </Typography>
        </div>
      </div>
      <Container>
        <Grid container columnSpacing={4} rowSpacing={3}>
          <Grid item xs={12} md={3}>
            <div className="AboutCard">
              <img src={icon1} align="center" />
              <Typography variant="h5" align="center" fontWeight="600">
                Our Philosophy
                <Typography>
                  Lorem inspum dolor sit amet,consectetuer adipisicing elit,sed
                  diam nonummy nibh euismud
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="AboutCard">
              <img src={icon2} />
              <Typography variant="h5" align="center" fontWeight="600">
                Our Philosophy
                <Typography>
                  Lorem inspum dolor sit amet,consectetuer adipisicing elit,sed
                  diam nonummy nibh euismud
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="AboutCard">
              <img src={icon3} />
              <Typography variant="h5" align="center" fontWeight="600">
                Our Philosophy
                <Typography>
                  Lorem inspum dolor sit amet,consectetuer adipisicing elit,sed
                  diam nonummy nibh euismud
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="AboutCard">
              <img src={icon4} />
              <Typography variant="h5" align="center" fontWeight="600">
                Our Philosophy
                <Typography>
                  Lorem inspum dolor sit amet,consectetuer adipisicing elit,sed
                  diam nonummy nibh euismud
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="story">
              <Typography variant="h5" fontWeight="600">
                Our Story
                <Typography className="space" variant="body1" align="left">
                  <br />
                  Lorem ipsum dolor sit amet.
                  <br /> <br /> Consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Typography>
                <br />
                <Button type="submit" variant="contained">
                  Read More
                </Button>
              </Typography>
            </div>
          </Grid>
          <Grid item md={6}></Grid>
          <Grid item xs={12} md={3}>
            <Typography
              style={{
                padding: "10px",
                margin: "20px",
                color: "rgb(120, 0, 181)",
              }}
              variant="h2"
              fontWeight="600"
              align="center"
            >
              3000+
              <br />
              <Typography
                style={{ color: "#545454" }}
                variant="body1"
                fontWeight="500"
              >
                Completed Projects
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              style={{ padding: "10px", margin: "20px" }}
              variant="h2"
              fontWeight="600"
              align="center"
            >
              2500+
              <br />
              <Typography
                style={{ color: "#545454" }}
                variant="body1"
                fontWeight="500"
              >
                Happy Clients
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              style={{
                padding: "10px",
                margin: "20px",
                color: "rgb(120, 0, 181)",
              }}
              variant="h2"
              fontWeight="600"
              align="center"
            >
              1500+
              <br />
              <Typography
                style={{ color: "#545454" }}
                variant="body1"
                fontWeight="500"
              >
                Questions Answered
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              style={{ padding: "10px", margin: "20px" }}
              variant="h2"
              fontWeight="600"
              align="center"
            >
              1000+
              <br />
              <Typography
                style={{ color: "#545454" }}
                variant="body1"
                fontWeight="500"
              >
                Ordered coffee's
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <div className="fixedBack">
        <div className="backTypoFixed">
          <Container>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" fontWeight="600" align="center">
                  Leran a new skill online on your time
                </Typography>
                <Typography varaint="h6" fontWeight="600" align="center">
                  57,000 onine Courses
                </Typography>
                <Typography variant="body5" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed commodo felis. Curabitur rhoncus ipsum urna, ac
                  semper metus sollicitudin at. In nisi turpis, congue quis
                  viverra sed, luctus eleifend tellus. Maecenas ornare tincidunt
                  velit, et vestibulum mauris iaculis a. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Nunc at diam id magna finibus placerat et sit amet diam.
                  Nunc non tempor ex, at tempus sem. Nunc at venenatis magna, et
                  tempus lacus. Donec interdum est eget tempor feugiat.
                </Typography>{" "}
                <br />
                <Button variant="contained">Join now </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <br />
      <Container>
        <div className="carouselCards">
          <Grid container rowSpacing={4} columnSpacing={4}>
            <Grid item xs={12} md={12}>
              <Typography
                variant="h5"
                fontWeight="600"
                style={{ borderLeft: "4px solid gold", paddingLeft: "5px" }}
              >
                What People <span style={{ fontWeight: "200" }}>Say</span>
              </Typography>
              <Typography varaint="body1" align="left">
                At tempus sem nunc at venenatis magna, et tempus lacus.
                <br /> Donec interdum est eget tempor feugiat.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="gridCard">
                <Typography variant="h6" fontWeight="700">
                  Julia Homes
                </Typography>
                <br />
                <Typography varaint="body1" fontWeight="500">
                  -Art Director
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed commodo felis. Curabitur rhoncus ipsum urna, ac
                  semper metus sollicitudin at. In nisi turpis, congue quis
                  viverra sed, luctus eleifend tellus.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="gridCard">
                <Typography variant="h6" fontWeight="700">
                  Peter Parker
                </Typography>
                <Typography varaint="body1" fontWeight="500">
                  -Art Director
                </Typography>
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed commodo felis. Curabitur rhoncus ipsum urna, ac
                  semper metus sollicitudin at. In nisi turpis, congue quis
                  viverra sed, luctus eleifend tellus.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <br />
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid item xs={12} md={6}>
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
          {/* <Grid item xs={12} md={6} >
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48126.28959040132!2d71.78943084917447!3d41.07132930752849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb53171d45fdc1%3A0x42561f3e8ba4c90e!2sChortoq%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1637909995912!5m2!1suz!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
          </Grid> */}
        </Grid>
      </Container>
      <br />
    </div>
  );
}
