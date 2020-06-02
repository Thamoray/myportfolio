import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  toggleCategories() {
    return (
      <div>
        <section className="projects-grid">
          <Grid className="demo-grid-1">
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "400" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQIg2czR_jv1QQL2Pij6btz5D9Avn1ah2Y_-hOUX_BZXsRCMDw&usqp=CAU) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#FF1493",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    DSQE{" "}
                  </h5>
                  Design and development of a desktop application for periodical
                  control of station equipment for the National Oil Distribution
                  Company
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "400" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://spblog.net/image.axd?picture=/2019/spfx-with-any-version/cover.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#FF1493",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    Job Board{" "}
                  </h5>
                  Development of a web application which allows to present to
                  customers what is happening within the company (internal
                  projects) in a clear and graphically beautiful way.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "400" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2019/09/ES2019-Javascript-nocdnpng.png?fit=730%2C412&ssl=1) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#FF1493",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    Face-detection{" "}
                  </h5>
                  Setting up real time face detection through a webcam using AI.
                  This AI is so quick that we are able to draw in real time the
                  various faces and expressions of every person in the video.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
          {/* Project 1 */}

          {/* Project 2 */}

          {/* Project 3 */}
        </section>

        <section className="projects-grid">
          <Grid className="demo-grid-1">
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "500", margin: "400" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://www.swiftcoding.com/images/courses/php.png",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#FF1493",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    Search engine{" "}
                  </h5>
                  Implement techniques used for hypermedia-oriented automatic
                  indexing (textual, ...), as well as the use of SGBD in a
                  storage and consultation context.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "400" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://www.duniailkom.com/wp-content/uploads/2018/08/Python-Logo-Featured-Image-300x177.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#FF1493",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    WIFI virtualization
                  </h5>
                  Training on the Mininet-wifi software solution which enables
                  networks, switches, routers, firewalls, etc. to be deployed on
                  a single machine, automatically via python.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "400" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://www.windows8facile.fr/wp-content/uploads/2017/10/oracle-logo.jpg) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#FF1493",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    Pointing app
                  </h5>
                  Setting of database interface with Oracle 11g that enable
                  employers in the company to enter their information of
                  presence without filling the paper works.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
          {/* Project 3 */}

          {/* Project 3 */}

          {/* Project 3 */}
        </section>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
