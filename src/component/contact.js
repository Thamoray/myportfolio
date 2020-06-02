import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Thameur Abdellatif</h2>
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Wayfarers&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Overall&clotheColor=PastelBlue&eyeType=Close&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Brown"
              alt="avatar"
              style={{ height: "250px", width: "600px" }}
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              I am a student in master 2 Technology of hypermedia. I am
              currently doing an internship at Avanade. I chose this path
              because since my adolescence I became interested in new
              technologies, especially IT, and I always wanted to know how
              things worked. I am an autonomous person, very motivated and
              energetic but I also value cooperation and team spirit, I am
              sensitive to my environment and those around me.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +33 753215944
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    abdellatifthamer@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    live:.cid.897fd22fb5b6a9ef
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
