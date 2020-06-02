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

class aboutme extends Component {
  toggleCategories() {
    return (
      <div>
        <section className="projects-grid">
          {/* Project 1 */}
          <Grid className="demo-grid-1">
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://miro.medium.com/max/360/1*JCBq6XbKZAeKjWEB51s30A.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#CD853F",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    Geek{" "}
                  </h5>
                  My favorite field is programming. I like it because with the
                  proper language we can do magic.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={5}
                style={{
                  minWidth: "450",
                  margin: "auto",
                  padding: "50",
                }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://previews.123rf.com/images/artinspiring/artinspiring1710/artinspiring171000698/88368620-jumping-business-people-in-suits-on-white-.jpg) center / cover",
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
                    Team worker{" "}
                  </h5>
                  There’s a synergy in teamwork that can accomplish far more
                  than the same individuals working alone.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={5}
                style={{
                  minWidth: "450",
                  margin: "auto",
                  padding: "50",
                }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.pinimg.com/originals/6a/38/c6/6a38c6580c45d037d92794610cee6a78.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#D5DE0B",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    Motivated{" "}
                  </h5>
                  Success is not final, failure is not fatal: It is the courage
                  to continue that counts.Don't be afraid to give up the good to
                  go for the great.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>

          {/* Project 2 */}

          {/* Project 3 */}
        </section>
        <br />
        <section className="projects-grid">
          <Grid className="demo-grid-1">
            <Cell col={4}>
              <Card
                shadow={5}
                style={{
                  minWidth: "450",
                  margin: "auto",
                  padding: "50",
                }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://www.searchpng.com/wp-content/uploads/2019/02/Travel-Clip-art-PNG-image-715x715.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#FF7F50",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    Travel
                  </h5>
                  As much as you can, as far as you can, as long as you can.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* <Card
                shadow={5}
                style={{ minWidth: "450", margin: "auto", padding: "50" }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://cdn3.iconfinder.com/data/icons/travel-flat-7/64/tourist--people-avatar-holidays-user-leisure-traveler-512.png",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#FF7F50",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    Travel
                  </h5>
                  As much as you can, as far as you can, as long as you can.
                  Life's not meant to be lived in one place.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card> */}
            </Cell>
            <Cell col={4}>
              <Card
                shadow={5}
                style={{
                  minWidth: "450",
                  margin: "auto",
                  padding: "50",
                }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://cdn4.vectorstock.com/i/1000x1000/95/98/man-practicing-swimming-avatar-character-vector-22329598.jpg) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#00CED1",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    Sports{" "}
                  </h5>
                  Sport has the power to overcome old division and create the
                  bond of common aspiration.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card
                shadow={5}
                style={{
                  minWidth: "450",
                  margin: "auto",
                  padding: "50",
                }}
              >
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://media.istockphoto.com/vectors/earth-day-man-save-green-planet-environment-people-of-world-water-vector-id1127279984?k=6&m=1127279984&s=612x612&w=0&h=nAvUt_7_umKfg2YrtkAx8Ztm5wQQxgORqpF4EnbXFBk=) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h5
                    style={{
                      color: "#3CB371",
                      fontFamily: "Arial Black",
                      fontweight: "bold",
                    }}
                  >
                    {" "}
                    Go green{" "}
                  </h5>
                  All I want for tomorrow is a healthy planet. Go green we don't
                  have another planet.
                </CardText>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </section>
        <section className="projects-grid">
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

export default aboutme;
