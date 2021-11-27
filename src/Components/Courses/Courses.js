import React from "react";
import {
  Button,
  Pagination,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Courses.scss";
import pic1 from "../images/blog/default/thum1.jpg";
import pic2 from "../images/blog/default/thum2.jpg";
import pic3 from "../images/blog/default/thum3.jpg";
import pic4 from "../images/blog/default/thum4.jpg";
import pic5 from "../images/event/pic1.jpg";
import pic6 from "../images/event/pic2.jpg";
import pic7 from "../images/event/pic3.jpg";
import pic8 from "../images/event/pic4.jpg";

export default function Courses() {
  return (
    <div className="Courses">
      <div className="CoursesPage">
        <div className="backTypo">
          <Typography align="center" variant="h4" fontWeight="600">
            Our Courses
          </Typography>
        </div>
      </div>

      <Container>
        <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid item xs={12} md={3}>
            <TextField
              variant="standard"
              label="Search for Courses"
              fullWidth
            />
            <Typography align="center" variant="h6" fontWeight="600">
              All Courses
            </Typography>
            <a href="#">
              <li>General</li>
            </a>
            <a href="#">
              <li>It & Software</li>
            </a>
            <a href="#">
              <li>Photography</li>
            </a>
            <a href="#">
              <li>Programming Language</li>
            </a>
            <a href="#">
              <li>Technology</li>
            </a>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="CourseCard">
              <img src={pic1} />
              <Typography
                style={{ padding: "10px" }}
                variant="h6"
                align="center"
                fontWeight="500"
              >
                Introduction EduChamp-LMS plugin
                <Typography variant="body2">Programming</Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="CourseCard">
              <img src={pic2} />
              <Typography
                style={{ padding: "10px" }}
                variant="h6"
                align="center"
                fontWeight="500"
              >
                Introduction EduChamp-LMS plugin
                <Typography variant="body2">Programming</Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="CourseCard">
              <img src={pic3} />
              <Typography
                style={{ padding: "10px" }}
                variant="h6"
                align="center"
                fontWeight="500"
              >
                Introduction EduChamp-LMS plugin
                <Typography variant="body2">Programming</Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="backTypo1">
              <div className="backTypo2">
                <Typography align="center" variant="h5" fontWeight="600">
                  Free Online <br /> Courses <br />
                  <Button variant="outlined" color="secondary">
                    Join Now
                  </Button>
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="CourseCard">
              <img src={pic4} />
              <Typography
                style={{ padding: "10px" }}
                variant="h6"
                align="center"
                fontWeight="500"
              >
                Introduction EduChamp-LMS plugin
                <Typography variant="body2">Programming</Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="CourseCard">
              <img src={pic5} />
              <Typography
                style={{ padding: "10px" }}
                variant="h6"
                align="center"
                fontWeight="500"
              >
                Introduction EduChamp-LMS plugin
                <Typography variant="body2">Programming</Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="CourseCard">
              <img src={pic6} />
              <Typography
                style={{ padding: "10px" }}
                variant="h6"
                align="center"
                fontWeight="500"
              >
                Introduction EduChamp-LMS plugin
                <Typography variant="body2">Programming</Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={3}>
            <div className="CourseCard">
              <img src={pic7} />
              <Typography
                style={{ padding: "10px" }}
                variant="h6"
                align="center"
                fontWeight="500"
              >
                Introduction EduChamp-LMS plugin
                <Typography variant="body2">Programming</Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="CourseCard">
              <img src={pic8} />
              <Typography
                style={{ padding: "10px" }}
                variant="h6"
                align="center"
                fontWeight="500"
              >
                Introduction EduChamp-LMS plugin
                <Typography variant="body2">Programming</Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="CourseCard">
              <img src={pic1} />
              <Typography
                style={{ padding: "10px" }}
                variant="h6"
                align="center"
                fontWeight="500"
              >
                Introduction EduChamp-LMS plugin
                <Typography variant="body2">Programming</Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={0} md={3}></Grid>
          <Grid item xs={12} md={3}>
            <Pagination
              className="pagination"
              count={3}
              variant="outlined"
              // color="secondary"
              shape="rounded"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
