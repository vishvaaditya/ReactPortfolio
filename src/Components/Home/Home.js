import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <body>
        <div class="heading">
          <div class="jumbotron text-center">
            <h1 class="myname"> Vishva Aditya R T</h1>
            <p class="myjob">Intern Cloud Engineering</p>
            <ul class="nav nav-pills nav-justified">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  {' '}
                  Home{' '}
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="/Project">
                  {' '}
                  Project{' '}
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="/Contact">
                  {' '}
                  Contact{' '}
                </a>
              </li>
            </ul>
          </div>
          <div class="home-container ">
            <div class="row">
              <div class="col-sm-4">
                <div class="profile-image" style={{ marginTop: '20px' }}>
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQGxVvXw0DO3Yw/profile-displayphoto-shrink_400_400/0/1673576050739?e=1698883200&v=beta&t=X_8A7T7WlGa82fLfYEdNuSq2U8BqTplcTWiocFbFx9A"
                    class="rounded-circle mx-auto d-block"
                    alt="My Image"
                    width="150px"
                    height="150px"
                  />
                </div>
              </div>
              <br />
              <div class="col-sm-8">
                <h2 class="title"> About Me: </h2>
                <br />
                <p class="description">
                  I am an enthusiastic and active person with a BE in Computer
                  Science and Engineering. I am currently working as a Cloud
                  Engineer Intern at Kaar Tech for 3 months. I have prior
                  knowledge on Python, Flask, Microsoft PowerBI, and have worked
                  as a SAP Trainee at Kaar Tech for 8 months. During my college
                  days, my team reached the final round in Techgium 5th Edition
                  conducted by L&T. I am passionate about learning new things
                  and acquiring practical ability in them. My long-term goal is
                  to become a successful Full Stack Developer by honing my
                  creative thinking, problem-solving, and emerging technical
                  skills. I am currently diving deep into the fields of Cloud
                  Computing and DevOps to consolidate various emerging technical
                  aspects into one spot.
                </p>
              </div>
              <br />
              <div class="home-container">
                <div class="row">
                  <div class="col-sm-6">
                    <h2 class="title">Academic Details:</h2>
                    <br />
                    <ul class="description">
                      <li>
                        {' '}
                        <b>BE Computer Science and Engineering: (2019-2023)</b>
                        <br />
                        Vel Tech High Tech DR. Rangarajan Dr.Sakunthala
                        Engineering College. Percentage: 92.3%[CGPA-9.23/10]
                      </li>

                      <li>
                        {' '}
                        <b>Higher Secondary Education(XII): (2018-2019)</b>
                        <br />
                        Kalaimagal Viddyalaya Matriculation Higher Secondary
                        School. Percentage: 86.16%
                      </li>

                      <li>
                        {' '}
                        <b>Senior Secondary Education(X): (2016-2017)</b>
                        <br />
                        Kalaimagal Viddyalaya Matriculation Higher Secondary
                        School. Percentage: 93.8%
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div class="col-sm-6">
                    <h2 class="title">Courses</h2>
                    <br />
                    <ul class="description">
                      <li>
                        Python Programming Complete Beginner Course Bootcamp
                        2022
                      </li>
                      <li>
                        Python Introduction to Data Science and Machine Learning
                      </li>
                      <li>
                        I have completed NPTEL course in Python for Data science
                      </li>
                      <li>
                        Complete JAVASCRIPT with HTML5,CSS3 from zero to
                        Expert-2023
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div class="col-sm-12">
                    <h2 class="title"> My Projects</h2>
                    <br />
                    <table class="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th>Project name</th>
                          <th>Languages used</th>
                          <th>GitHub link for Project</th>
                        </tr>
                      </thead>
                      <tbody>
                        <td>
                          Early Detection of Chronic Kidney Disease using
                          Machine Learning
                        </td>
                        <td>Html, Css, Python, Flask</td>
                        <td>
                          <a href="https://github.com/IBM-EPBL/IBM-Project-18233-1659681545">
                            CKD Application
                          </a>
                        </td>
                      </tbody>

                      <tbody>
                        <td>ChatBot</td>
                        <td>Python, AI</td>
                        <td>
                          <a href="https://github.com/vishvaaditya/ChatBot">
                            Food Ordering Bot
                          </a>
                        </td>
                      </tbody>

                      <tbody>
                        <td>Sales Forecasting Website</td>
                        <td>Angular, Flask, MongoDB, PowerBI, Python</td>
                        <td>
                          <a href="https://github.com/vishvaaditya/Sales_Forecasting_Website">
                            Sales Forecast App
                          </a>
                        </td>
                      </tbody>
                    </table>
                  </div>
                  <br />

                  <div class="col-sm-12">
                    <h2 class="title"> My Skills</h2>
                    <br />
                    <table class="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th>Front End</th>
                          <th>Intermediate & Backend</th>
                          <th>Tools</th>
                        </tr>
                      </thead>
                      <tbody>
                        <td>HTML, CSS , Javascript, Angular, ReactJS</td>
                        <td>Flask, Python, MongoDB</td>
                        <td>
                          Microsoft PowerBI, Jenkins, Docker, VS code, Anaconda
                          Navigator, Jupyter Notebook, Google Colab
                        </td>
                      </tbody>
                    </table>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div class="jumbotron text-center" id="footer">
            <ul class="nav justify-content-center">
              <li
                class="nav-item"
                style={{
                  marginRight: '40px',
                  marginLeft: '40px',
                  fontSize: '40px',
                }}
              >
                <a href="https://www.linkedin.com/in/vishva-aditya-r-t-8885751b0/">
                  <SocialIcon url="https://www.linkedin.com/in/vishva-aditya-r-t-8885751b0/" />
                </a>
              </li>

              <li
                class="nav-item"
                style={{
                  marginRight: '40px',
                  marginLeft: '40px',
                  fontSize: '40px',
                }}
              >
                <a href="https://github.com/vishvaaditya/">
                  <SocialIcon url="https://github.com/vishvaaditya/" />
                </a>
              </li>

              <li
                class="nav-item"
                style={{
                  marginRight: '40px',
                  marginLeft: '40px',
                  fontSize: '40px',
                }}
              >
                <a href="https://www.linkedin.com/in/vishva-aditya-r-t-8885751b0/">
                  <SocialIcon url="https://instagram.com/vishva_aditya?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" />
                </a>
              </li>
              <br />
            </ul>
          </div>
        </div>
      </body>
    );
  }
}

export default Home;
