import React, { Component } from "react";

import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

export class resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
                alt="avatar"
                style={{ height: "400px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Thameur Abdellatif</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Thameur A. is a junior designer and developer of computer
              application. During his university career, Thameur A. carried out
              several projects on ERP, artificial intelligence, database
              management and virtualization of WIFI networks. Thameur A. is a
              self-reliant, highly motivated, energetic and results-oriented
              person, but he also values ​​cooperation and teamwork skills.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>18, Avenue François Arago, Le Vésinet 78110, Paris, France</p>
            <h5>Phone</h5>
            <p>(+33) 753215944</p>
            <h5>Email</h5>
            <p>abdellatifthamer@gmail.com</p>
            <h5>Web</h5>
            <p>Thamoray.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2017}
              schoolName="Faculté de Sciences Economique et de Gestions de Tunis, Tunisie"
              schoolDescription="Fundamental License in IT applied to management
              en in"
            />
            <Education
              startYear={2017}
              endYear={2018}
              schoolName="Institut Supérieur de l'informatique d'Ariana, Tunisie "
              schoolDescription="engineering curriculum"
            />
            <Education
              startYear={2018}
              endYear={2019}
              schoolName="UFR de Versailles,France "
              schoolDescription="Master 1 computer science"
            />
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="UFR de Paris 8,France "
              schoolDescription="Master 2 Technology of hypermedia"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>

            <Experience
              startYear={2015}
              jobName="Internship -MIC"
              jobDescription="Thameur A. discovered the different trades of the company as well as the working conditions. he integrated the rules and habits of the company. Thameur A. assisted the head of the IT department in the maintenance of hardware and computer networks. Also, he completed an accelerated training on the Microsoft Dynamics NAV integrated management software
              "
            />

            <Experience
              startYear={2017}
              jobName="DSQE App -SNDP"
              jobDescription="Design and development of a desktop application for periodical control of station equipment for the company.
              Needs analysis of the department concerned
              Detailed design of each component and how they contribute to meeting needs
              App implementation
              Unit tests
              Deployment of the app
              
              "
            />
            <Experience
              startYear={2020}
              jobName="Job Board -Avanade"
              jobDescription="Development of a web application which allows to present to
              customers what is happening within the company (internal projects)
              in a clear and graphically beautiful way.
              
              "
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={70} />
            <Skills skill="Sharepoint" progress={60} />
            <Skills skill="React" progress={60} />
            <Skills skill="Oracle" progress={60} />
            <Skills skill="Python" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default resume;
